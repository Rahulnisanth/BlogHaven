import Link from "next/link";

const nav_links = [
  { name: "About", href: "/blog/about" },
  { name: "Posts", href: "/blog/posts" },
];

export default async function NavLinks() {
  return (
    <>
      {nav_links.map((link: any) => {
        return (
          <Link key={link.name} href={link.href}>
            <li>
              <Link
                className="font-bold text-white transition hover:text-gray-500/75"
                href={link.href}
              >
                {link.name}
              </Link>
            </li>
          </Link>
        );
      })}
    </>
  );
}
