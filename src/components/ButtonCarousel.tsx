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
		<div className="flex w-full justify-around">
			<button
				className=" active:scale-95 hover:scale-105  transition-all ease-in-out left-0 p-2 bg-gray-300 rounded "
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
					<div className='flex flex-col justify-between items-center'>
						{currentEgg.selected}

						{currentEgg.selected === 'Spots' && <SpotEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
						{currentEgg.selected === 'ZigZag' && <ZigZagEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
						{currentEgg.selected === 'Hearts' && <HeartEgg primaryColor={currentEgg.primaryColor} secondaryColor={currentEgg.secondaryColor} />}
					</div>
				</motion.div>
			</AnimatePresence>

			<button
				className="active:scale-95 hover:scale-105 transition-all ease-in-out right-0 p-2 bg-gray-300 rounded"
				onClick={handleNext}
			>
				→
			</button>
		</div>
	);
};
