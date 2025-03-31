
'use client';
type Modal = {
	isOpen: boolean,
	onCloseAction: () => void,
}
export default function Modal({ isOpen, onCloseAction, }: Modal) {
	if (!isOpen) return null; // Hide modal when not open

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onCloseAction}>
			<div onClick={(e) => e.stopPropagation()} className="flex flex-col bg-white p-4 rounded-2xl shadow-xl w-80">
				<button
					onClick={onCloseAction}
					className="self-end  text-gray-700 hover:text-gray-950"
				>
					✖
				</button>
				<h2 className="text-lg font-bold self-center">🥚 Create Your Egg</h2>
			</div>
		</div>
	);
}
