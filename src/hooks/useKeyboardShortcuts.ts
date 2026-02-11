import { useEffect } from "react";

export function useKeyboardShortcut(
  key: string,
  callback: () => void,
  options?: { meta?: boolean; ctrl?: boolean }
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const matchesMod = e.metaKey || e.ctrlKey;

      if (e.key.toLowerCase() === key.toLowerCase() && matchesMod) {
        if ((options?.meta && !e.metaKey) || (options?.ctrl && !e.ctrlKey)) {
          return;
        }
        e.preventDefault();
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [key, callback, options?.meta, options?.ctrl]);
}
