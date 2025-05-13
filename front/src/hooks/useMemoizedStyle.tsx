import { useMemo, CSSProperties } from "react";

type WebStyle = CSSProperties;

export function useMemoizedStyle<T extends WebStyle>(
  style: T,
  deps: any[] = []
): T | undefined {
  return useMemo(() => {
    return style ?? undefined;
  }, deps);
}
