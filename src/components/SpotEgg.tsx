
type Props = {
	primaryColor: string
	secondaryColor: string
}

const SpotEgg = ({ primaryColor, secondaryColor }: Props) => {
	return (
		<div style={{ backgroundColor: primaryColor }}
			className={`relative self-center transition-all  px-8 rounded-[50%/60%_60%_40%_40%] py-4 shadow-2xl   focus:outline-none focus:ring-4 focus:ring-yellow-300 w-24 h-36`}
		>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-4 left-6 rounded-full h-3 w-3 `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-6 right-4 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-12 right-3 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-2 right-7 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-5 right-5 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-12 right-3 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-10 left-4 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-10 left-11 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-15 left-9 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-10 right-10 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-5 left-8 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-15 left-4 rounded-full h-3 w-3  `}></div>

			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-9 left-3 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-16 right-6 rounded-full h-3 w-3  `}></div>
		</div>
	)
}

export default SpotEgg
