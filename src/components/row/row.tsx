import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./row.scss?inline";

export const Row = component$(() => {
  useStyles$(styles);

  return (
    <div class="row">
      <Slot />
    </div>
  );
});
