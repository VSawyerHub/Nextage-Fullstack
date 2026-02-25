"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <h2>OPS! Something went wrong :c</h2>
        <button onClick={() => reset()}>Try again?</button>
      </body>
    </html>
  );
}