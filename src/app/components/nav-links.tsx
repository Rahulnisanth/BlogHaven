import Link from "next/link";
import UserButton from "./authentication/user-button";

const nav_links = [
  { name: "About", href: "/blog/about" },
  { name: "Posts", href: "/blog/posts" },
];

export default function NavLinks() {
  return (
    <ul className="flex gap-6">
      {nav_links.map((link) => (
        <li key={link.name}>
          <Link
            className="font-bold text-white transition hover:text-gray-500/75"
            href={link.href}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
