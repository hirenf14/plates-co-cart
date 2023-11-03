import { useMemo } from "react";
import { useShop } from "../../../lib/useShop";
import deliveryRules from "../../../data/deliveryRules";

const specialOfferProductCodes = ["R01"];

export const useCart = () => {
  const { catalogue } = useShop();
  const subtotal = useMemo(() => {
    return catalogue.reduce((t, c) => t + c.price * c.qty, 0);
  }, [catalogue]);
  const specialOfferDiscount = useMemo(() => {
    // Filter products with special discount,
    // Product Codes and with more than 1 quantity
    const specialOfferedProducts = catalogue.filter(
      (v) => specialOfferProductCodes.includes(v.code) && v.qty > 1
    );
    // For every 2nd red plate, price is halved of it.
    // Hence, Discount will be, 0.5 per 2 qty.
    // Formula, if x is qty and price is y,
    // discount = Math.floor(x/2) * price / 2
    return specialOfferedProducts.reduce(
      (t, v) => t + (Math.floor(v.qty / 2) * v.price) / 2,
      0
    );
  }, [catalogue]);
  const delivery = useMemo(() => {
    const st = subtotal - specialOfferDiscount;
    if (!st) return 0;
    const applicableRule = deliveryRules.find((rule) => rule.min <= st);
    return applicableRule!.price;
  }, [subtotal, specialOfferDiscount]);

  const total = subtotal - specialOfferDiscount + delivery;

  return {
    subtotal: subtotal.toFixed(2),
    discount: specialOfferDiscount.toFixed(2),
    delivery: delivery.toFixed(2),
    total: total.toFixed(2),
    items: catalogue.filter((v) => v.qty > 0),
  };
};
