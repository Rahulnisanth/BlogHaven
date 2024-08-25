"use client";
import { SetStateAction, useState } from "react";
import posts from "@/app/lib/data";
import Modal from "@/app/components/Modal";

export default function Page() {
  const [selectedPost, setSelectedPost] = useState(null);

  function openModal(post: SetStateAction<null>) {
    setSelectedPost(post);
  }

  function closeModal() {
    setSelectedPost(null);
  }

  return (
    <>
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Blogs.
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-300">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-300">
                    {post.date}
                  </time>
                </div>
                <div className="group relative">
                  <h3
                    className="mt-3 cursor-pointer text-lg font-semibold leading-6 text-teal-500 group-hover:text-gray-600"
                    onClick={() => openModal(post)}
                  >
                    {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                    {post.content.substring(0, 150)}...
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && <Modal details={selectedPost} onClose={closeModal} />}
    </>
  );
}
