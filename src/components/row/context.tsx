import { createContext, PropFunction } from "@builder.io/qwik";
import { ContainerStore } from "../container/context";

export const RowContext = createContext<ContainerStore>("row");
