import { Egg } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import SpotEgg from "./SpotEgg";
import ZigZagEgg from "./ZigZagEgg";
import HeartEgg from "./HeartEgg";

type Props = {
	currentEgg: Egg;
	updateEgg: (egg: Partial<Egg>) => void;
	primaryColor: string,
	secondaryColor: string
};

export const ButtonCarousel = ({ currentEgg, updateEgg, primaryColor, secondaryColor }: Props) => {
	const [direction, setDirection] = useState<"left" | "right">("right");

	const slideVariants = {
		enter: (dir: "left" | "right") => ({
			x: dir === "left" ? 50 : -50, // Slide in from left or right
			opacity: 0,
		}),
		center: { x: 0, opacity: 1 }, // Center position
		exit: (dir: "left" | "right") => ({
			x: dir === "left" ? -50 : 50, // Slide out to right or left
			opacity: 0,
		}),
	};

	const handlePrev = () => {
		setDirection("left");
		const currentIndex = currentEgg.value.indexOf(currentEgg.selected);
		const nextIndex = (currentIndex - 1 + currentEgg.value.length) % currentEgg.value.length;
		updateEgg({ selected: currentEgg.value[nextIndex] });
	};

	const handleNext = () => {
		setDirection("right");
		const currentIndex = currentEgg.value.indexOf(currentEgg.selected);
		const nextIndex = (currentIndex + 1) % currentEgg.value.length;
		updateEgg({ selected: currentEgg.value[nextIndex] });
	};

	return (
		<div className="flex w-full items-center justify-around">
			<button
				className="opacity-40 hover:opacity-100 active:scale-95 mt-6 h-[45px] w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition"
				onClick={handlePrev}
			>
				←
			</button>

			<AnimatePresence custom={direction} mode="wait">
				<motion.div
					key={currentEgg.selected}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					custom={direction}
					transition={{ duration: 0.4, ease: "easeInOut" }}
					className=" w-full h-full flex items-center justify-center text-lg font-semibold "
				>
					<div className='flex flex-col justify-between items-center pl-[30px] pr-[30px]'>
						{currentEgg.selected}

						{currentEgg.selected === 'Spots' && <SpotEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
						{currentEgg.selected === 'ZigZag' && <ZigZagEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
						{currentEgg.selected === 'Hearts' && <HeartEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
					</div>
				</motion.div>
			</AnimatePresence>

			<button
				className="opacity-40 hover:opacity-100 active:scale-95 mt-6 w-full h-[45px] bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition "
				onClick={handleNext}
			>
				→
			</button>
		</div>
	);
};
