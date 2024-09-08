"use client";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Post } from "../types";
interface ModalProps {
  details: Post;
}

const Modal: React.FC<ModalProps> = ({ details }) => {
  const { title, author, date, content } = details;

  return (
    <Dialog
      open={true}
      as="div"
      className="relative z-10 focus:outline-none"
      onClose={() => {}}
    >
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-5xl rounded-xl bg-white/5 p-5 md:p-10 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
          >
            <DialogTitle
              as="h3"
              className="text-2xl md:text-3xl font-extrabold text-teal-500"
            >
              {title}
            </DialogTitle>
            <p className="text-md font-semibold text-gray-300">
              {date} | {author}
            </p>
            <p className="my-4 md:my-5 text-justify text-md text-white">
              {content}
            </p>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
