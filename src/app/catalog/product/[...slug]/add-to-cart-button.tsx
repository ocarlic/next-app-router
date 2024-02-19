"use client";

import { ReactNode, useState } from "react";

export function AddToCartButton({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);

  function addToCard() {
    setCount((state) => state + 1);
  }

  return (
    <div>
      <button onClick={addToCard}>Add to cart ({count})</button>

      {children}
    </div>
  );
}
