import { component$ } from "@builder.io/qwik";
import { StyledText } from '../../../components/text/styledtext';

export interface ShareLabelProps {
    mnemo: string,
    title: string,
}

export const ShareLabel = component$((props: ShareLabelProps) => {
  return (
    <div class="d-flex">
      <StyledText valign="middle">{props.mnemo}</StyledText>
      <StyledText header1>{props.title}</StyledText>
    </div>
  );
});
