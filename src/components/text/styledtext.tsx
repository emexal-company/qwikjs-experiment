import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./styledtext.scss?inline";

export interface StyledTextProps {
  align?: "start" | "center" | "end";
}

export const StyledText = component$<StyledTextProps>((props) => {
  useStyles$(styles);
  return (
    <span
      class={{
        "text-start": props.align == "start",
        "text-center": props.align == "center",
        "text-end": props.align == "end",
        "d-block": (props.align == "center") || (props.align == "end")
      }}
    >
      <Slot />
    </span>
  );
});
