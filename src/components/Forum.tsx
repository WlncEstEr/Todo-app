import { ArrowRight } from 'lucide-react'

export function Forum() {
	return (
		<div className='my-10'>
			<div className='flex justify-between mb-24'>
				<h1 className='text-4xl font-semibold'>Форум</h1>
				<h2 className='text-lg border-b-2 border-white w-max'>Все тренды</h2>
			</div>

			<div>
				<div className='grid grid-cols-5 gap-12 mb-5'>
					<section className='grid col-span-3'>
						<div className='flex flex-row bg-slate-600 rounded-2xl'>
							<img src='forum.png' className='h-80' alt='' />
							<div className='flex flex-col justify-between'>
								<div className='flex flex-col p-7'>
									<h1 className='text-xl font-semibold text-white mb-3'>
										КиноВселенная “Майора Грома”
									</h1>
									<p className='text-lg'>
										В данном треде, Вы сможете узнать намного больше про
										киновселенную от Bubble про великого майора полиции - Игоря
										Грома
									</p>
								</div>
								<button className='p-7 text-purple-500 w-max'>
									Подробнее <ArrowRight />
								</button>
							</div>
						</div>
					</section>
					<section className='grid col-span-2'>
						<div className='flex flex-row bg-slate-600 rounded-2xl'>
							<div className='flex flex-col justify-between'>
								<div className='flex flex-col p-7'>
									<h1 className='text-xl font-semibold text-white mb-3'>
										Каким будет новый фильм от марвел?
									</h1>
									<p className='text-lg'>
										Скоро на экраны выходит новый фильм от Sony Marvel, хотелось
										бы порассуждать, а каким он будет? Если у вас есть
										какие-либо заметки, милости прошу к нашему шалашу...
									</p>
								</div>
								<button className='p-7 text-purple-500 w-max'>
									Подробнее <ArrowRight />
								</button>
							</div>
						</div>
					</section>
				</div>
				<div className='grid grid-cols-5 gap-12'>
					<section className='grid col-span-2'>
						<div className='flex flex-row bg-slate-600 rounded-2xl'>
							<div className='flex flex-col justify-between'>
								<div className='flex flex-col p-7'>
									<h1 className='text-xl font-semibold text-white mb-3'>
										Каким будет новый фильм от марвел?
									</h1>
									<p className='text-lg'>
										Скоро на экраны выходит новый фильм от Sony Marvel, хотелось
										бы порассуждать, а каким он будет? Если у вас есть
										какие-либо заметки, милости прошу к нашему шалашу...
									</p>
								</div>
								<button className='p-7 text-purple-500 w-max'>
									Подробнее <ArrowRight />
								</button>
							</div>
						</div>
					</section>
					<section className='grid col-span-3'>
						<div className='flex flex-row bg-slate-600 rounded-2xl'>
							<img src='forum.png' className='h-80' alt='' />
							<div className='flex flex-col justify-between'>
								<div className='flex flex-col p-7'>
									<h1 className='text-xl font-semibold text-white mb-3'>
										КиноВселенная “Майора Грома”
									</h1>
									<p className='text-lg'>
										В данном треде, Вы сможете узнать намного больше про
										киновселенную от Bubble про великого майора полиции - Игоря
										Грома
									</p>
								</div>
								<button className='p-7 text-purple-500 w-max'>
									Подробнее <ArrowRight />
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	)
}
