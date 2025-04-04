import Heart from "./Heart"
type Props = {
	primaryColor: string
	secondaryColor: string
}

const HeartEgg = ({ primaryColor, secondaryColor }: Props) => {
	return (
		<div style={{ backgroundColor: primaryColor }}
			className={`relative self-center transition-all  px-8 rounded-[50%/60%_60%_40%_40%] py-4   focus:outline-none focus:ring-4 focus:ring-yellow-300 w-24 h-36`}
		>
			<Heart secondaryColor={secondaryColor} horizontal="top-16" vertical="left-16" />
			<Heart secondaryColor={secondaryColor} horizontal="top-12" vertical="left-4" />
			<Heart secondaryColor={secondaryColor} horizontal="top-16" vertical="right-10" />
			<Heart secondaryColor={secondaryColor} horizontal="top-10" vertical="right-4" />

			<Heart secondaryColor={secondaryColor} horizontal="top-4" vertical="left-11" />
			<Heart secondaryColor={secondaryColor} horizontal="top-6" vertical="right-14" />

			<Heart secondaryColor={secondaryColor} horizontal="bottom-5" vertical="left-16" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-2" vertical="left-10" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-4" vertical="right-16" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-10" vertical="right-7" />
			<Heart secondaryColor={secondaryColor} horizontal="bottom-12" vertical="left-4" />
		</div>
	)
}

export default HeartEgg
