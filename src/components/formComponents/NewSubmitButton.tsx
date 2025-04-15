
'use client'

import { useEggListContext } from "@/lib/context"
import { toast } from "react-toastify"
import { useState } from "react"
import "react-toastify/dist/ReactToastify.css"
type Props = {
	HandleSubmitAction: () => Promise<void>,
	onCloseAction: () => void,
}
export const NewSubmitButton = ({ HandleSubmitAction, onCloseAction }: Props) => {

	const [disable, setDisable] = useState(false)

	const { updateEggList } = useEggListContext();



	const HandleSubmit = async () => {

		setDisable(true)
		toast.info("Egg submitted!", {
			position: "top-center",
			autoClose: 3000, // Display the toast for 3 seconds
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		await HandleSubmitAction()

		console.log('Egg submited')
		setTimeout(() => {
			updateEggList();

			onCloseAction();
			setDisable(false)
		}, 3000);

	}

	return (
		<>
			<button
				type='button'
				onClick={HandleSubmit}
				disabled={disable}
				className={`mt-6 w-full ${disable ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} text-white font-medium py-2 px-4 rounded-2xl shadow  transition`}
			>

				Create Egg
			</button>

		</>
	)
}

