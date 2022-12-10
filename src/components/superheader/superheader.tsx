import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./textfield.scss?inline";
import { v4 as uuidv4 } from "uuid";
import { Dropdown } from "../dropdown/dropdown";
import { DropdownItem } from "../dropdown/dropdown-item";
import { FontAwesomeIcon } from "../fa-icon/fa-icon";

interface SuperHeaderProps {
  blabla?: string;
}

interface MenuItem {
  label: string;
  url: string;
}

interface SuperHeaderMenuProps {
  hubIcon: boolean;
  items: MenuItem[];
  title?: string;
}

export const SuperHeaderMenu = component$((props: SuperHeaderMenuProps) => {
  return (
    <Dropdown selected={props.items[0].url} label={props.hubIcon ? '' : props.title} icon={props.hubIcon ? 'th' : undefined}>
      {props.items.map((item, index) => (
        <DropdownItem key={index} value={item.url} /*href={item.url}*/>{item.label}</DropdownItem>
      ))}
    </Dropdown>
  );
});

export const SuperHeader = component$((props: SuperHeaderProps) => {
  const menu1: MenuItem[] = [
    { label: "A propos d'Amundi", url: "https://about.amundi.com/" },
    { label: "Amundi Research Center", url: "https://research-center.amundi.com/" },
    { label: "Amundi Global Distributor", url: "https://www.amundi.com/globaldistributor" },
  ];
  const menu2: MenuItem[] = [{ label: "Document library", url: "http://preprod-amundi.minotore.com/fra/fr/professionnels/ressources/document-library" }];
  const menu3: MenuItem[] = [
    { label: "France", url: "https://preprod-amundi.minotore.com/fra/fr/professionnels" },
    { label: "Allemagne", url: "https://preprod-amundi.minotore.com/aut/de/profesionellen" },
  ];
  const menu4: MenuItem[] = [
    { label: "Investisseurs institutionnels", url: "https://preprod-amundi.minotore.com/fra/fr/particuliers" },
    { label: "Investisseurs particuliers", url: "http://preprod-amundi.minotore.com/fra/fr/intermediary" },
    { label: "Conseillers financiers", url: "http://preprod-amundi.minotore.com/fra/fr/professionnels" },
  ];
  return (
    <>
      <SuperHeaderMenu items={menu1} hubIcon={true}></SuperHeaderMenu>
      <SuperHeaderMenu items={menu2} hubIcon={false} title="Ressources"></SuperHeaderMenu>
      <SuperHeaderMenu items={menu3} hubIcon={false}></SuperHeaderMenu>
      <SuperHeaderMenu items={menu4} hubIcon={false}></SuperHeaderMenu>
    </>
  );
});
