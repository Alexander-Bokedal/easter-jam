
type Props = {
	primaryColor: string
	secondaryColor: string
}

const SpotEgg = ({ primaryColor, secondaryColor }: Props) => {
	return (
		<div style={{ backgroundColor: primaryColor }}
			className={`relative self-center transition-all hover:scale-105 px-8 rounded-[50%/60%_60%_40%_40%] py-4  active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-24 h-36`}
		>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-2 left-4 rounded-full h-3 w-3 `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-4 right-2 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-1 right-6 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-5 right-3 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute top-10 left-2 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-10 right-2 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-5 right-10 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-14 left-6 rounded-full h-3 w-3  `}></div>
			<div style={{ backgroundColor: secondaryColor }} className={`absolute bottom-8 right-6 rounded-full h-3 w-3  `}></div>
		</div>
	)
}

export default SpotEgg
