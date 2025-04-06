'use client';
import { useReducer } from "react";
import { Egg } from "@/types/types";
import { ButtonCarousel } from "./ButtonCarousel";
import { Form } from "./formComponents/Form";
type ModalProps = {
	isOpen: boolean;
	onCloseAction: () => void;
};

export default function Modal({ isOpen, onCloseAction }: ModalProps) {
	if (!isOpen) return null;
	const [currentEgg, updateEgg] = useReducer(
		(prev: Egg, next: Partial<Egg>) => {
			const newEgg = { ...prev, ...next }
			return newEgg
		},
		{ selected: 'Spots', value: ['Spots', 'ZigZag', 'Hearts'], primaryColor: '#FFFF00', secondaryColor: '#FF007F', message: '' }
	)

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" >
			<div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-fuchsia-50 p-4 rounded-2xl shadow-xl w-80">
				<button
					onClick={onCloseAction}
					className="self-end text-gray-700 hover:text-gray-950 hover:scale-125 transition-all"
				>
					✖
				</button>
				<div className="flex flex-row justify-center items-center">
					<ButtonCarousel currentEgg={currentEgg} updateEgg={updateEgg} primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />
				</div>

				<div className="flex justify-evenly" >
					<Form currentEgg={currentEgg} updateEgg={updateEgg} />

				</div>
			</div>
		</div>
	);
}
