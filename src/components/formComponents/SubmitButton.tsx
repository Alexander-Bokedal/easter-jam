
'use client'
import { ButtonHTMLAttributes, useState } from 'react'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
}
type SubmitStep = 'idle' | 'code' | 'confirm' | 'submit'

export const SubmitButton = ({ }: SubmitButtonProps) => {
	const [submitStep, setSubmitStep] = useState<SubmitStep>('idle')
	const Log = () => {
		console.log('This button was clicked')
	}
	const HandleIdleClick = () => {
		setSubmitStep('submit')
	}
	return (
		<>

			{submitStep === 'idle' ? (
				<button
					onClick={HandleIdleClick}
					className="mt-6 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition"
				>
					Enter Code
				</button>
			) : null}
			{submitStep === 'submit' ? (
				<button
					onClick={Log}
					type="submit"
					className="mt-6 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition"
				>
					Save Egg!
				</button>
			) : null}
		</>
	)
}
