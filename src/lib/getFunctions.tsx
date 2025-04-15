
'use client'
import { useState, useEffect } from 'react';
import { Egg } from '@/types/types';
export const useFetchEggs = () => {
	const [eggs, setEggs] = useState<Egg[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEggs = async () => {
			try {
				const response = await fetch('/api/eggs');
				const result = await response.json();

				if (response.ok) {
					setEggs(result.Eggs);
					setError(null);
				} else {
					setError(result.error || 'Failed to fetch eggs.');
				}
			} catch (err) {
				console.error('Fetch failed:', err);
				setError('An unexpected error occurred.');
			} finally {
				setLoading(false);
			}
		};

		fetchEggs();
	}, []);

	return { eggs, loading, error };
};

export const fetchEggs = async (): Promise<Egg[]> => {
	const response = await fetch('/api/eggs')
	const result = await response.json()

	if (!response.ok) {
		throw new Error(result.error || 'Failed to fetch eggs.')
	}

	return result.Eggs
}
