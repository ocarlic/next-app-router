"use client";

import { useState } from "react";

export function AddToCartButton() {
  const [count, setCount] = useState(0);

  function addToCard() {
    setCount((state) => state + 1);
  }

  return <button onClick={addToCard}>Add to cart ({count})</button>;
}
