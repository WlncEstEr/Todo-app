import { Footer } from '@/components/Footer'
import { Forum } from '@/components/Forum'
import { Header } from '@/components/Header'
import { MainPage } from '@/components/MainPage'
import { News } from '@/components/News'
import { PopularPage } from '@/components/PopularPage'
import { YouWantSee } from '@/components/YouWantSee'

export function Main() {
	return (
		<div className='w-full h-full'>
			<Header />
			<MainPage />
			<PopularPage />
			<YouWantSee />
			<News />
			<Forum />
			<Footer />
		</div>
	)
}
