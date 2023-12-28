"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "@/app/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null); // Ensure proper typing for modalRef

  const router = useRouter();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleDelete = () => {
    // Perform your delete action here
    console.log(`Deleting issue ${issueId}`);
    closeModal(); // Close the modal after deletion
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalIsOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalIsOpen]);

  return (
    <>
      <Button color="red" width="full" onClick={openModal}>
        Delete Issue
      </Button>
      {modalIsOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg p-8 z-20" ref={modalRef}>
              <h2 className="text-2xl mb-4">Confirm Deletion</h2>
              <p className="mb-4">
                Are you sure you want to delete this issue? This action cannot
                be undone.
              </p>
              <div className="flex justify-end">
                <Button onClick={closeModal} color="gray">
                  Cancel
                </Button>
                <Button
                  onClick={async () => {
                    await axios.delete("/api/issues/" + issueId);
                    closeModal();
                    router.push("/issues");
                    router.refresh();
                  }}
                  color="red"
                  className="mr-2"
                >
                  Delete Issue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteIssueButton;

// import Button from "@/app/components/Button";

// const DeleteIssueButton = ({ issudeId }: { issudeId: number }) => {
//   return <Button color="red">Delete Issue</Button>;
// };

// export default DeleteIssueButton;
