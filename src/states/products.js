import { createContext } from "react";
import { atom } from "recoil";

export const productsState = atom({
    key: "products",
    default: [],
});

export const ProductServiceContext = createContext(null);