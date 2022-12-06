import { component$ } from "@builder.io/qwik";
import { StyledText } from '../components/text/styledtext';
import { SvgIcon } from '../components/svg-icon/svg-icon';

interface DocIconProps {
    label: string;
    href: string;
    icon: 'pdf';
}

export const DocLink = component$((props: DocIconProps) => {
  return (
    <div>
      <a rel="noreferrer" target="_blank" href={props.href}>
        { props.icon == 'pdf' && <SvgIcon icon="pdf" align="center"></SvgIcon> }
        <StyledText align="center">{props.label}</StyledText>
      </a>
    </div>
  );
});
