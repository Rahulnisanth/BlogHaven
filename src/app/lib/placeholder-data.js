const posts = [
  {
    id: "1",
    title: "Understanding JavaScript Closures",
    date: "2024-08-01",
    content:
      "Closures are a powerful feature in JavaScript that allow a function to access variables from an enclosing scope, even after that scope has closed. This concept can be tricky for beginners to grasp, but it's essential for writing efficient and modular code. A closure is created when a function is defined inside another function, and the inner function references variables declared in the outer function. Even after the outer function has finished executing, the inner function retains access to those variables.",
  },
  {
    id: "2",
    title: "Getting Started with Next.js",
    date: "2024-08-05",
    content:
      "Next.js is a React framework that enables server-side rendering (SSR) and static site generation (SSG), providing a better user experience and improved SEO. When building web applications, SSR allows the server to send fully-rendered HTML pages to the client, rather than just JavaScript code. This results in faster load times and better search engine optimization, as search engines can crawl your content more easily.",
  },
  {
    id: "3",
    title: "A Guide to Responsive Web Design",
    date: "2024-08-10",
    content:
      "Responsive web design is about creating web pages that look good on all devices, whether it's a desktop, tablet, or mobile phone. As the use of mobile devices continues to grow, ensuring that your website is responsive has become more important than ever. A responsive website automatically adjusts its layout and content based on the screen size and resolution of the device being used.",
  },
  {
    id: "4",
    title: "An Introduction to TypeScript",
    date: "2024-08-12",
    content:
      "TypeScript is a strongly typed superset of JavaScript that adds optional static types, classes, and interfaces, making your code more predictable and easier to debug. While JavaScript is a dynamic language, meaning types are determined at runtime, TypeScript allows you to define types explicitly, catching potential errors during development before they make it to production",
  },
  {
    id: "5",
    title: "Building RESTful APIs with Express.js",
    date: "2024-08-15",
    content:
      "Express.js is a minimal and flexible Node.js web application framework that provides robust features for building RESTful APIs. It is one of the most popular frameworks for Node.js and is widely used for creating web applications and APIs. RESTful APIs follow a set of conventions for structuring and interacting with web services, making them easy to use and understand.",
  },
  {
    id: "6",
    title: "CSS Grid Layout: A Complete Guide",
    date: "2024-08-18",
    content:
      "CSS Grid Layout is a powerful layout system available in CSS. It allows you to create complex grid-based layouts with ease. Unlike older layout methods like float or flex-box, CSS Grid was designed specifically for two-dimensional layouts, meaning it can control both columns and rows simultaneously.",
  },
];

export default posts;
