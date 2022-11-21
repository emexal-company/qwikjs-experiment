import { component$, PropFunction } from "@builder.io/qwik";
import { FontAwesomeIcon } from "../fa-icon/fa-icon";

export interface DropdownSplitButtonProps {
  open?: boolean;
  onClick$?: PropFunction<() => void>;
  icon?: string;
}

export const DropdownSplitButton = component$((props: DropdownSplitButtonProps) => {

  return (<>(props.icon) 
  ? 
    <button
      type="button"
      class={`btn btn-secondary dropdown-toggle-split ${props.open ? "show" : ""}`}
      aria-expanded="false"
      onClick$={props.onClick$}
    >
      <span class="visually-hidden">Toggle Dropdown</span>
      <FontAwesomeIcon family="regular" style="solid" icon={props.icon}></FontAwesomeIcon>
    </button>
   : 
    <button
      type="button"
      class={`btn btn-secondary dropdown-toggle dropdown-toggle-split ${props.open ? "show" : ""}`}
      aria-expanded="false"
      onClick$={props.onClick$}
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
  </>);
});
