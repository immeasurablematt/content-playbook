import type { AiCalloutEntry } from "@/data/aiCalloutData";
import { Sparkles } from "lucide-react";

type Props = {
  callout: AiCalloutEntry;
};

export function AiCallout({ callout }: Props) {
  return (
    <div className="rounded-lg border-l-4 border-callout-border bg-callout-bg p-4">
      <div className="flex items-start gap-2">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-callout-heading" />
        <h4 className="text-sm font-semibold leading-snug text-callout-heading">
          {callout.title}
        </h4>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-callout-text">
        {callout.tip}
      </p>
      {callout.tools.length > 0 && (
        <div className="mt-3 space-y-1.5">
          {callout.tools.map((tool) => (
            <div key={tool.name} className="text-xs text-callout-text/80">
              <span className="font-medium text-callout-heading">
                {tool.name}:
              </span>{" "}
              {tool.detail}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
