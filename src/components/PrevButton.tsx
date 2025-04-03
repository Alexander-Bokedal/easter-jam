
import { Egg } from "@/types/types";
type Props = {
	currentEgg: Egg,
	updateEgg: (egg: Partial<Egg>) => void;
}
export const PrevButton = ({ currentEgg, updateEgg }: Props) => {

	return (
		<button
			className="cursor-pointer"
			onClick={() => {
				const currentIndex = currentEgg.value.indexOf(currentEgg.selected);
				const nextIndex = (currentIndex - 1 + currentEgg.value.length) % currentEgg.value.length;
				updateEgg({ selected: currentEgg.value[nextIndex] });
			}}
		>
			<div className="flex">
				<div className="mr-2">↤ </div>{currentEgg.value[(currentEgg.value.indexOf(currentEgg.selected) - 1 + currentEgg.value.length) % currentEgg.value.length]}
			</div>
		</button>
	)
}
