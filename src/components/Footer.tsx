'use client'
import { Janr } from '@/constants/test.const'
import axios from 'axios'

export async function Footer() {
	const options = {
		method: 'GET',
		url: 'https://pokeapi.co/api/v2/pokemon/ditto',
	}

	try {
		const response = await axios.request(options)
		console.log(response.data)
	} catch (error) {
		console.error(error)
	}

	return (
		<div className='bg-slate-700 -mx-14 px-14 flex flex-col justify-between'>
			<div className='py-3'>
				<p className='text-lg'>
					Подпишитесь на нашу рассылку прямо сейчас, всего за <br /> 9.99$/мес,
					и будьте в курсе всех новостей, скидок на подписки <br /> и понижении
					цен на фильмы.
				</p>
				<div className='relative w-3/6 mt-3'>
					<input
						type='text'
						placeholder='Ваш Email'
						className='p-4 px-9 text-xl rounded-full w-full text-black outline-none'
					/>
					<button className='absolute right-0 bg-blue-600 text-black rounded-full text-xl p-4'>
						Подписаться
					</button>
				</div>
			</div>
			<div className='flex flex-row justify-between py-6 w-full items-center h-max'>
				<img src='logo.png' className='w-40 h-20 ' alt='' />
				<ul className='flex flex-row justify-between w-1/4'>
					{Janr.map((item, idx) => (
						<li
							className='text-xl hover:text-blue-500 transition-colors ease-in-out duration-200 cursor-pointer'
							key={idx}
						>
							{item}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}
