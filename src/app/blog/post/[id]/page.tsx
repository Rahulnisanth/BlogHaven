import posts from "@/app/lib/placeholder-data";
import Modal from "@/app/components/Modal";
import { notFound } from "next/navigation";

const page = ({ params }: { params: { id: string } }) => {
  const post = posts.find((post) => post.id === params.id);
  return <div>{post ? <Modal details={post} /> : notFound()}</div>;
};

export default page;
