import Link from "next/link";

const Navbar = () => {
  return (
    <div className="  bg-emerald-500">
      <div className="max-w-6xl mx-auto p-4">
        <div className="flex items-center">
          <h4 className="text-2xl font-bold text-gray-100">
            <Link href="/">
              Spelling <span className="text-yellow-400">Bee</span> Game
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
