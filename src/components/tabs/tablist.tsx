import { component$, useStyles$, Slot, useContextProvider, useStore, useContext } from "@builder.io/qwik";
import { TabsStore, TabsContext } from './context';
import styles from "./tabs.scss?inline";

interface TabListProps {
  selected: string;
}

export const TabList = component$((props: TabListProps) => {
  //useStyles$(styles);

  const tabstore = useContext<TabsStore>(TabsContext);

  return (
      <ul class="nav nav-tabs">
        <Slot/>
      </ul>
  );
});