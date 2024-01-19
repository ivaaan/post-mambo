import Vimeo from '@u-wave/react-vimeo';
import ReactPlayer from 'react-player';
// import Menu from './Menu';
// import { Link } from 'react-router-dom';
import Menu from './Menu';
import HeaderLogo from './HeaderLogo';

function Home() {
	return (
		<>
			<HeaderLogo />

			<Menu />
			<div className='bg-blue z-50 m-0 p-0 flex'>
				<div
					className='
					
					max-[640px]:hidden
					flex items-center align-center absolute
					items-end justify-end
					'>
					<div
						className='mt-60 w-full md:w-2/3 lg:w-2/3 xl:w-2/3 2xl:w-2/3
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
							{/* <ReactPlayer
								url='https://www.youtube.com/watch?v=pIksLwX15rc'
								playing='true'
								// width={props.width}
								// height='700'
								loop='true'
								muted='true'
							/> */}
							{/* <iframe
								// frameBorder='0'
								allowfullscreen=''
								// scrolling='no'
								allow='autoplay;fullscreen'
								src='https://onelineplayer.com/player.html?autoplay=true&autopause=false&muted=true&loop=true&url=https%3A%2F%2Fvimeo.com%2F902728728&poster=&time=false&progressBar=false&overlay=false&muteButton=false&fullscreenButton=false&style=light&quality=auto&playButton=false'></iframe> */}
							<Vimeo
								// og video
								// video='858109861'
								// normal video
								video='902728728'
								muted='true'
								background='true'
								// controls='false'
								height='700'
								// width='800'
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
