"use client";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

type PostProps = {
  details: {
    id: string;
    title: string;
    date: string;
    content: string;
  };
  onClose: () => void;
};

export default function Modal({ details, onClose }: PostProps) {
  const { title, content } = details;

  return (
    <Dialog
      open={true}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={onClose}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-5xl rounded-xl bg-white/5 p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-3xl font-extrabold text-teal-500"
            >
              {title}
            </DialogTitle>
            <p className="my-6 text-justify text-md text-white">{content}</p>
            <div className="mt-4">
              <Button
                className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                onClick={onClose}
              >
                Close
              </Button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
