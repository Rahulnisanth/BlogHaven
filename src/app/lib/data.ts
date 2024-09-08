import { createClient } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";
import { Post, DatabaseRow } from "../types";

export async function connectToDB() {
  const client = createClient();
  await client.connect();
  try {
    if (client) {
      return client;
    }
  } catch (err) {
    console.log({ err });
  }
}

export async function getPosts(): Promise<Post[]> {
  try {
    unstable_noStore();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const result = (await sql`SELECT * FROM posts`) as { rows: DatabaseRow[] };
    const rows: DatabaseRow[] = result.rows;
    return rows;
  } catch (err) {
    console.log(err);
    return [];
  }
}
