import { component$, Slot } from "@builder.io/qwik";

interface DropdownItemProps {
    href?:string;
}

export const DropdownItem = component$((props: DropdownItemProps) => {
    return(
        <li><a class="dropdown-item" href={props.href ? props.href : "#"}><Slot/></a></li>
    );
});