import { createContext, PropFunction } from "@builder.io/qwik";

export interface ContainerStore {
    xs?: string,
    sm?: string,
    md?: string,
    lg?: string,
    xl?: string,
    xxl?: string,
}

export const ContainerContext = createContext<ContainerStore>("container");
