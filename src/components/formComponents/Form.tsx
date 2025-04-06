import { PrimaryPicker, SecondaryPicker } from "./ColorPickers"
import { MessageInput } from "./MessageInput"
import { Egg } from "@/types/types"
import { SubmitButton } from "./SubmitButton"
type Props = {
	currentEgg: Egg,
	updateEgg: (egg: Partial<Egg>) => void
}

export const Form = ({ currentEgg, updateEgg }: Props) => {

	return (
		<form className="flex flex-col items-center gap-4 pt-[35px] ">
			<div className="flex flex-row gap-4 justify-center">
				<PrimaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
				<SecondaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
			</div>
			<MessageInput />
			<SubmitButton label="Save egg" />
		</form>
	)
}
