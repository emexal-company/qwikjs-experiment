import { component$, useStyles$, Slot, useContextProvider, useStore, useContext } from "@builder.io/qwik";
import { TabsStore, TabsContext } from "./context";
import styles from "./tabs.scss?inline";

interface TabPanelsProps {
  selected: string;
}

export const TabPanels = component$((props: TabPanelsProps) => {
  //useStyles$(styles);

  const tabstore = useContext<TabsStore>(TabsContext);

  return (
    <div class="tab-content">
      <Slot />
    </div>
  );
});
