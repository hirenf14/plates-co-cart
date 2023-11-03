import PriceCard from "../../components/PriceCard";
import { useShop } from "../../lib/useShop";

export default function ProductGrid() {
  const { catalogue, updateCart } = useShop();
  return (
    <div className="grid grid-cols-3 gap-3">
      {catalogue.map((plate) => (
        <PriceCard
          plate={plate}
          key={plate.code}
          onQtyChange={(qty) => updateCart(plate.code, qty)}
        />
      ))}
    </div>
  );
}
