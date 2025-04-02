type Props = {
	secondaryColor: string
	horizontal: string,
	vertical: string
}
export default function Heart({ secondaryColor, horizontal, vertical }: Props) {
	return (
		<div className={`absolute ${horizontal} ${vertical}`}>
			<div className="relative w-[20px] h-[18px]">
				<div
					className="absolute w-[10px] h-[16px] rounded-t-full"
					style={{
						left: "10px",
						top: "0",
						transform: "rotate(-45deg)",
						transformOrigin: "0 100%",
						backgroundColor: secondaryColor,
					}}
				></div>

				<div
					className="absolute w-[10px] h-[16px] rounded-t-full"
					style={{
						left: "0",
						top: "0",
						transform: "rotate(45deg)",
						transformOrigin: "100% 100%",
						backgroundColor: secondaryColor,
					}}
				></div>
			</div>
		</div>
	);
}
