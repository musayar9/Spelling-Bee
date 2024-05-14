"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <main className="grid min-h-[100vh] place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-red-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry we could not find the page you are looking for
          </p>
          <div className="mt-10">
            <Link href="/" className="btn btn-secondary text-white rounded-full tracking-widest">
              Go back Home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
