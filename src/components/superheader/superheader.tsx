import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./textfield.scss?inline";
import { v4 as uuidv4 } from 'uuid';
import { Dropdown } from "../dropdown/dropdown";
import { DropdownItem } from "../dropdown/dropdown-item";
import { FontAwesomeIcon } from "../fa-icon/fa-icon";

interface SuperHeaderProps {
    blabla?:string;
}

interface MenuItem {
    name: string;
    url: string;
    isSelected: boolean;
}

interface SuperHeaderMenuProps {
    hubIcon: boolean;
    items: MenuItem[];
    title?: string;
}

interface SuperHeaderMenuBoutonProps {
    hubIcon: boolean;
    title?: string;
}

export const SuperHeaderMenuBouton = component$((props: SuperHeaderMenuBoutonProps) => {
    return (
        <>{ props.hubIcon ?
            <FontAwesomeIcon icon="th" class="bold-text font-size-28"></FontAwesomeIcon> :
            <>
                {props.title}<FontAwesomeIcon icon="chevron-down" class="bold-text font-size-18 ml-3"></FontAwesomeIcon>
            </>
        }</>
    )
});

export const SuperHeaderMenu = component$((props: SuperHeaderMenuProps) => {
    return(
        <Dropdown menuClass="border-none font-size-12 mt-0 text-dark">
            <SuperHeaderMenuBouton hubIcon={props.hubIcon} title={props.title} q:slot="button"></SuperHeaderMenuBouton>
            {   props.items.map(item => <DropdownItem q:slot="item" href={item.url}>{item.name}</DropdownItem>) }
        </Dropdown>
    );
});

export const SuperHeader = component$((props: SuperHeaderProps) => {
    const menu1: MenuItem[] = [
        {name:"google", url: "http://google.com", isSelected: false},
        {name:"bing", url: "http://bing.com", isSelected: false},
    ];
    return (<>
            <SuperHeaderMenu items={menu1} hubIcon={false} title="menu1"></SuperHeaderMenu>
            <SuperHeaderMenu items={menu1} hubIcon={false} title="menu2"></SuperHeaderMenu>
    </>);
});
