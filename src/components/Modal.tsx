'use client';
import { useEffect, useReducer, } from "react";
import { Egg } from "@/types/types";
import { ButtonCarousel } from "./ButtonCarousel";
import { Form } from "./formComponents/Form";
import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
	isOpen: boolean;
	onCloseAction: () => void;
};

export default function Modal({ isOpen, onCloseAction }: ModalProps) {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === "Escape") onCloseAction();
		};
		window.addEventListener("keydown", handleEsc);
		return () => window.removeEventListener("keydown", handleEsc);
	}, [onCloseAction]);

	const [currentEgg, updateEgg] = useReducer(

		(prev: Egg, next: Partial<Egg>) => ({ ...prev, ...next }),
		{
			selected: "Spots",
			value: ["Spots", "ZigZag", "Hearts",],
			code: '',
			primaryColor: "#FFFF00",
			secondaryColor: "#FF007F",
			message: "Glad Påsk!",
		}
	);


	return (
		<AnimatePresence>
			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
					onClick={onCloseAction}
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
							onClick={onCloseAction}
							className="absolute top-3 right-3 transition p-1 rounded-full hover:scale-110 hover:bg-pink-400"
							aria-label="Stäng modalen"
						>
							❌
						</button>

						<h2 className="text-xl font-bold text-center text-yellow-500 pb-[20px]">
							Designa ditt påskägg 🐣
						</h2>

						<div className="relative flex justify-center items-center pb-[20px]">
							<div
								className="absolute w-30 h-10 rounded-full blur-xl opacity-100 top-[130px]"
								style={{ backgroundColor: currentEgg.primaryColor }}
							></div>
							<div className="absolute bottom-2 w-20 h-3 bg-black/20 rounded-full blur-sm translate-y-4" />
							<div className="relative z-10 scale-125 ">
								<ButtonCarousel
									currentEgg={currentEgg}
									updateEgg={updateEgg}
									primaryColor={currentEgg.primaryColor}
									secondaryColor={currentEgg.secondaryColor}
								/>
							</div>
						</div>

						<div className="shadow-inner rounded-lg p-3 bg-white/60">
							<Form currentEgg={currentEgg} updateEgg={updateEgg} />
						</div>
					</motion.div>
				</div>
			)}
		</AnimatePresence>
	);
}
