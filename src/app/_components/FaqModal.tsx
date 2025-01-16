import React from "react";
import { Dialog } from "@headlessui/react";

interface ModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
  children?: React.ReactNode;
}

const FaqModal = ({ title, onClose, children, content, isOpen }: ModalProps) => {
  if (!isOpen) return null;
  return (
    <Dialog open={!!title} onClose={onClose} className="relative z-10">
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" />

      {/* Modal Panel */}
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <Dialog.Title as="h2" className="mb-4 text-2xl font-semibold text-gray-900">
                    {title}
                  </Dialog.Title>
                  <div className="prose prose-lg">
                    {content}
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
                  >
                    <svg
                      className="h-3 w-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Sluit modal</span>
                  </button>
                  <div>{children}</div> {/* Render children here */}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default FaqModal;