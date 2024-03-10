'use client';

export interface GlobalErrorProps {}

export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>Something globally went wrong</div>
      </body>
    </html>
  );
}
