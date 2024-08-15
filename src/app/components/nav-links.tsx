import Link from "next/link";

const nav_links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/blog/about" },
  { name: "Contact", href: "/blog/contact" },
  { name: "Posts", href: "/blog/posts" },
];

export default async function NavLinks() {
  return (
    <>
      {nav_links.map((link: any) => {
        return (
          <Link key={link.name} href={link.href}>
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
