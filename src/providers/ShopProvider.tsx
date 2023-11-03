import * as React from "react";
import { ShopContext } from "../lib/useShop";
import { useMemo, useState } from "react";
import plates from "../data/plates";

const ShopProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useState<Record<string, number>>({});
  const catalogue = useMemo(() => {
    return plates.map((c) => ({
      ...c,
      qty: cartItems[c.code] || 0,
    }));
  }, [cartItems]);
  const updateCart = (code: string, qty: number) => {
    setCartItems({
      ...cartItems,
      [code]: qty,
    });
  };
  return (
    <ShopContext.Provider
      value={{
        catalogue,
        updateCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopProvider;