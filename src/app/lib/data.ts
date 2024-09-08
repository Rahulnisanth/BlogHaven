import { createClient } from "@vercel/postgres";
import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";

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

export async function getPosts() {
  try {
    unstable_noStore();
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const data = await sql`SELECT * FROM posts`;
    return data.rows;
  } catch (err) {
    console.log(err);
  }
}
