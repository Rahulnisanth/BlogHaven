import React from "react";

const loading = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 md:py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <div className="lg:w-3/4">
            <div className="h-8 w-40 bg-gray-300 dark:bg-gray-700 rounded-lg mb-2"></div>
            <div className="h-6 w-60 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          </div>
          <div className="mt-4 lg:mt-0 lg:w-1/4 flex items-center justify-start lg:justify-end">
            <div className="h-8 w-36 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
          </div>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <article
              key={index}
              className="flex max-w-xl flex-col items-start justify-between animate-pulse"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
              </div>
              <div className="mt-3 group relative">
                <div className="h-6 w-80 bg-gray-300 dark:bg-gray-700 rounded-lg mb-2"></div>
                <div className="h-4 w-80 bg-gray-300 dark:bg-gray-700 rounded-lg mb-2"></div>
                <div className="h-4 w-80 bg-gray-300 dark:bg-gray-700 rounded-lg mb-2"></div>
                <div className="h-4 w-80 bg-gray-300 dark:bg-gray-700 rounded-lg mb-2"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;
