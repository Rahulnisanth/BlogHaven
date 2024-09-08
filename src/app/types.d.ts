export interface Post {
  id: string;
  author: string;
  title: string;
  date: string;
  content: string;
}

export interface DatabaseRow {
  id: string;
  author: string;
  title: string;
  date: string;
  content: string;
}

export type User = {
  email: string;
  name?: string;
  image?: string;
};
