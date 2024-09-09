import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-[90vh] flex items-center justify-center">
      <div className=" text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Blog<span className="text-teal-500">Haven.</span>
        </h1>
        <p className="px-5 md:px-[15rem] mt-6 text-lg leading-8 text-gray-600">
          Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem
          cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat
          aliqua.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/blog/about"
            className="rounded-md bg-teal-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            About me
          </Link>
          <Link
            href="/blog/posts"
            className="text-sm font-semibold leading-6 text-white"
          >
            Visit Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
