import GroceryItemList from "./GroceryItemList";

export default function Page() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Shopping List
      </h1>

      <GroceryItemList />
    </main>
  );
}
