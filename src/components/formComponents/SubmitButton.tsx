
'use client'
import { ButtonHTMLAttributes } from 'react'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label?: string
}

export const SubmitButton = ({ label = "Submit", ...props }: SubmitButtonProps) => {
	return (
		<button
			type="submit"
			className="mt-6 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition"
			{...props}
		>
			{label}
		</button>
	)
}
