import Vimeo from '@u-wave/react-vimeo';
// import Menu from './Menu';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='w-screen bg-blue overflow-hidden relative shrink-0 m-0 p-0'>
			<div className='mt-16 flex flex-col w-full items-center'>
				<div className='aspect-video'>
					<Vimeo
						video='858109861'
						autoplay='true'
						// muted='true'
						background='true'
						// controls='false'
						height='700'
						// width='800'
						loop='true'
					/>
				</div>
				<div className='w-full m-0 flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row justify-center'>
					<div className='-mt-96'>
						<div className='w-full bg-silver text-blue rounded-3xl relative'>
							<div className='w-full grid grid-cols-2 font-authenticSans150'>
								<div className='col-span-1 flex flex-col items-center'>
									<div className='m-16 text-center p-2'>
										<Link to='/'>Home</Link>
									</div>
									<div className='m-16 text-center p-2'>
										<Link to='/contact'>Contact</Link>
									</div>
								</div>

								<div className='col-span-1 flex flex-col items-center'>
									<div className='m-16 items-center p-2'>
										<Link to='/projects'>Projects</Link>
									</div>
									<div className='m-16 text-center p-2'>
										<Link to='/about'>About</Link>
									</div>
								</div>

								{/* Horizontal line */}
								<div className='absolute left-0 right-0 mx-auto top-1/2 border-b-2 border-blue-500'></div>
							</div>

							{/* Vertical line */}
							<div className='absolute top-0 bottom-0 my-auto left-1/2 border-l-2 border-blue-500'></div>
						</div>
					</div>
					<div className='-mt-96 ml-1 w-full md:w-1/3 lg:w-1/3 xl:w-1/3 2xl:w-1/3 rounded-3xl bg-silver text-blue tracking-tight p-8 font-authenticSans120 text-2xl'>
						<p>
							Post Mambo is an award-winning Los Angeles and Chicago based
							post-production company.
						</p>
						<p className='mt-4'>
							We specialize in sound and edit for feature films, documentaries,
							and commercials.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
