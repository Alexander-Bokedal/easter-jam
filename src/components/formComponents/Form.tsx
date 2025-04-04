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
		<form>
			<PrimaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
			<SecondaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
			<MessageInput />
			<SubmitButton label="Save egg" />
		</form>
	)
}
