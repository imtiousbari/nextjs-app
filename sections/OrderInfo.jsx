"use client";

import Image from "next/image";
import nextIcon from "../public/next.png";


import React, { useState } from "react";

const Modal = ({ isOpen, onClose }) => {
  const [modalContent] = useState(
    <p className="py-4 w-[650px]">
      What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum?
    </p>
    
  );

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-lg shadow-lg z-10 overflow-hidden">
        <div className="flex items-center justify-between rounded-t-md px-4 py-4">
          {/* <h5
            className="text-xl font-medium leading-normal text-black"
            id="exampleModalScrollableLabel"
          >
            modal
          </h5> */}
          <div className="flex items-center w-[500px]">
          <p className="pr-3">Home</p>
          <Image className="py-2 " src={nextIcon} alt="My Image" width={20} height={20} />
          <p className="pr-3 pl-3">Home</p>
          <Image className="py-2 " src={nextIcon} alt="My Image" width={20} height={20} />
          <p className="pl-3 " >Home</p>
          </div>
          

          <button
            type="button"
            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="px-4">{modalContent}</div>
      </div>
    </div>
  );
};

export default function MyPage() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>Open Modal</button>
      <Modal isOpen={modalOpen} onClose={handleModalClose} />
    </div>
  );
}
