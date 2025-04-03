'use client';
import { useReducer } from "react";
import SpotEgg from "./SpotEgg";
import ZigZagEgg from "./ZigZagEgg";
import HeartEgg from "./HeartEgg";
import { Egg } from "@/types/types";
import { NextButton } from "./NextButton";
import { PrevButton } from "./PrevButton";
import { PrimaryPicker, SecondaryPicker } from "./ColorPickers";
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
		{ selected: 'Spots', value: ['Spots', 'ZigZag', 'Hearts'], primaryColor: '#FFFF00', secondaryColor: '#FF007F' }
	)

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onCloseAction}>
			<div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-white p-4 rounded-2xl shadow-xl w-80">
				<button
					onClick={onCloseAction}
					className="self-end text-gray-700 hover:text-gray-950 hover:scale-125 transition-all"
				>
					✖
				</button>
				<div className="flex flex-row justify-between items-center">
					<PrevButton currentEgg={currentEgg} updateEgg={updateEgg} />
					<h2 className="text-lg font-bold self-center"> {currentEgg.selected}</h2>
					<NextButton currentEgg={currentEgg} updateEgg={updateEgg} />
				</div>
				{currentEgg.selected === 'Spots' && <SpotEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
				{currentEgg.selected === 'ZigZag' && <ZigZagEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
				{currentEgg.selected === 'Hearts' && <HeartEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}

				<div className="flex justify-evenly" >
					<PrimaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />

					<SecondaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />

				</div>
			</div>
		</div>
	);
}
