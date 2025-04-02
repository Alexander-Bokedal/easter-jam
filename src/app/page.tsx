'use client';
import Heart from "@/components/Heart";
import { useState } from "react";
import ModalButton from "@/components/ModalButton";
import Modal from "@/components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen ">
        <ModalButton title="Create Egg" onClick={() => setIsModalOpen(true)} />
      </div>

      <Modal isOpen={isModalOpen} onCloseAction={() => setIsModalOpen(false)} />
    </>
  );
}
