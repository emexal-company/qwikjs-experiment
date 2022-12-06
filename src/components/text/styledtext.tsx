import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./styledtext.scss?inline";

export interface StyledTextProps {
  align?: "start" | "center" | "end";
  valign?: "top" | "middle" | "bottom";
  header1?: boolean;
}

export interface VerticalAlignProps {
  valign?: "top" | "middle" | "bottom";
}

export const VerticalAlign = component$<VerticalAlignProps>((props) => {
  return (
    <>
      {props.valign == "bottom" || props.valign == "middle" ? (
        <div
          class={{
            "d-flex": true,
            "align-items-center": props.valign == "middle",
            "align-items-end": props.valign == "bottom",
          }}
        >
          <Slot />
        </div>
      ) : (
        <Slot />
      )}
    </>
  );
});

export const StyledText = component$<StyledTextProps>((props) => {
  useStyles$(styles);
  const hClasses = {
    "text-start": props.align == "start",
    "text-center": props.align == "center",
    "text-end": props.align == "end",
    "d-block": props.align == "center" || props.align == "end",
  };
  return (
    <VerticalAlign valign={props.valign}>
      {props.header1 ? (
        <h1 class={hClasses}>
          <Slot />
        </h1>
      ) : (
        <span class={hClasses}>
          <Slot />
        </span>
      )}
    </VerticalAlign>
  );
});
