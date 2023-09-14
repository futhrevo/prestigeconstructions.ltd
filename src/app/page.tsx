'use client';

import SlidingInterval from './_components/slides'

export default function Home() {
  return (
    <main id="content" role="main" className="shrink-0">
      <div className="max-w-[85rem] mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <SlidingInterval />
      </div>
    </main>
  )
}
