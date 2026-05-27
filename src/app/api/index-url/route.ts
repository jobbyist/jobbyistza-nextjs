import { NextRequest, NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

const INDEXING_ENDPOINT =
  "https://indexing.googleapis.com/v3/urlNotifications:publish";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const { url, type = "URL_UPDATED" } = body;

    if (!url) {
      return NextResponse.json(
        { success: false, error: "Missing URL" },
        { status: 400 }
      );
    }

    const allowedBaseUrl = process.env.JOBBYIST_BASE_URL;
    if (allowedBaseUrl && !url.startsWith(allowedBaseUrl)) {
      return NextResponse.json(
        {
          success: false,
          error: "URL does not match the allowed Jobbyist base URL",
        },
        { status: 400 }
      );
    }

    const requiredEnvVars = [
      "GOOGLE_INDEXING_CLIENT_EMAIL",
      "GOOGLE_INDEXING_PRIVATE_KEY",
      "GOOGLE_INDEXING_PROJECT_ID",
    ];
    const missingEnvVars = requiredEnvVars.filter((key) => !process.env[key]);
    if (missingEnvVars.length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required environment variables",
          missing: missingEnvVars,
        },
        { status: 500 }
      );
    }

    const auth = new GoogleAuth({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      credentials: {
        client_email: process.env.GOOGLE_INDEXING_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_INDEXING_PRIVATE_KEY!.replace(
          /\\n/g,
          "\n"
        ),
        project_id: process.env.GOOGLE_INDEXING_PROJECT_ID,
        token_uri:
          process.env.GOOGLE_INDEXING_TOKEN_URI ||
          "https://oauth2.googleapis.com/token",
      } as any,
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    const client = await auth.getClient();
    const response = await client.request({
      url: INDEXING_ENDPOINT,
      method: "POST",
      data: { url, type },
    });

    return NextResponse.json({
      success: true,
      message: "URL submitted to Google Indexing API",
      data: (response as { data: unknown }).data,
    });
  } catch (error) {
    console.error("Google Indexing API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Google Indexing API request failed",
        details: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
