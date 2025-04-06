
type Props = {
	primaryColor: string
	secondaryColor: string
}

const SpotEgg = ({ primaryColor, secondaryColor }: Props) => {
	return (
		<div style={{ backgroundColor: primaryColor }}
			className={`relative self-center transition-all  px-8 rounded-[50%/60%_60%_40%_40%] py-4 shadow-2xl   focus:outline-none focus:ring-4 focus:ring-yellow-300 w-24 h-36`}
		>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-10 left-2 rounded-full h-10 w-10 `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-3 left-6 rounded-full h-5 w-5 `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-10 right-2 rounded-full h-7 w-7  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-5 right-12 rounded-full h-8 w-8  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-2 right-5 rounded-full h-5 w-5  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-5 right-4 rounded-full h-8 w-8  `}></div>

		</div>
	)
}

export default SpotEgg
