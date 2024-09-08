"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-[90vh] flex items-center justify-center px-4">
      <div className="flex h-full flex-col items-center justify-center">
        <h2 className="text-center text-3xl font-semibold">
          Something went wrong!
        </h2>
        <button
          className="mt-5 text-center rounded-md bg-white/5 py-1.5 px-3 text-sm/6 font-semibold text-white"
          onClick={() => reset()}
        >
          Try again
        </button>
      </div>
    </main>
  );
}
