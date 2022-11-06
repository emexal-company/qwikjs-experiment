import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./container.scss?inline";

export const Container = component$(() => {
  useStyles$(styles);

  return (
    <div class="container">
      <Slot />
    </div>
  );
});
