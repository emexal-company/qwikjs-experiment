import { component$, useStyles$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import { ContainerStore } from "../container/context";
import { RowContext } from "./context";
import styles from "./row.scss?inline";

export interface RowProps {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
}

export const Row = component$((props: RowProps) => {
  useStyles$(styles);

  // Create the store and share with children as a context
  const store = useStore<ContainerStore>({
    xs: props.xs,
    sm: props.sm,
    md: props.md,
    lg: props.lg,
    xl: props.xl,
    xxl: props.xxl,
  });
  useContextProvider(RowContext, store);

  return (
    <div class="row">
      <Slot />
    </div>
  );
});
