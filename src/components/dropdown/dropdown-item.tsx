import { component$, Ref, Slot, useContext, useRef, $, useMount$, useStore } from "@builder.io/qwik";
import { DropdownContext, DropdownStore } from "./context";

interface DropdownItemProps {
  href?: string
  value: string;
}

export const DropdownItem = component$((props: DropdownItemProps) => {
  const dropdownStore = useContext<DropdownStore>(DropdownContext);
  const isActive = dropdownStore.selected == `${props.value}`;
  const itemsRef = useRef();

  return (
    <li data-value={props.value} ref={itemsRef}
      onClick$={() => {
        if(dropdownStore.onItemSelected$) {
          dropdownStore.onItemSelected$(props.value);
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
