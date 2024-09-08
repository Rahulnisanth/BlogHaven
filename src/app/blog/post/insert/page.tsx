"use client";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Textarea,
  Button,
} from "@headlessui/react";
import clsx from "clsx";
import { User } from "next-auth";
import { getSession } from "next-auth/react";

export default function Page() {
  // const PROMPT =
  //   "Consider yourself as a creative blog writer and write a blog post within 50 words from the below attached title";
  // const [generating, setGenerating] = useState(false);
  // const [content, setContent] = useState("");
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    content: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const uuid = uuidv4();
    fetch(
      `/api/posts?id=${uuid}&author=${user?.name}&title=${formData.title}&content=${formData.content}&date=${formData.date}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, id: uuid }),
      }
    )
      .then(() => {
        setFormData({
          id: "",
          title: "",
          content: "",
          date: new Date().toISOString().slice(0, 10),
        });
        router.push("/blog/posts");
      })
      .catch(console.error);
  };

  // const generateContent = () => {
  //   setGenerating(true);
  //   if (!formData?.title) {
  //     return false;
  //   }
  //   const requestParams = {
  //     model: "gpt-3.5-turbo",
  //     messages: [
  //       { role: "system", content: PROMPT + formData?.title },
  //       { role: "user", content: formData?.title },
  //     ],
  //   };
  //   fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
  //     },
  //     body: JSON.stringify(requestParams),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContent(data.choices[0].message.content);
  //       console.log(data.choices[0].message.content);
  //       setGenerating(false);
  //     })
  //     .catch(console.error);
  // };

  useEffect(() => {
    console.log("API KEY => ", process.env.OPENAI_API_KEY);
    getSession().then((session) => {
      if (!session?.user) router.push("/blog/posts");
      setUser(session?.user || null);
    });
  }, []);

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4">
      <div className="-mt-2 md:mt-0 w-full max-w-lg px-4">
        <form onSubmit={handleSubmit}>
          <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
            <Legend className="text-base/7 font-semibold text-white">
              Blog Details
            </Legend>
            <Field>
              <Label className="text-sm/6 font-medium text-white">Title</Label>
              <Input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={clsx(
                  "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
            </Field>

            <Field>
              <Label className="text-sm/6 font-medium text-white">
                Contents
              </Label>
              <Description>
                If you have it, we'd like to know about it.
              </Description>
              <Textarea
                name="content"
                value={formData.content}
                onChange={handleChange}
                rows={12}
                className={clsx(
                  "mt-3 block w-full resize-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                  "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                )}
              />
              {/* <Button
                onClick={generateContent}
                type="button"
                className="mt-2 text-center rounded-md bg-white/5 py-1.5 px-3 text-sm/6 font-semibold text-white"
              >
                Generate using AI
              </Button>
              {generating && (
                <p className="text-sm/6 text-white/50">
                  Generating, Please wait.
                </p>
              )} */}
            </Field>

            <Input
              type="text"
              name="date"
              value={formData.date}
              readOnly
              className="hidden"
            />

            <Button
              type="submit"
              className="text-center rounded-md bg-white/5 py-1.5 px-3 text-sm/6 font-semibold text-white"
            >
              Add post
            </Button>
          </Fieldset>
        </form>
      </div>
    </div>
  );
}
