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

  useEffect(() => {
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
              <Description className="text-sm/6 text-white/50">
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
