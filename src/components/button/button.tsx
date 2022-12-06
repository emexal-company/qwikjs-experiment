import { component$, Slot, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./button.scss?inline";

interface ButtonProps {
  variant: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link";
  outline?: boolean;
  size?: string;
  disabled?: boolean;
  href?: string;
  class?: string;
}

export const Button = component$((props: ButtonProps) => {
  useStylesScoped$(styles);

  const size = props.size ? props.size.toLowerCase() : "standard";
  const variant = props.variant ? props.variant.toLowerCase() : "";

  const sizeClass = size == "large" ? "btn-lg" : size == "small" ? "btn-sm" : "";
  const variantClass = `btn-${props.outline ? "outline-" : ""}${variant}`;
  const disabledClass = props.disabled ? "disabled" : "";

  return (
    <>
      {props.href ? (
        <a
          class={`btn ${variantClass} ${sizeClass} ${disabledClass} ${props.class}`}
          href={props.href}
          role="button"
          tabindex={props.disabled ? -1 : undefined}
          aria-disabled={props.disabled ? "true" : undefined}
        >
          <Slot />
        </a>
      ) : (
        <button class={`btn ${variantClass} ${sizeClass} ${props.class}`} disabled={props.disabled}>
          <Slot />
        </button>
      )}
    </>
  );
});
