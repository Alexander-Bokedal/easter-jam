

import { Egg } from "@/types/types";
type Props = {
	currentEgg: Egg,
	updateEgg: (egg: Partial<Egg>) => void;
}
export const NextButton = ({ currentEgg, updateEgg }: Props) => {
	return (

		<button
			className="cursor-pointer"
			onClick={() => {
				const currentIndex = currentEgg.value.indexOf(currentEgg.selected);
				const nextIndex = (currentIndex + 1) % currentEgg.value.length;
				updateEgg({ selected: currentEgg.value[nextIndex] });
			}}
		>
			{currentEgg.value[(currentEgg.value.indexOf(currentEgg.selected) + 1) % currentEgg.value.length]}
		</button>
	)
}
