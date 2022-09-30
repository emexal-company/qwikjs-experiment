import { component$, useStyles$, Slot } from "@builder.io/qwik";
import styles from "./textfield.scss?inline";
import { v4 as uuidv4 } from 'uuid';

// // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

interface TextFieldProps {
    label?:string;
    help?: string;
    placeholder?: string;
}

export const TextField = component$((props: TextFieldProps) => {
    useStyles$(styles);
    const id = uuidv4();

    return (
        <>
            <label for={id} class="form-label">{props.label}</label>
            <input type="text" class="form-control" id={`${id}label`} aria-describedby={`${id}help`} placeholder={props.placeholder}/>
            <div id={`${id}help`} class="form-text">{props.help}</div>
        </>
    );
});