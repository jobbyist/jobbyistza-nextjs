'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Client-side redirect component – mirrors React Router's <Navigate to="..." replace />.
 * Redirects to `href` as soon as the component mounts.
 */
export function RedirectTo({ href, replace = false }: { href: string; replace?: boolean }) {
  const router = useRouter();
  useEffect(() => {
    if (replace) {
      router.replace(href);
    } else {
      router.push(href);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
