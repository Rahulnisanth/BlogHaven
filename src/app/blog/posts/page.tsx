import Link from "next/link";
import { connectToDB, getPosts } from "@/app/lib/data";
import { auth } from "../../../../auth.config";

export default async function Page() {
  const client = await connectToDB();
  const posts = await getPosts();
  const session = await auth();
  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-10 md:py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <div className="lg:w-3/4">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Blogs.
              </h2>
              <p className="mt-2 text-lg leading-8 text-gray-300">
                Learn how to grow your business with our expert advice.
              </p>
            </div>
            {session?.user && (
              <div className="mt-4 lg:mt-0 lg:w-1/4 flex items-center justify-start lg:justify-end">
                <Link
                  href={`post/insert`}
                  className="text-2xl font-semibold text-teal-500 hover:text-teal-400"
                >
                  Add post →
                </Link>
              </div>
            )}
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts?.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-300">
                    {post.date}
                  </time>
                </div>
                <div className="mt-3 group relative">
                  <Link
                    href={`post/${post.id}`}
                    className="cursor-pointer text-lg font-semibold leading-6 text-teal-500 group-hover:text-gray-600"
                  >
                    {post.title}
                  </Link>
                  <p className="mt-3 text-justify line-clamp-3 text-sm leading-6 text-white">
                    {post.content.substring(0, 150)}...
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
