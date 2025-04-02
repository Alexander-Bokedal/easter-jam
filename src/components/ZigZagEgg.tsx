

import ZigZag from "./ZigZag"

type Props = {
	primaryColor: string,
	secondaryColor: string
}
const ZigZagEgg = ({ primaryColor, secondaryColor }: Props) => {
	return (
		<div style={{ backgroundColor: primaryColor }}
			className={`flex justify-evenly flex-col overflow-clip self-center transition-all hover:scale-105 px-8 rounded-[50%/60%_60%_40%_40%] py-4  active:scale-95 focus:outline-none focus:ring-4 focus:ring-yellow-300 w-24 h-36`}
		>
			<ZigZag secondaryColor={secondaryColor} />

			<ZigZag secondaryColor={secondaryColor} />
			<ZigZag secondaryColor={secondaryColor} />

			<ZigZag secondaryColor={secondaryColor} />
		</div>
	)

}


export default ZigZagEgg
