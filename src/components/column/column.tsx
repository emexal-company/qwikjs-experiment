import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./column.scss?inline";

export const Column = component$(() => {
  useStyles$(styles);

  return (
    <div class="col">
      <Slot />
    </div>
  );
});
