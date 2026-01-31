export default function GroceryItem({ name, quantity, category }) {
  return (
    <li className="bg-slate-100 p-4 rounded-lg shadow flex justify-between">
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-slate-600">
          Category: {category}
        </p>
      </div>
      <p className="font-bold">Qty: {quantity}</p>
    </li>
  );
}
