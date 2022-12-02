import { component$, useStyles$, Slot, useContextProvider, useStore } from "@builder.io/qwik";
import styles from "./container.scss?inline";
import { ContainerContext, ContainerStore } from "./context";

export interface ContainerProps {
  variant?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'fluid',
  xs?: string,
  sm?: string,
  md?: string,
  lg?: string,
  xl?: string,
  xxl?: string,
}

export const Container = component$((props: ContainerProps) => {
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
  useContextProvider(ContainerContext, store);

  return (
    <div class={`container${props.variant ? `-${props.variant}` : ''}`}>
      <Slot />
    </div>
  );
});
