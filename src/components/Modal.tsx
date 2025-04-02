'use client';

import { useState } from "react";
import SpotEgg from "./SpotEgg";
import ZigZagEgg from "./ZigZagEgg";
import HeartEgg from "./HeartEgg";
type ModalProps = {
	isOpen: boolean;
	onCloseAction: () => void;
};

export default function Modal({ isOpen, onCloseAction }: ModalProps) {
	if (!isOpen) return null; // Hide modal when not open

	const [primaryColor, setPrimaryColor] = useState('#FFFF00');
	const [secondaryColor, setSecondaryColor] = useState('#FF007F');
	const handlePrimaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPrimaryColor(event.target.value);
	};

	const handleSecondaryColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSecondaryColor(event.target.value);
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onCloseAction}>
			<div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-white p-4 rounded-2xl shadow-xl w-80">
				<button
					onClick={onCloseAction}
					className="self-end text-gray-700 hover:text-gray-950 hover:scale-125 transition-all"
				>
					✖
				</button>
				<h2 className="text-lg font-bold self-center">🥚 Create Your Egg</h2>

				<SpotEgg primaryColor={primaryColor} secondaryColor={secondaryColor} />
				<ZigZagEgg primaryColor={primaryColor} secondaryColor={secondaryColor} />
				<HeartEgg primaryColor={primaryColor} secondaryColor={secondaryColor} />
				<div className="flex justify-evenly" >
					<div className="flex flex-col items-center">
						<input
							type="color"
							id="primary-color"
							className="p-1 h-10 w-14 block border border-gray-200 cursor-pointer rounded-lg"
							value={primaryColor}
							onChange={handlePrimaryColorChange} />
						<label htmlFor="primary-color" className="block text-sm font-medium mt-2">
							Primary Color
						</label>

					</div>
					<div className="flex flex-col items-center">
						<input
							type="color"
							id="secondary-color"
							className="p-1 h-10 w-14 block border border-gray-200 cursor-pointer rounded-lg"
							value={secondaryColor}
							onChange={handleSecondaryColorChange}
						/>

						<label htmlFor="secondary-color" className="block text-sm font-medium mt-2 ">
							Secondary Color
						</label>
					</div>
				</div>
			</div>
		</div>
	);
}
