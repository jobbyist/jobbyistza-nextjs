'use client';
export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import Jobs from '@/views/Jobs';
export default function Page() {
  return (
    <Suspense>
      <Jobs />
    </Suspense>
  );
}
