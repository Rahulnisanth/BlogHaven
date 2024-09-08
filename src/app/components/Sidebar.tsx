import Link from "next/link";
import NavLinks from "./nav-links";
import UserButton from "./authentication/user-button";

export default function Sidebar() {
  return (
    <div className="sticky top-4 z-50 mx-4 max-w-xl dark:bg-gray-800 rounded-lg shadow-lg md:mx-auto md:max-w-xl">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link className="block" href="/">
          <h1 className="text-xl md:text-2xl font-extrabold text-white">
            Blog<span className="text-teal-500">Haven.</span>
          </h1>
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-8">
          <nav
            aria-label="Global"
            className="hidden md:flex items-center gap-6 text-sm"
          >
            <ul className="flex items-center gap-6 text-sm">
              <NavLinks />
            </ul>
            <UserButton />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <nav
          aria-label="Global"
          className="flex items-center justify-center gap-6 text-sm md:hidden"
        >
          <ul className="flex items-center justify-center gap-6 text-sm">
            <NavLinks />
          </ul>
          <UserButton />
        </nav>
      </div>
    </div>
  );
}
