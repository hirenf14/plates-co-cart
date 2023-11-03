import { createContext, useContext } from "react";
import { IPlate } from "../data/plates";

interface ShopContextType {
  updateCart: (code: string, qty: number) => void;
  catalogue: (IPlate & {
    qty: number;
  })[];
}

export const ShopContext = createContext<ShopContextType>({
  updateCart: (code: string, qty: number) => null,
  catalogue: [],
});

export const useShop = () => useContext(ShopContext);
