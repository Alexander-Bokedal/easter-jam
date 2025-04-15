'use client'

import { useState, createContext, useContext, } from "react"
import { Egg } from "@/types/types"
import { fetchEggs } from "./getFunctions"

export type EggListType = {
	eggList: Egg[],
	updateEggList: () => void,
	loading: boolean,
}
export const EggListContext = createContext<EggListType | null>(null)

export const useEggListContext = (): EggListType => {
	const context = useContext(EggListContext)

	if (!context) {
		throw new Error(
			"This is outside of your provider"
		);
	}
	return context;

}


type EggListProviderProps = {
	children: React.ReactNode;
};

export function EggListContextProvider({
	children,
}: Readonly<EggListProviderProps>) {
	const [eggList, setEggList] = useState<Egg[]>([]);
	const [loading, setLoading] = useState(false)

	const updateEggList = async () => {

		try {
			setLoading(true)
			const eggs = await fetchEggs()

			setEggList(eggs)
			setLoading(false)
		} catch (error) {
			console.error("Failed to fetch eggs,", error)

		}



	}
	return (
		<EggListContext.Provider value={{ eggList, updateEggList, loading }}>
			{children}
		</EggListContext.Provider>
	)
}
