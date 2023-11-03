import * as React from "react";
import { useCart } from "./hooks/useCart";

export default function Billing() {
  const { subtotal, delivery, discount, total, items } = useCart();
  return (
    <div>
      <div className="flex justify-between text-base text-gray-900 mb-5">
        <p>
          {items.map((v) => `${v.qty}x ${v.code}`).join(", ") || "No Items"}
        </p>
      </div>
      <div className="bg-gray-100 p-4">
        <div className="flex justify-between text-sm font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex justify-between text-sm font-medium text-red-600">
          <p>Special Offer Discount</p>
          <p>- ${discount}</p>
        </div>
        <div className="flex justify-between text-sm font-medium text-gray-900">
          <p>Delivery Fees</p>
          <p>${delivery}</p>
        </div>
        <div className="border-t mt-2 pt-2 flex justify-between text-base font-medium text-gray-900">
          <p>Total</p>
          <p>${total}</p>
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <button className="btn btn-outline btn-sm" disabled>
          Coming Soon
        </button>
      </div>
    </div>
  );
}
