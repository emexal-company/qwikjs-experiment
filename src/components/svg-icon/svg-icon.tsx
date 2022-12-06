import { component$ } from "@builder.io/qwik";
import { PdfIcon } from "./pdf";

interface SvgIconProps {
  align?: "start" | "center" | "end";
  icon: string;
}

export const SvgIcon = component$((props: SvgIconProps) => {
  const styles = {
    display: props.align == "center" || props.align == "end" ? "block" : undefined,
    margin: props.align == "center" ? "0 auto" : undefined,
  };
  return <>{props.icon == "pdf" && <PdfIcon style={styles}></PdfIcon>}</>;
});
