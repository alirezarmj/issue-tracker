"use client";
import React, { useState, useRef, useEffect } from "react";
import Button from "@/app/components/Button";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteIssueButton = ({ issueId }: { issueId: number }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState(false);
  const deleteModalRef = useRef<HTMLDivElement>(null);
  const errorModalRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      deleteModalRef.current &&
      !deleteModalRef.current.contains(event.target as Node)
    ) {
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

  async function handleDelete() {
    closeModal();
    try {
      await axios.delete("/api/issues/" + issueId);
      router.push("/issues");
      router.refresh();
    } catch (error) {
      setError(true);
    }
  }

  return (
    <>
      <Button color="red" width="full" onClick={openModal}>
        Delete Issue
      </Button>
      {modalIsOpen && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg p-8 z-20" ref={deleteModalRef}>
              <h2 className="text-2xl mb-4">Confirm Deletion</h2>
              <p className="mb-4">
                Are you sure you want to delete this issue? This action cannot
                be undone.
              </p>
              <div className="flex justify-end space-x-4">
                <Button onClick={closeModal} color="gray">
                  Cancel
                </Button>
                <Button onClick={handleDelete} color="red">
                  Delete Issue
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg p-8 z-20" ref={errorModalRef}>
              <h2 className="text-2xl mb-4 font-bold">Error</h2>
              <p className="mb-4 ">This issue could not be deleted</p>
              <div className="flex justify-end">
                <Button onClick={() => setError(false)} color="gray">
                  Ok
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
