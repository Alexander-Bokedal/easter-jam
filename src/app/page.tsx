'use client';
import ShowEgg from "@/components/ShowEgg";
import { useState } from "react";
import ModalButton from "@/components/ModalButton";
import Modal from "@/components/Modal";
import { EggList } from "@/components/EggList";
import WelcomeText from "@/components/Welcometext";
export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onCloseAction = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="flex  w-full flex-col min-h-screen items-center">
      <WelcomeText />
      <div className="flex overflow-auto flex-grow-[2] max-h-[58vh] m-4 lg:max-w-[50vw] rounded-2xl ">
        <EggList />
      </div>
      <div className=" flex flex-grow-[1] justify-self-center">
        <ModalButton title="Create Egg" onClick={() => setIsModalOpen(true)} />
      </div>

      <Modal isOpen={isModalOpen} onCloseAction={onCloseAction} />
    </div >
  );
}
