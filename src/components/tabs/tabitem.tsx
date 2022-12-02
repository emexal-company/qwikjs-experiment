import { component$, useStyles$, Slot, useContextProvider, useStore, useContext } from "@builder.io/qwik";
import { TabsStore, TabsContext } from "./context";
import styles from "./tabs.scss?inline";

interface TabItemProps {
  value: string;
}

export const TabItem = component$((props: TabItemProps) => {
  //useStyles$(styles);

  const tabstore = useContext<TabsStore>(TabsContext);

  return (
    <li
      class="nav-item"
      data-value={props.value}
      preventdefault:click
      onClick$={async () => {
        if (tabstore.onItemSelected$) {
          await tabstore.onItemSelected$(props.value);
        }
      }}
    >
      <a
        class={{
          "nav-link": true,
          active: tabstore.selected == props.value,
        }}
        aria-current="page"
        href="#"
      >
        <Slot />
      </a>
    </li>
  );
});
