import axios, { type CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
	baseURL: 'http://localhost:4200/api',
	headers: {
		'Content-Type': 'application/json',
		'X-API-KEY': 'df06b2e5-5727-4d0d-bb1f-115f6211ca82',
	},
	withCredentials: true,
}

const axiosClassic = axios.create(options)

export { axiosClassic }
