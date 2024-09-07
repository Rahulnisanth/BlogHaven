import { createClient } from "@vercel/postgres";

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
