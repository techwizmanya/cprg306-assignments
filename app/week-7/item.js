export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded-lg p-4 bg-white shadow-sm">
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500 capitalize">Category: {category}</p>
    </li>
  );
}