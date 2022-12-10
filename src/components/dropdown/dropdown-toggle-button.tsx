import { component$, PropFunction, useClientEffect$, useContext, useRef, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import { FontAwesomeIcon } from "../fa-icon/fa-icon";
import { DropdownContext, DropdownStore } from "./context";
import styles from "./dropdown.scss?inline";

export interface DropdownToggleButtonProps {
  split?: boolean;
  onClick$?: PropFunction<() => void>;
  icon?: string;
}

export const DropdownToggleButton = component$((props: DropdownToggleButtonProps) => {
  useStylesScoped$(styles);
  const dropdownStore = useContext<DropdownStore>(DropdownContext);

  return (
    <>
      {props.icon ? (
        <button type="button" aria-expanded="false" class="btn btn-secondary" onClick$={props.onClick$}>
          {dropdownStore.label}
          <FontAwesomeIcon family="regular" style="solid" icon={props.icon}></FontAwesomeIcon>
        </button>
      ) : (
        <button type="button" aria-expanded="false" class={`btn btn-secondary ${props.split ? "" : "dropdown-toggle"}`} onClick$={props.onClick$}>
          {dropdownStore.label}
        </button>
      )}
    </>
  );
});
