'use client'

import { NewsArray } from '@/constants/test.const'

export function News() {
	// const { data } = useQuery({
	// 	queryKey: ['films'],
	// 	queryFn: () => filmsService.getAllFILMS(),
	// })

	// console.log(data)

	return (
		<>
			<h1 className='mb-8 text-3xl flex justify-center'>News</h1>
			<div className='grid grid-cols-2 my-3 gap-3 h-96'>
				<div className='flex justify-center items-center relative'>
					<img
						src='logo_news.png'
						className='rounded-lg max-h-96 absolute opacity-80'
						alt=''
					/>
					<h1 className='absolute bottom-4 left-36 w-3/5  text-2xl font-semibold'>
						The CW заказал пилотные серии «Рыцарей Готэма» и спин-оффа о
						родителях Винчестеров
					</h1>
				</div>
				<div className='grid grid-rows-3 gap-2'>
					{NewsArray.map((news, idx) => (
						<section className='grid grid-cols-4' key={idx}>
							<div className='flex justify-center'>
								<img src={news.img} className='rounded-lg h-32 ' alt='' />
							</div>
							<div className='grid col-span-3'>
								<h1 className='text-2xl border-b-2 h-max pb-1 w-max border-white font-semibold'>
									{news.title}
								</h1>
								<p className='text-base'>{news.body}</p>
							</div>
						</section>
					))}
				</div>
			</div>
		</>
	)
}
