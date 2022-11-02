import { component$, useStyles$, Slot, useStore, useContextProvider, $, useOnDocument, useRef, PropFunction, Ref, useClientEffect$, useWatch$ } from "@builder.io/qwik";
import styles from "./dropdown.scss?inline";
import { DropdownContext, DropdownStore } from "./context";
import { DropdownToggleButton } from "./dropdown-toggle-button";
import { DropdownSplitButton } from "./dropdown-split-button";
import { DropdownMenu } from "./dropdown-menu";

export interface DropdownProps {
  selected: string;
  split?: boolean;
  label?: string;
  icon?: string;
  onSelectionChange$: PropFunction<(value: string) => void>;
}

export const Dropdown = component$((props: DropdownProps) => {
  const onItemSelected$ = (store: DropdownStore, ref: Ref, props: DropdownProps) =>
    $(async (value: string) => {
      store.selected = value;
      store.open = false;

      // Search for the child, and extract text content to put it inside the label
      if (!props.label && props.label != '') {
        const selectedItem = ref.current?.querySelector(`li[data-value="${store.selected}"]`);
        if (selectedItem) {
          store.label = document.createTreeWalker(selectedItem, NodeFilter.SHOW_TEXT, null).nextNode()?.nodeValue ?? "";
        }
      }
    });

  const onDocumentClick$ = (store: DropdownStore, ref: Ref) =>
    $(async (e: Event) => {
      const event = e as MouseEvent;
      if (!ref.current?.contains(event.target as Node)) {
        store.open = false;
      }
    });

  useStyles$(styles);
  const itemsRef = useRef();
  // Store definition
  const store = useStore<DropdownStore>({
    label: props.label,
    open: false,
    selected: props.selected,
    popupXOffset: 0,
    popupYOffset: 0
  });
  store.onItemSelected$ = onItemSelected$(store, itemsRef, props);

  useContextProvider(DropdownContext, store);

  // Events registration
  useOnDocument("click", onDocumentClick$(store, itemsRef));

  useClientEffect$(() => {
    if (store.onItemSelected$) {
      store.onItemSelected$(props.selected);
    }
  });
  useWatch$(({ track }) => {
    track(() => store.open);
    
    // Ensure the element is already rendered, because the useWatch$ function might be executed on the server side
    if(itemsRef.current) {
      // Find the element used for toggling the dropdown
      const buttonElement = itemsRef.current.querySelector<HTMLButtonElement>('button:last-of-type');
      const buttonRect = buttonElement?.getBoundingClientRect();
      const parentRect = buttonElement?.parentElement?.getBoundingClientRect();

      if(buttonRect && parentRect) {
        store.popupXOffset = buttonRect.x - parentRect.x;
        store.popupYOffset = buttonRect.height + 2;
      }    
    }
  });

  const renderWithSplitButton = () => (
    <div class="btn-group" ref={itemsRef} data-name="Ressources">
      <DropdownToggleButton split></DropdownToggleButton>
      <DropdownSplitButton icon={props.icon}
        onClick$={$(() => {
          store.open = !store.open;
        })}
      ></DropdownSplitButton>
      <DropdownMenu>
        <Slot />
      </DropdownMenu>
    </div>
  );

  const renderWithoutSplitButton = () => (
    <div class="dropdown" ref={itemsRef}>
      <DropdownToggleButton icon={props.icon}
        onClick$={$(() => {
          store.open = !store.open;
        })}
      ></DropdownToggleButton>
      <DropdownMenu>
        <Slot />
      </DropdownMenu>
    </div>
  );

  return <>{props.split ? renderWithSplitButton() : renderWithoutSplitButton()}</>;
});

/*
      
*/
