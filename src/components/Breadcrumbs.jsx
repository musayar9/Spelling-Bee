"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Breadcrumbs = ({ language }) => {
  const pathname = usePathname();

  return (
    <div className="text-sm breadcrumbs max-w-xl mx-auto flex items-center justify-center drop-shadow-md">
      <ul>
        <li className="text-2xl ">
          <Link href="/">
            {" "}
            {language === "turkish" ? "Ana Sayfa" : "Home"}
          </Link>
        </li>

        {pathname === "/turkish" && (
          <li className="text-2xl text-amber-400">
            <Link href="/turkish">Türkçe</Link>
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
