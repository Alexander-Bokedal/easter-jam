'use client'
import { useFetchEggs } from "@/lib/getFunctions";

import HeartEgg from "./HeartEgg";
import SpotEgg from "./SpotEgg";
import ZigZagEgg from "./ZigZagEgg";
import { Egg } from "@/types/types";
import Loading from "@/app/loading";
export const EggList = () => {

	const { eggs, loading, error } = useFetchEggs();

	if (loading) return <Loading />;
	if (error) return <div className="text-red-500 text-center p-4">Error loading eggs</div>;
	return (

		<div className="grid grid-cols-3  md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-8 overflow-y-scroll scrollbar-thin scrollbar-thumb-purple-500 max-h-full px-4 py-6">
			{eggs.map((egg: Egg, index: number) => {
				const baseClasses =
					"w-24 h-36 flex justify-center items-center transform transition-transform duration-700 ease-out hover:scale-125 active:scale-75";

				if (egg.selected === "Spots") {
					return (
						<div className={baseClasses} onClick={() => console.log(egg)} key={index}>
							<SpotEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />
						</div>
					);
				} else if (egg.selected === "Hearts") {
					return (
						<div className={baseClasses} onClick={() => console.log(egg)} key={index}>
							<HeartEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />
						</div>
					);
				} else if (egg.selected === "ZigZag") {
					return (
						<div className={baseClasses} onClick={() => console.log(egg)} key={index}>
							<ZigZagEgg primaryColor={egg.primaryColor} secondaryColor={egg.secondaryColor} />
						</div>
					);
				}

				return null;
			})}
		</div>
	)



}
