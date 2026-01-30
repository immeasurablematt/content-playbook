import { cn } from "@/lib/utils";

type Props = {
  children: string;
  className?: string;
  title?: string;
};

export function CodeBlock({ children, className, title }: Props) {
  return (
    <div className={cn("not-prose my-4", className)}>
      {title && (
        <p className="mb-1 text-xs font-medium text-ink-muted">{title}</p>
      )}
      <pre className="overflow-x-auto rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 font-mono text-sm leading-relaxed text-ink">
        <code>{children}</code>
      </pre>
    </div>
  );
}
