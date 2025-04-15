
'use client';
import { useEffect } from "react";
import { Egg } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";

import HeartEgg from "./HeartEgg";
import SpotEgg from "./SpotEgg";
import ZigZagEgg from "./ZigZagEgg";
type ModalProps = {
	isOpen: boolean;
	closeShowEggAction: () => void
	egg: Egg
};

export default function ShowEgg({ isOpen, closeShowEggAction, egg }: ModalProps) {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") closeShowEggAction();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [closeShowEggAction]);

	return (
		<AnimatePresence>
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
					onClick={closeShowEggAction}
				>
					<motion.div
						onClick={(e) => e.stopPropagation()}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						transition={{ duration: 0.25 }}
						className="relative flex flex-col bg-fuchsia-50 p-6 rounded-2xl shadow-2xl w-11/12 max-w-sm gap-4"
					>
						<button
							onClick={closeShowEggAction}
							className="absolute top-3 right-3 transition p-1 rounded-full hover:scale-110 hover:bg-pink-400"
							aria-label="Stäng modalen"
						>
							❌
						</button>
						<div className="flex flex-col justify-evenly items-center" >
							<div className="w-24 h-36 flex justify-center items-center m-3">
								{egg.selected === "Spots" && (
									<SpotEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />
								)}
								{egg.selected === "Hearts" && (
									<HeartEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />
								)}
								{egg.selected === "ZigZag" && (
									<ZigZagEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />
								)}
							</div>
							<p className="text-center m-3"> {egg.message} </p>
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
