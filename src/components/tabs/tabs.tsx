import { component$, useStyles$, Slot, useContextProvider, useStore, $ } from "@builder.io/qwik";
import { TabsStore, TabsContext } from './context';
import styles from "./tabs.scss?inline";

interface TabsProps {
  selected: string;
}

export const Tabs = component$((props: TabsProps) => {
  useStyles$(styles);

  const onItemSelected$ = (store: TabsStore) =>
  $(async (value: string) => {
    store.selected = value;
  });

  const store = useStore<TabsStore>({
    selected: props.selected,
  });
  store.onItemSelected$ = onItemSelected$(store);

  useContextProvider(TabsContext, store);

  return (
    <>
      <Slot/>
    </>
  );
});
