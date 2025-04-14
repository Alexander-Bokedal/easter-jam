import { PrimaryPicker, SecondaryPicker } from "./ColorPickers"
import { MessageInput } from "./MessageInput"
import { Egg } from "@/types/types"
import { SubmitButton } from "./SubmitButton"
type Props = {
	currentEgg: Egg,
	updateEgg: (egg: Partial<Egg>) => void
}

import { PostEgg } from "@/lib/postFunction"
export const Form = ({ currentEgg, updateEgg }: Props) => {

	const HandleSubmit = (e: React.FormEvent) => {
		PostEgg(currentEgg.selected, currentEgg.message, currentEgg.code, currentEgg.primaryColor, currentEgg.secondaryColor, e)
	}
	return (
		<form onSubmit={HandleSubmit} className="flex flex-col items-center gap-4 pt-[35px] ">
			<div className="flex flex-row gap-4 justify-center">
				<PrimaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
				<SecondaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
			</div>
			<MessageInput currentEgg={currentEgg} />
			<SubmitButton currentEgg={currentEgg} />

		</form>
	)
}
