"use client";
// import React, { useState } from 'react'

// const Modal = ({ isOpen, onClose }) => {
//   const [modalContent] = useState(<p className="py-4">What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?What is Lorem Ipsum?
  
//   </p>)

//   return (
//     <div className={`fixed top-0 min-[576px]:max-w-[700px] w-auto h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
//       <div className="relative top-0 left-0 w-full  bg-blend-hard-light	inset-0 bbg-orange-300	bg-opacity-100 z-10 backdrop-blur opacity-90 blur-3xl " onClick={onClose}></div>
//       <div className="bg-white rounded-lg shadow-lg z-10 overflow-hidden">
//         {/* <div className="p-4">
//           <h3 className="text-lg font-medium leading-6 text-gray-900">Modal Title</h3>
//           <button className="absolute top-0 right-0 p-2" onClick={onClose}>
//             <svg className="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 24 24">
//               <path
//                 fillRule="evenodd"
//                 d="M18.364 5.636a.999.999 0 00-1.414 0L12 10.586l-4.95-4.95a.999.999 0 10-1.414 1.414L10.586 12l-4.95 4.95a.999.999 0 101.414 1.414L12 13.414l4.95 4.95a.999.999 0 101.414-1.414L13.414 12l4.95-4.95a.999.999 0 000-1.414z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </button>
//         </div> */}
//         <div
//         class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
        
//         <h5
//           class="text-xl font-medium leading-normal text-neutral-200"
//           id="exampleModalScrollableLabel">
//           Modal title
//         </h5>
        
//         <button
//           type="button"
//           class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
//           data-te-modal-dismiss
//           aria-label="Close"
//           onClick={onClose}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             class="h-6 w-6">
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M6 18L18 6M6 6l12 12" />
//           </svg>
//         </button>
//       </div>
//         <div className="px-4">{modalContent}</div>
//       </div>
//     </div>
//   )
// }

// export default function MyPage() {
//   const [modalOpen, setModalOpen] = useState(false)

//   const handleModalOpen = () => {
//     setModalOpen(true)
//   }

//   const handleModalClose = () => {
//     setModalOpen(false)
//   }

//   return (
//     <div>
//       <button onClick={handleModalOpen}>Open Modal</button>
//       <Modal isOpen={modalOpen} onClose={handleModalClose} />
//     </div>
//   )
// }

import React, { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  const [modalContent] = useState(
    <p className="py-4">
      What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum? What is Lorem Ipsum?
    </p>
  );

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? '' : 'hidden'}`}>
      <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg z-10 overflow-hidden">
        <div className="flex items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
          <h5 className="text-xl font-medium leading-normal text-neutral-200" id="exampleModalScrollableLabel">
            Modal title
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
            data-te-modal-dismiss
            aria-label="Close"
            onClick={onClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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


