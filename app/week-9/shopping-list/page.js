"use client";

import { useState } from "react";
import { useUserAuth } from "../../contexts/AuthContext";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./item-list";
import MealIdeas from "./MealIdeas";
import Link from "next/link";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  if (!user) {
    return (
      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Access Denied</h1>
          <p className="mb-4 text-gray-700">
            You must be logged in to view the shopping list page.
          </p>
          <Link
            href="/week-9"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Back to Login
          </Link>
        </div>
      </main>
    );
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  function handleItemSelect(item) {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[^\p{L}\p{N}\s-]/gu, "");

    setSelectedItemName(cleanedName);
  }

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-between items-center mb-6 gap-3">
          <h1 className="text-3xl font-bold">Shopping List</h1>
          <button
            onClick={handleSignOut}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Logout
          </button>
        </div>

        <p className="mb-6 text-gray-700">
          Logged in as {user.displayName} ({user.email})
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>

          <div>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </main>
  );
}