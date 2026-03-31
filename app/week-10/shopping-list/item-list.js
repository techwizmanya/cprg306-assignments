"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    const aValue = a[sortBy].toLowerCase();
    const bValue = b[sortBy].toLowerCase();
    return aValue.localeCompare(bValue);
  });

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`px-3 py-2 rounded ${
            sortBy === "name"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>

        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`px-3 py-2 rounded ${
            sortBy === "category"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-black"
          }`}
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
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}