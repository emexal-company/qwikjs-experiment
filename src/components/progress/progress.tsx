import { component$, Slot, useStyles$ } from "@builder.io/qwik";
import styles from "./progress.scss?inline";

interface ProgressProps {
  value: number;
  min?: number;
  max?: number;
  ariaLabel?: string;
}

export const Progress = component$((props: ProgressProps) => {
  useStyles$(styles);
  const min = props.min ? props.min : 0;
  const max = props.max ? props.max : 100;
  const percent = Math.round(props.value * 100 / max);
  return (
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-label={props.ariaLabel} style={`width: ${percent}%`} aria-valuenow={props.value} aria-valuemin={min} aria-valuemax={max}><Slot/></div>
    </div>
  );
});
