import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./progress.scss?inline";

interface ProgressProps {
  percent: number
}

export const Progress = component$((props: ProgressProps) => {
  useStyles$(styles);
  return (
    <div class="progress">
      <div class="progress-bar" role="progressbar" aria-label="Basic example" style={`width: ${props.percent}%`} aria-valuenow={props.percent} aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  );
});
