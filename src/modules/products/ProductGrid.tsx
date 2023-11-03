import ProductCard from "./ProductCard";
import { useShop } from "../../lib/useShop";

export default function ProductGrid() {
  const { catalogue, updateCart } = useShop();
  return (
    <div className="grid grid-cols-3 gap-3">
      {catalogue.map((plate) => (
        <ProductCard
          plate={plate}
          key={plate.code}
          onQtyChange={(qty: number) => updateCart(plate.code, qty)}
        />
      ))}
    </div>
  );
}
