import axios from 'axios'

class Films {
	async getFILMS() {
		const response = await axios.get<any>(
			'https://kinopoiskapiunofficial.tech/api/v2.2/films/304',
			{
				headers: {
					'X-API-KEY': 'df06b2e5-5727-4d0d-bb1f-115f6211ca82',
				},
			}
		)
		return response.data
	}

	async getAllFILMS() {
		const response = await axios.get<any>(
			'https://kinopoiskapiunofficial.tech/api/v2.2/films',
			{
				headers: {
					'X-API-KEY': 'df06b2e5-5727-4d0d-bb1f-115f6211ca82',
				},
			}
		)
		return response.data
	}
}

export const filmsService = new Films()
