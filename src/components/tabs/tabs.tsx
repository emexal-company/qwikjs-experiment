import { component$, useStyles$, Slot, useContextProvider, useStore, $, useWatch$ } from "@builder.io/qwik";
import { TabsStore, TabsContext } from './context';
import styles from "./tabs.scss?inline";

interface TabsProps {
  selected: string;
}

export const Tabs = component$((props: TabsProps) => {
  useStyles$(styles);
  const store = useStore<TabsStore>({
    selected: props.selected,
  });
  useContextProvider(TabsContext, store);

  const onItemSelected$ = $(async (value: string) => {
    store.selected = value;
  });

  useWatch$(() => {
    store.onItemSelected$ = onItemSelected$;
  });



  return (
    <>
      <Slot/>
    </>
  );
});
