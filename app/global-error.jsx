"use client";

import { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);


  return (
    <>
      <Head>
        <title>Something Went Wrong | Softvence</title>
        <meta name="description" content="Oops! Something went wrong on Softvence. Please try again or return to the homepage." />
        <meta name="robots" content="noindex, nofollow" /> {/* Prevent indexing error pages */}
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-5xl font-bold text-red-600 mb-4">Something went wrong</h1>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          We're sorry for the inconvenience. Please try again or go back home.
        </p>
        <div className="flex gap-4">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
             Go Back
          </button>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            Take me home
          </Link>
        </div>
      </main>
    </>
  );
}

