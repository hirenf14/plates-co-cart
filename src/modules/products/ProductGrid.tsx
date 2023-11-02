import * as React from "react";
import plates from "../../data/plates";
import PriceCard from "../../components/PriceCard";

export interface IProductGridProps {}

export default function ProductGrid(props: IProductGridProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {plates.map((plate) => (
        <PriceCard plate={plate} />
      ))}
    </div>
  );
}
