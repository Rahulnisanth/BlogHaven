import Link from "next/link";

type PostProps = {
  details: {
    id: string;
    title: string;
    date: string;
    content: string;
  };
};

export default function Post({ details }: PostProps) {
  const { id, title, date, content } = { ...details };
  return (
    <>
      <Link href={`/blog/post/${id}`}>
        <h3>{title}</h3>
      </Link>
      <h4>{date}</h4>
      <p>{content}</p>
    </>
  );
}
