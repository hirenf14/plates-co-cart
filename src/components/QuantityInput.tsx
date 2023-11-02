import React, { useState } from "react";

const QuantityInput: React.FC<any> = ({ onChange }) => {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
      setQuantity(quantity + 1);
  };

  const decrement = () => {
      setQuantity(quantity - 1);
  };

  const handleChange = (event: any) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(value);
  };

  return (
    <div className="flex items-center justify-between">
      <button className="btn btn-sm" disabled={!quantity} onClick={decrement}>
        -
      </button>
      <input
        type="number"
        value={quantity}
        disabled
        className="text-center"
      />
      <button className="btn btn-sm" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
