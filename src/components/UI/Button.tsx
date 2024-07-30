type TButton = {
	title: string
}

export function Button({ title }: TButton) {
	return (
		<button className='bg-purple-500 rounded-lg p-4 hover:bg-purple-800 transition-colors duration-300'>
			{title}
		</button>
	)
}
