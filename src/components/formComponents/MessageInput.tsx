'use client'
import { Egg } from "@/types/types"
import { ChangeEvent, useState } from "react"
type Props = {
	currentEgg: Egg
}
export const MessageInput = ({ currentEgg }: Props) => {
	const [message, setMessage] = useState('')
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value)
		currentEgg.message = message
	}
	return (
		<>
			<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
				Your Message
			</label>
			<input
				id="message"
				type="text"
				value={message}
				onChange={handleChange}
				placeholder="Type your message..."
				className="w-full px-4 py-2 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
			/>
		</>
	)
}
