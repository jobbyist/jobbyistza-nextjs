'use client';
export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import CountryJobs from '@/views/CountryJobs';
export default function Page() {
  return (
    <Suspense>
      <CountryJobs />
    </Suspense>
  );
}
