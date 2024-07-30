import { Button } from './UI/Button'

export function MainPage() {
	return (
		<div className='h-3/4 w-max mb-5'>
			<h1 className='text-3xl pb-5'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
			</h1>
			<h2 className='max-w-md pb-5'>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos minima
				autem velit quam quas ipsum similique alias in laborum natus. Corporis
				quas impedit iusto perferendis sed magni itaque eaque amet.
			</h2>
			<Button title='Посмотреть каталог фильмов' />
		</div>
	)
}
