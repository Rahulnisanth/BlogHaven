import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProfileImage from "../../../../public/images/AiModalRahul.jpeg";

const Page = () => {
  return (
    <>
      <section className="min-h-[90vh] bg-white dark:bg-gray-900">
        <div className="flex items-center justify-center">
          <div className="max-w-lg mx-auto my-10 pt-5 rounded-lg shadow-md p-5">
            <Image
              className="w-32 h-32 rounded-full mx-auto"
              src={ProfileImage}
              width={150}
              height={150}
              alt="Profile picture"
            />
            <h2 className="text-center text-2xl font-extrabold text-teal-500 mt-3">
              Rahul Nisanth
            </h2>
            <p className="text-center text-gray-100 mt-1">
              Aspiring Software Engineer
            </p>
            <div className="flex justify-center mt-5">
              <Link
                href="https://www.linkedin.com/in/rahul-nisanth"
                className="text-teal-500 hover:text-teal-700 mx-3"
              >
                LinkedIn
              </Link>
              <Link
                href="https://www.github.com/Rahulnisanth"
                className="text-teal-500 hover:text-teal-700 mx-3"
              >
                GitHub
              </Link>
              <Link
                href="https://www.leetcode.com/u/rahul_nisanth"
                className="text-teal-500 hover:text-teal-700 mx-3"
              >
                Leetcode
              </Link>
            </div>
            <div className="text-center mt-5">
              <h3 className="text-xl font-extrabold">About me</h3>
              <p className="mt-3 -mb-3 text-center">~ Hello Geeks ~</p>
              <p className="text-white text-justify">
                <br />
                I'm a dedicated computer science student pursuing a bachelor's
                degree and aspiring software developer, with a strong foundation
                in technical skills and a knack for effective project
                management. I excel at tackling complex real-world problems
                through innovative solutions. Committed to continuous learning
                and improvement, I am eager to contribute my skills to impactful
                software development projects and thrive in dynamic
                environments. Let's connect and explore the boundless
                possibilities that the world of Software has to offer!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
