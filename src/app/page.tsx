import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>This is the home page of the application.</h1>
      <hr />
      <Link href="blog/about">Go to the Blogs</Link>
    </main>
  );
}
