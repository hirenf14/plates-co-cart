import React from "react";

const QuantityInput: React.FC<{
  value: number;
  onChange: (val: number) => void;
}> = ({ value, onChange }) => {
  const increment = () => {
    onChange(value + 1);
  };

  const decrement = () => {
    onChange(value - 1);
  };
  return (
    <div className="flex items-center justify-between">
      <button className="btn btn-sm" disabled={!value} onClick={decrement}>
        -
      </button>
      <input type="number" value={value} disabled className="text-center" />
      <button className="btn btn-sm" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
