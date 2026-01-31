import Link from "next/link";

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">
        CPRG 306 Assignments
      </h1>

      <ul className="list-disc pl-6">
        <li>
          <Link
            href="/week-3"
            className="text-blue-600 hover:underline"
          >
            Week 3 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
