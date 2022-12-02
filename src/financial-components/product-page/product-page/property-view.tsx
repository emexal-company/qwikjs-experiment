import { component$ } from "@builder.io/qwik";

interface PropertyViewProps {
    name: string,
    value: string
}

export const PropertyView = component$((props: PropertyViewProps) => {
  return (
    <>
      <span>
        {props.name}
      </span>
      <div>
        {props.value}
      </div>
    </>
  );
});
