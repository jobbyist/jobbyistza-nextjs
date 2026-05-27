'use client';
export const dynamic = 'force-dynamic';
import { Suspense } from 'react';
import LocationJobs from '@/views/LocationJobs';
export default function Page() {
  return (
    <Suspense>
      <LocationJobs />
    </Suspense>
  );
}
