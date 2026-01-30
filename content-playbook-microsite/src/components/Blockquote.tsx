import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Blockquote({ children, className }: Props) {
  return (
    <blockquote
      className={cn(
        "border-l-4 border-accent-muted bg-accent-subtle/50 py-2 pl-4 pr-4 text-ink italic",
        className
      )}
    >
      {children}
    </blockquote>
  );
}
