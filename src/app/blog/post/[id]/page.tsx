import posts from "@/app/lib/data";
import Post from "@/app/components/Post";

export default function Page({ params }: { params: { id: string } }) {
  const post = posts.find((post) => post.id === params.id);
  if (!post) return <h1>Post not found!</h1>;
  return (
    <>
      <h2>Single Post Details</h2>
      <hr />
      <br />
      <Post details={post} />
    </>
  );
}
