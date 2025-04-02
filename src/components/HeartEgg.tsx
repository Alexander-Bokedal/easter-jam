import Heart from "./Heart"
type Props = {
	primaryColor: string
	secondaryColor: string
}

const HeartEgg = ({ primaryColor, secondaryColor }: Props) => {
	return (
		<div style={{ backgroundColor: primaryColor }}
			className={`relative self-center transition-all hover:scale-105 px-8 rounded-[50%/60%_60%_40%_40%] py-4  active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-24 h-36`}
		>
			<Heart secondaryColor={secondaryColor} horizontal="top-10" vertical="left-10" />

			<Heart secondaryColor={secondaryColor} horizontal="top-5" vertical="left-5" />
			<Heart secondaryColor={secondaryColor} horizontal="top-8" vertical="right-8" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-2" vertical="left-8" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-8" vertical="right-2" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-5" vertical="right-5" />
			<Heart secondaryColor={secondaryColor} horizontal="top-10" vertical="right-10" />
		</div>
	)
}

export default HeartEgg
