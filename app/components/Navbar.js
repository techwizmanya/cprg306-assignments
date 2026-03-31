"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Navbar() {
  const { user, firebaseSignOut } = useUserAuth();

  async function handleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <nav className="bg-black text-white p-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-3">
        <Link href="/" className="font-bold text-lg">
          CPRG 306 Assignments
        </Link>

        <div className="flex items-center gap-3">
          <Link href="/week-10" className="hover:underline">
            Week 10
          </Link>

          {user && (
            <>
              <span className="text-sm">{user.email}</span>
              <button
                onClick={handleSignOut}
                className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}