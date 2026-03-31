"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch meal ideas");
  }

  const data = await response.json();
  return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function loadMealIdeas() {
    if (!ingredient) {
      setMeals([]);
      return;
    }

    try {
      setLoading(true);
      setError("");
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals);
    } catch (err) {
      setError("Unable to load meal ideas.");
      setMeals([]);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-3">Meal Ideas</h2>

      {ingredient && (
        <p className="text-sm text-gray-600 mb-3">
          Showing meal ideas for: <span className="font-semibold">{ingredient}</span>
        </p>
      )}

      {!ingredient && (
        <p className="text-gray-500">
          Select an item from the shopping list to see meal ideas.
        </p>
      )}

      {loading && <p className="text-blue-600">Loading meal ideas...</p>}

      {error && <p className="text-red-600">{error}</p>}

      {!loading && !error && meals.length > 0 && (
        <ul className="space-y-2">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="border rounded p-2">
              {meal.strMeal}
            </li>
          ))}
        </ul>
      )}

      {!loading && !error && ingredient && meals.length === 0 && (
        <p className="text-gray-500">No meal ideas found.</p>
      )}
    </div>
  );
}