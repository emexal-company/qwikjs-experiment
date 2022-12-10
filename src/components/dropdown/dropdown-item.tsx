import { component$, Ref, Slot, useContext, useRef, $, useMount$, useStore, useStyles$, useStylesScoped$ } from '@builder.io/qwik';
import { DropdownContext, DropdownStore } from "./context";
import styles from "./dropdown.scss?inline";

interface DropdownItemProps {
  href?: string
  value: string;
}

export const DropdownItem = component$((props: DropdownItemProps) => {
  useStylesScoped$(styles);
  const dropdownStore = useContext<DropdownStore>(DropdownContext);
  const isActive = dropdownStore.selected == `${props.value}`;

  return (
    <li data-value={props.value}
      onClick$={async () => {
        if(dropdownStore.onItemSelected$) {
          await dropdownStore.onItemSelected$(props.value);
        } 
      }}
    >
      <a
        class={`dropdown-item ${isActive ? "active" : ""}`}
        aria-current={isActive ? "true" : "false"}
        href={props.href ? props.href : "#"}
      >
        <Slot />
      </a>
    </li>
  );
});
