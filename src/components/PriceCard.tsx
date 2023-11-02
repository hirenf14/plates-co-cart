import * as React from "react";
import { IPlate } from "../data/plates";
import QuantityInput from "./QuantityInput";

export interface IPriceCardProps {
  plate: IPlate;
}

export default function PriceCard({ plate }: IPriceCardProps) {
  return (
    <div className="card card-compact bg-base-100 shadow-xl rounded-lg overflow-hidden">
      <img src={plate.image} alt="Shoes" className="aspect-square" />
      <div className="card-body items-center text-center">
        <h2 className="card-title">
          {plate.code} - {plate.title}
        </h2>
        <p>${plate.price}</p>
        <div className="card-actions">
          <QuantityInput />
        </div>
      </div>
    </div>
  );
}
