import { Janr } from '@/constants/test.const'
import { Search, User } from 'lucide-react'

export function Header() {
	return (
		<header className='flex flex-row justify-between py-10 w-full items-center'>
			<img src='logo.png' className='w-40 h-20 ' alt='' />
			<ul className='flex flex-row justify-between w-1/3'>
				{Janr.map((item, idx) => (
					<li
						className='text-2xl hover:text-blue-500 transition-colors ease-in-out duration-200 cursor-pointer'
						key={idx}
					>
						{item}
					</li>
				))}
			</ul>
			<div className='w-1/12 flex flex-row justify-center gap-3'>
				<button>
					<Search />
				</button>
				<button>
					<User />
				</button>
			</div>
		</header>
	)
}
