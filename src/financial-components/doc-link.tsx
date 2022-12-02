import { component$ } from "@builder.io/qwik";
import { PdfIcon } from "~/components/icons/pdf";

interface DocIconProps {
    label: string,
    href: string,
    icon: 'pdf'
}

export const DocLink = component$((props: DocIconProps) => {
  return (
    <div>
      <a rel="noreferrer" target="_blank" href={props.href}>
        { props.icon == 'pdf' && <PdfIcon></PdfIcon> }
        <span>{props.label}</span>
      </a>
    </div>
  );
});
