import { createContext, PropFunction } from "@builder.io/qwik";

export interface DropdownStore {
  popupYOffset: number;
  popupXOffset: number;
  open: boolean;
  selected?: string;
  label?: string;
  onItemSelected$?: PropFunction<(value: string) => void>;
}

export const DropdownContext = createContext<DropdownStore>("dropdown");
