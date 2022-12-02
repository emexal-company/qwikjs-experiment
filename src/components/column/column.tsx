import { component$, useStyles$, Slot, useContext, useRef, useClientEffect$, useStore } from "@builder.io/qwik";
import { ContainerContext, ContainerStore } from "../container/context";
import { RowContext } from "../row/context";
import styles from "./column.scss?inline";

export interface ColumnStore {
  classes: string;
}

export const Column = component$(() => {
  const rootRef = useRef<HTMLDivElement>();
  useStyles$(styles);
  const columnStore = useStore<ColumnStore>({
    classes: ''
  });

  // Retreive stores from context
  const containerStore = useContext<ContainerStore>(ContainerContext);
  const rowStore = useContext<ContainerStore>(RowContext);

  useClientEffect$(async () => {
    // Compute CSS classes
    if (rootRef.current) {  
      const columnIndex = Array.from(rootRef.current.parentElement!.children).indexOf(rootRef.current);
     
      const xs = rowStore.xs || containerStore.xs;
      const sm = rowStore.sm || containerStore.sm;
      const md = rowStore.md || containerStore.md;
      const lg = rowStore.lg || containerStore.lg;
      const xl = rowStore.xl || containerStore.xl;
      const xxl = rowStore.xxl || containerStore.xxl;

      columnStore.classes = '';
      columnStore.classes += xs ? `col-${xs.split(" ")[columnIndex]} ` : "";
      columnStore.classes += sm ? `col-sm-${sm.split(" ")[columnIndex]} ` : "";
      columnStore.classes += md ? `col-md-${md.split(" ")[columnIndex]} ` : "";
      columnStore.classes += lg ? `col-lg-${lg.split(" ")[columnIndex]} ` : "";
      columnStore.classes += xl ? `col-xl-${xl.split(" ")[columnIndex]} ` : "";
      columnStore.classes += xxl ? `col-xxl-${xxl.split(" ")[columnIndex]} ` : "";

      columnStore.classes = columnStore.classes
        .replace(/col-eq/g, "col")
        .replace(/col-sm-eq/g, "col")
        .replace(/col-md-eq/g, "col")
        .replace(/col-lg-eq/g, "col")
        .replace(/col-xxl-eq/g, "col")
        .replace(/col-xl-eq/g, "col");
      
        console.log('containerStore', containerStore)
      console.log('rowStore', rowStore)
    }
  });
  
  return (
    <div ref={rootRef} class={`${columnStore.classes}`}>
      <Slot />
    </div>
  );
});
