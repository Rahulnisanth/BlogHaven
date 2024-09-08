import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await sql`SELECT * FROM posts`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ err }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const title = searchParams.get("title");
  const date = searchParams.get("date");
  const content = searchParams.get("content");

  try {
    await sql`INSERT INTO posts (id, author, title, date, content) VALUES (${id}, 'Rahul', ${title},${date}, ${content})`;
    return NextResponse.json(
      { message: "Post successfully added" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ err }, { status: 500 });
  }
}
