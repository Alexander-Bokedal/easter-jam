export const PostEgg = async (selected: string, message: string, code: string, primaryColor: string, secondaryColor: string) => {

	const eggData = { selected, message, code, primaryColor, secondaryColor };

	try {
		const response = await fetch('/api/eggs', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(eggData),
		});

		const result = await response.json();

		if (response.ok) {
			console.log('Egg saved successfully!');
		} else {
			console.log(`Error: ${result.error}`);
		}
	} catch (error) {
		console.error('Request failed:', error);
		console.log('An unexpected error occurred.');
	}
};
