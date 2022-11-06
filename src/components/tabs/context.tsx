import { createContext, PropFunction } from "@builder.io/qwik";

export interface TabsStore {
  selected?: string;
  onItemSelected$?: PropFunction<(value: string) => void>;
}

export const TabsContext = createContext<TabsStore>("tabs");
