import Vimeo from '@u-wave/react-vimeo';
// import Menu from './Menu';
// import { Link } from 'react-router-dom';
import Menu from './Menu';

function Home() {
	return (
		<>
			<Menu />
			<div className='w-screen h-screen bg-blue overflow-hidden shrink-0 m-0 p-0'>
				<div className='flex flex-col w-full items-center'>
					<div className='aspect-video'>
						<Vimeo
							video='858109861'
							// video='902728728'
							// muted='true'
							background='true'
							// controls='false'
							height='700'
							// width='800'
							loop='true'
						/>
					</div>
				</div>
			</div>

			<div className='bg-blue z-50 m-0 p-0 flex justify-center'>
				{/* <div className='w-full m-0 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center'> */}
				<div className='-mt-80 ml-1 w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3 rounded-3xl bg-silver text-blue tracking-tight p-8 font-authenticSans90 text-2xl'>
					<div className=''>
						<span className='w-1/2'>
							<img
								className='w-1/3 float-left mr-4'
								src='/pm-logo-blue.png'></img>
						</span>
						<p className='-mt-5'>
							is an award-winning Los Angeles and Chicago based post-production
							company.
						</p>
					</div>
					<span className='mt-4'>
						We specialize in sound and edit for feature films, documentaries,
						and commercials.
					</span>
					{/* <p>
								Today I spent most of the day researching ways to ...
								<span className='inline-flex items-baseline'>
									<img
										src='/pm-logo-blue.png'
										alt=''
										className='self-center rounded-full mx-1'
									/>
									<span>Kramer</span>
								</span>
								keeps telling me there is no way to make it work, that ...
							</p> */}
				</div>
			</div>
		</>
	);
}

export default Home;
