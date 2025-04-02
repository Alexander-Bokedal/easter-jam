type Props = {
	secondaryColor: string;
};

export default function ZigZag({ secondaryColor }: Props) {
	return (
		<svg
			className="w-24 self-center h-4"
			viewBox="0 0 120 20"
			fill={secondaryColor} // Dynamically change color
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 5 L10 0 L20 5 L30 0 L40 5 L50 0 L60 5 L70 0 L80 5 L90 0 L100 5 L110 0 L120 5 V10 H0 Z" />
		</svg>
	);
}
