"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Breadcrumbs = () => {
  const pathname = usePathname();

  return (
    <div className="text-sm breadcrumbs max-w-xl mx-auto flex items-center justify-center">
      <ul>
        <li className="text-2xl ">
          <Link href="/">Home</Link>
        </li>

        {pathname === "/turkish" && (
          <li className="text-2xl text-amber-400">
            <Link href="/turkish">Turkish</Link>
          </li>
        )}
        {pathname === "/english" && (
          <li className="text-2xl text-amber-400">
            <Link href="/english">English</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
