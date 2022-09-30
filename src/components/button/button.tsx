import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./button.scss?inline";

interface ButtonProps {
  variant: string;
  outline?: boolean;
  size?: string;
  disabled?: boolean;
  href?: string;
  class?: string;
}

export const Button = component$((props: ButtonProps) => {
  useStyles$(styles);

  const sizeClass = props.size?.toLowerCase() == "large" ? "btn-lg" : props.size?.toLowerCase() == "small" ? "btn-sm" : "";
  const variantClass = `btn-${props.outline ? "outline-" : ""}${props.variant.toLowerCase()}`;
  const disabledClass = (props.disabled) ? "disabled" : "";

  if (props.href) {
    return (
        <a 
            class={`btn ${variantClass} ${sizeClass} ${disabledClass} ${props.class}`} 
            href={props.href} role="button" 
            tabindex={props.disabled ? -1 : undefined} 
            aria-disabled={props.disabled ? "true" : undefined}
        ><Slot /></a>
    );
  }
  else {
    return (
        <button class={`btn ${variantClass} ${sizeClass} ${props.class}`} disabled={props.disabled}>
        <Slot />
        </button>
    );
  }
});
