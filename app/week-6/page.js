"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./item-list";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}