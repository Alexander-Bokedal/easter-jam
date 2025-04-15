
import { PrimaryPicker, SecondaryPicker } from "./ColorPickers"
import { MessageInput } from "./MessageInput"
import { Egg } from "@/types/types"
import { NewSubmitButton } from "./NewSubmitButton"
type Props = {
	currentEgg: Egg,
	updateEgg: (egg: Partial<Egg>) => void

	onCloseAction: () => void;
}

import { PostEgg } from "@/lib/postFunction"
export const Form = ({ currentEgg, updateEgg, onCloseAction }: Props) => {
	const HandleSubmitAction = async () => {
		PostEgg(currentEgg.selected, currentEgg.message, currentEgg.code, currentEgg.primaryColor, currentEgg.secondaryColor)

	}
	return (
		<form className="flex flex-col items-center gap-4 pt-[35px] ">
			<div className="flex flex-row gap-4 justify-center">
				<PrimaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
				<SecondaryPicker currentEgg={currentEgg} updateEgg={updateEgg} />
			</div>
			<MessageInput currentEgg={currentEgg} />
			<NewSubmitButton HandleSubmitAction={HandleSubmitAction} onCloseAction={onCloseAction} />
		</form>
	)
}
