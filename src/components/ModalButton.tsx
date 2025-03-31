type ButtonProps = {
	title: string,
	onClick: () => void,
}

const ModalButton = ({ onClick, title }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="px-8 rounded-[50%/60%_60%_40%_40%]  py-4 bg-yellow-500 text-white font-semibold  shadow-lg transition-all hover:bg-yellow-600 active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-16 h-24  flex items-center justify-center"
		>
			{title}
		</button>
	)
}

export default ModalButton;
