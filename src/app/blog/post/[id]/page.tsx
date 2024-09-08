import Modal from "@/app/components/Modal";
import { getPosts } from "@/app/lib/data";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { id: string } }) => {
  const posts = await getPosts();
  const post = posts?.find((post) => post.id === params.id);
  return <div>{post ? <Modal details={post} /> : notFound()}</div>;
};

export default page;
