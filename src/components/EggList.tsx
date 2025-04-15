'use client'

import HeartEgg from "./HeartEgg";
import SpotEgg from "./SpotEgg";
import ZigZagEgg from "./ZigZagEgg";
import { Egg } from "@/types/types";
import Loading from "@/app/loading";
import ShowEgg from "./ShowEgg";
import { useEggListContext } from "@/lib/context";

import { useEffect, useState } from "react";
export const EggList = () => {
	const [selectedEgg, setSelectedEgg] = useState<Egg | null>(null); // Track the selected egg
	const closeShowEggAction = () => {
		setSelectedEgg(null); // Close the modal by resetting selected egg
	};

	const { eggList, loading, updateEggList } = useEggListContext();

	useEffect(() => {
		updateEggList();
	}, []);

	if (loading) return <Loading />;

	return (
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-500 max-h-full px-4 py-6">
			{eggList.map((egg: Egg, index: number) => {
				const baseClasses =
					"w-24 h-36 flex justify-center items-center transform transition-transform duration-700 ease-out hover:scale-125 active:scale-75";

				return (
					<div
						key={index}
						className={baseClasses}
						onClick={() => setSelectedEgg(egg)} // Set the clicked egg as selected
					>
						{egg.selected === "Spots" && <SpotEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />}
						{egg.selected === "Hearts" && <HeartEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />}
						{egg.selected === "ZigZag" && <ZigZagEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />}
					</div>
				);
			})}

			{/* Render modal only if a specific egg is selected */}
			{selectedEgg && (
				<ShowEgg isOpen={true} egg={selectedEgg} closeShowEggAction={closeShowEggAction} />
			)}
		</div>
	);
};
