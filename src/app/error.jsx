"use client"

import Link from "next/link";

const Error = () => {

  return (
    <div>
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Something went wrong
          </h1>
          <div className="mt-10">
            <Link
              href="/"
              className="btn btn-secondary text-white rounded-full tracking-widest"
            >
              Go back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Error
