"use client";

import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function handleSignIn() {
    try {
      await gitHubSignIn();
      window.location.href = "/week-10/shopping-list";
    } catch (error) {
      console.error(error);
    }
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
      <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-sm">
        <h1 className="text-3xl font-bold mb-4">Week 10 - Cloud Firestore</h1>

        {!user ? (
          <>
            <p className="mb-4 text-gray-700">
              Please sign in with GitHub to access your shopping list.
            </p>
            <button
              onClick={handleSignIn}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
              Login with GitHub
            </button>
          </>
        ) : (
          <>
            <p className="mb-4 text-gray-700">
              Welcome, {user.displayName} ({user.email})
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/week-10/shopping-list"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Go to Shopping List
              </Link>

              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}