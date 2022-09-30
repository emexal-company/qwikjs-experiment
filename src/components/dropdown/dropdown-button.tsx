import { component$, PropFunction, Slot } from "@builder.io/qwik";

interface DropdownButtonProps {
    open: boolean;
    class?: string;
    label?: string;
    onClick$: PropFunction<() => void>;
}

export const DropdownButton = component$((props: DropdownButtonProps) => {
    return(
        <button 
            type="button" data-bs-toggle="dropdown" aria-expanded="false"
            class={`btn btn-secondary dropdown-toggle ${props.open ? 'show' : ''} ${props.class ?? ''}`} 
            onClick$={props.onClick$}
        ><Slot/>
        </button>
    );
});