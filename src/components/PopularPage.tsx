export function PopularPage() {
	return (
		<div className='w-full h-2/3'>
			<h1 className='text-3xl'>Самый популярный фильм на неделе</h1>
			<div className='flex justify-center '>
				<div className='bg-blue-500 p-5 rounded-lg w-3/4'>
					<img src='image_preview.png' className='  rounded-lg' alt='' />
				</div>
			</div>
		</div>
	)
}
