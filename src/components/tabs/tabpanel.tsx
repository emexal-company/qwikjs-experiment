import { component$, useStyles$, Slot, useContextProvider, useStore, useContext } from "@builder.io/qwik";
import { TabsStore, TabsContext } from "./context";
import styles from "./tabs.scss?inline";

interface TabPanelProps {
  value: string;
}

export const TabPanel = component$((props: TabPanelProps) => {
  //useStyles$(styles);

  const tabstore = useContext<TabsStore>(TabsContext);

  return (
    <div
      class={{
        "tab-pane": true,
        active: tabstore.selected == props.value,
      }}
      data-value={props.value}
    >
      <Slot />
    </div>
  );
});
