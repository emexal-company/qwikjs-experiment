import { component$, Slot, useClientEffect$, useContext, useRef, useStore, useStyles$, useWatch$, useStylesScoped$ } from '@builder.io/qwik';
import { DropdownContext, DropdownStore } from "./context";
import { styleMap } from "./style-map";
import styles from "./dropdown.scss?inline";

interface DropdownMenuStore {
  styles: any;
}

export const DropdownMenu = component$(() => {
  useStylesScoped$(styles);
  const dropdownStore = useContext<DropdownStore>(DropdownContext);
  const store = useStore<DropdownMenuStore>({
    styles: {}
  });

  const ulRef = useRef();

  useWatch$(({ track }) => {
    track(() => dropdownStore.open);

    if(dropdownStore.open) {
      store.styles = {
        position: 'absolute',
        inset: '0px auto auto 0px',
        margin: '0px',
        transform: `translate(${dropdownStore.popupXOffset}px, ${dropdownStore.popupYOffset}px)`
      };
    }
    else {
      store.styles = {};
    }
  });
  
  return (
    <ul ref={ulRef} class={`dropdown-menu ${dropdownStore.open ? "show" : ""}`} style={styleMap(store.styles)}>
      <Slot />
    </ul>
  );
});
