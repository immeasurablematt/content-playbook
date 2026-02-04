export function Web2Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-lg border border-blue-200 bg-blue-50 p-4">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
        💼 Web2 Equivalent
      </p>
      <div className="text-sm text-blue-900">{children}</div>
    </div>
  );
}
