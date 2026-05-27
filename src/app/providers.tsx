'use client';

import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "@/hooks/useAuth";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Preloader from "@/components/Preloader";
import RemoteSprintModal from "@/components/RemoteSprintModal";
import ConciergeChat from "@/components/ConciergeChat";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem("jobbyist:preloader-shown") !== "1";
    } catch {
      return true;
    }
  });

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      try {
        sessionStorage.setItem("jobbyist:preloader-shown", "1");
      } catch {
        // Ignore sessionStorage write failures in restricted environments.
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <RemoteSprintModal />
          <ConciergeChat />
          {children}
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
