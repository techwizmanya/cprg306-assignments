"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    const aVal = a[sortBy].toString().toLowerCase();
    const bVal = b[sortBy].toString().toLowerCase();
    return aVal.localeCompare(bVal);
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("name")}
          type="button"
        >
          Sort by Name
        </button>

        <button
          className={`px-3 py-1 rounded ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSortBy("category")}
          type="button"
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-4">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}