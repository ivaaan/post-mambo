import Vimeo from '@u-wave/react-vimeo';
import Menu from './Menu';

function Home () {
	return (
		<>
			<Menu />
			<div className='bg-blue z-50 m-0 p-0 flex'>
				<div
					className='
					
					max-[640px]:hidden
					flex items-center align-center absolute
					items-end justify-end
					'>
					<div
						className='mt-80 w-2/3
					rounded-3xl bg-silver text-blue tracking-tight p-8 font-authenticSans90 text-2xl'>
						<div className=''>
							<span className='w-1/2'>
								<img
									className='w-1/3 float-left mr-4'
									src='/pm-logo-blue.png'></img>
							</span>
							<p className='-mt-5'>
								is an award-winning Los Angeles and Chicago based
								post-production company.
							</p>
						</div>
						<span className='mt-4'>
							We specialize in sound and edit for feature films, documentaries,
							and commercials.
						</span>
					</div>
				</div>
				<div className='w-screen h-screen bg-blue overflow-hidden shrink-0 m-0 p-0'>
					<div className='flex flex-col w-full items-center'>
						<div className='aspect-video'>
							<Vimeo
								video='902728728'
								muted='true'
								background='true'
								height='700'
								loop='true'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
