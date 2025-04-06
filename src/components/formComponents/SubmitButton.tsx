'use client'
import { ButtonHTMLAttributes, ChangeEvent, useState } from 'react'

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> { }

type SubmitStep = 'idle' | 'code' | 'confirm' | 'submit'

export const SubmitButton = ({ }: SubmitButtonProps) => {
	const [submitStep, setSubmitStep] = useState<SubmitStep>('idle')


	const Log = () => {
		console.log('This button was clicked')
	}

	const HandleIdleClick = () => {
		setSubmitStep('submit')

	const [code, setCode] = useState('')
	const Log = () => {
		console.log('This button was clicked')
	}
	function HandleClick(step: SubmitStep) {
		setSubmitStep(step)
	}
	const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCode(e.target.value)

	}

	return (
		<>
			{submitStep === 'idle' && (
				<button
					type='button'
					onClick={() => { HandleClick('code') }}
					className="mt-6 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition"
				>

					Create Egg
				</button>
			) : null}

			{submitStep === 'code' ? (
				<div className='absolute inset-0 bg-gray-500/75'>
					<div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0" >
							<div className="bg-white px-4 pt-5 pb-4 sm:p-6 rounded-l sm:pb-4 w-1/5 h-[500px]">
								<div className="sm:flex sm:items-start w-full h-full">
									<div className="flex flex-col justify-between h-full mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
										<p className='self-center'> Enter Code </p>
										<div className='flex flex-col items-center'>
											<label htmlFor="message" className="text-center block text-sm font-medium text-gray-700 mb-2">
												Enter Code
											</label>
											<input
												id="Code"
												type="text"
												value={code}
												onChange={HandleChange}
												placeholder="Code..."
												className="w-full px-4 py-2 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
											/>
										</div>
										<div className='flex w-full justify-evenly' >
											<button type='button' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={() => { HandleClick('idle') }}> Cancel </button>

											<button type='button' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded' onClick={() => { HandleClick('submit') }}> Submit </button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : null}
			{submitStep === 'submit' ? (

				<button
					onClick={Log}
					type="submit"
					className="mt-6 w-full bg-blue-600 text-white font-medium py-2 px-4 rounded-2xl shadow hover:bg-blue-700 transition"
				>
					Save Egg!
				</button>
			)}
		</>
	)
}
