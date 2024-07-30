import { YouWantSeeArray } from '@/constants/test.const'
import { Button } from './UI/Button'

export function YouWantSee() {
	return (
		<div className=' mb-5'>
			<h1 className='w-full text-3xl flex justify-end'>Вы хотели посмотреть</h1>
			<div className='flex flex-row justify-center gap-6 '>
				{YouWantSeeArray.map((item, idx) => (
					<section
						key={idx}
						className='p-5 shadow-xl shadow-blue-700 rounded-lg flex flex-col justify-center'
					>
						<img src={item.img} className='rounded-lg mb-3 h-80' alt='' />
						<Button title='Посмотреть' />
					</section>
				))}
			</div>
			<div className='flex justify-end'>
				<h2 className='border-b w-max text-xl'>Полный список</h2>
			</div>
		</div>
	)
}
