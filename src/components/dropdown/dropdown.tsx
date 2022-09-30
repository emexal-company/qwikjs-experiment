import { component$, useStyles$, Slot, useStore, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./dropdown.scss?inline";

interface DropdownProps {
  buttonClass?: string;
  menuClass?: string;
}

interface DropdownStore {
  open: boolean;
}

export const Dropdown = component$((props: DropdownProps) => {
  useStyles$(styles);
  useStylesScoped$(`
        ul.show {
            position: absolute; 
            inset: 0px auto auto 0px; 
            margin: 0px; 
            transform: translate(0px, 40px);
        }
    `);
  const store = useStore<DropdownStore>({ open: false });

  return (
    <div class="dropdown">
      <button
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        class={`btn btn-secondary dropdown-toggle ${store.open ? "show" : ""} ${props.buttonClass ?? ""}`}
        onClick$={() => (store.open = !store.open)}
      >
        <Slot name="button" />
      </button>
      <ul class={`dropdown-menu ${store.open ? "show" : ""} ${props.menuClass ?? ""}`}>
        <Slot name="item" />
      </ul>
    </div>
  );
});
