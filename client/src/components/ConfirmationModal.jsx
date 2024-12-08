import React from "react";
import { Modal, Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export default function ConfirmationModal({
  show,
  onClose,
  onConfirm,
  message,
}) {
  return (
    <Modal show={show} onClose={onClose} popup size="md">
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <HiOutlineExclamationCircle className="h-14 w-14 text-gray-400 dark:text-grey-200 mb-4 mx-auto" />
          <h3 className="mb-5 text-lg text-grey-500 dark:text-grey-400">
            {message}
          </h3>
          <div className="flex justify-center gap-4">
            <Button color="failure" onClick={onConfirm}>
              Yes, I’m sure
            </Button>
            <Button color="white" onClick={onClose}>
              No, cancel
            </Button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
