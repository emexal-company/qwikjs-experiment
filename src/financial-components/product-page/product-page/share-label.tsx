import { component$ } from "@builder.io/qwik";

export interface ShareLabelProps {
    mnemo: string,
    title: string,
}

export const ShareLabel = component$((props: ShareLabelProps) => {
  return (
    <>
      <div>
        <span>{props.mnemo}</span>
      </div>
      <div>
        <h1>{props.title}</h1>
      </div>
    </>
  );
});
