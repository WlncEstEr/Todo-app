import { Metadata } from 'next'
import { Main } from './Main'

export const metadata: Metadata = {
	title: '',
}

export default function page() {
	return (
		<div>
			<Main />
		</div>
	)
}
