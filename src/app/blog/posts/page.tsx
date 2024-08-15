import posts from "@/app/lib/data";
import Post from "@/app/components/Post";

export default function Page() {
  return (
    <>
      <h2>All Posts</h2>
      <hr />
      <br />
      {posts.map((post: any) => {
        return <Post key={post.id} details={post} />;
      })}
    </>
  );
}
