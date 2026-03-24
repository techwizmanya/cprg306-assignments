export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="border rounded-lg p-4 bg-white shadow-sm cursor-pointer hover:bg-gray-50"
    >
      <p className="font-semibold text-lg">{name}</p>
      <p className="text-sm text-gray-600">Quantity: {quantity}</p>
      <p className="text-sm text-gray-500 capitalize">Category: {category}</p>
    </li>
  );
}