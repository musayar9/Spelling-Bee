import Link from "next/link";

const Header = () => {
  return (
    <div className="flex items-center gap-4">
      <Link href="/turkish">Turkish</Link>
      <Link href="/english">Englisj</Link>
    </div>
  );
};

export default Header;
