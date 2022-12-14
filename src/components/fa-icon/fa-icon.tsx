import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./textfield.scss?inline";
import { v4 as uuidv4 } from 'uuid';
import styles from "./fa-icon.scss?inline";

interface FontAwesomeIconProps {
    icon?: string;
    style?: string;
    family?: string;
}

export const FontAwesomeIcon = component$((props: FontAwesomeIconProps) => {
    useStyles$(styles);
    const fontFamilyClass = 
        (props.family?.toLowerCase() == 'sharp') ? 'fa-sharp' :
        (props.family?.toLowerCase() == 'brands') ? 'fa-brands' : '';
    const styleClass = 
        (props.style?.toLowerCase() == 'solid') ? 'fa-solid' :
        (props.style?.toLowerCase() == 'regular') ? 'fa-regular' :
        (props.style?.toLowerCase() == 'light') ? 'fa-light' :
        (props.style?.toLowerCase() == 'thin') ? 'fa-thin' :
        (props.style?.toLowerCase() == 'duotone') ? 'fa-duotone' : '';
        
    return (
        <i class={`${fontFamilyClass} fa fa-${props.icon} ${styleClass}`}></i>
    );
});
