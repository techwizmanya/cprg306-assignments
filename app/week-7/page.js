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

        <div className="bg-white border rounded-lg p-4 mb-6 shadow-sm">
          <h2 className="text-lg font-semibold mb-2">Wireframe</h2>
          <p className="text-sm text-gray-600">
            Form at the top and grocery list below
          </p>
          <div className="mt-3 border rounded p-3 bg-gray-50">
            <p className="font-medium">[ Grocery Item Form ]</p>
            <p className="text-sm text-gray-500 mt-1">
              Name | Quantity | Category | Add Item
            </p>
            <div className="mt-3 border-t pt-3">
              <p className="font-medium">[ Grocery Item List ]</p>
              <p className="text-sm text-gray-500 mt-1">
                Added and sorted items appear here
              </p>
            </div>
          </div>
        </div>

        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} />
      </div>
    </main>
  );
}