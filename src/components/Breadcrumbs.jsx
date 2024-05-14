"use client";
import Link from "next/link";
const Breadcrumbs = () => {
  return (
    <div className="text-sm breadcrumbs max-w-xl mx-auto">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/turkish">Turkish</Link>
        </li>
        <li>
          <Link href="/english">Turkish</Link>
        </li>
      </ul>
    </div>
  );
};

export default Breadcrumbs;
