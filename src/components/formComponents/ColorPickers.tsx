import { Egg } from "@/types/types"
type Props = {

	currentEgg: Egg,
	updateEgg: (egg: Partial<Egg>) => void,

}

export const PrimaryPicker = ({ currentEgg, updateEgg }: Props) => {
	return (
		<div className="flex flex-col items-center">
			<input
				type="color"
				id="primary-color"
				className="p-1 h-10 w-14 block border border-gray-200 cursor-pointer rounded-lg"
				value={currentEgg.primaryColor}
				onChange={(e) => updateEgg({ primaryColor: e.target.value })} />
			<label htmlFor="primary-color" className="block text-sm font-medium mt-2">
				Primary Color
			</label>

		</div>
	)
}

export const SecondaryPicker = ({ currentEgg, updateEgg }: Props) => {
	return (

		<div className="flex flex-col items-center">
			<input
				type="color"
				id="secondary-color"
				className="p-1 h-10 w-14 block border border-gray-200 cursor-pointer rounded-lg"
				value={currentEgg.secondaryColor}
				onChange={(e) => updateEgg({ secondaryColor: e.target.value })}
			/>

			<label htmlFor="secondary-color" className="block text-sm font-medium mt-2 ">
				Secondary Color
			</label>
		</div>
	)
}
