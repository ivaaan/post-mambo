import YouTube from 'react-youtube';
import Vimeo from '@u-wave/react-vimeo';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import projects from '../data/projects.json';
import Menu from './Menu';

function shuffle (array) {
	var ctr = array.length,
		temp,
		index;
	while (ctr > 0) {
		index = Math.floor(Math.random() * ctr);
		ctr--;
		temp = array[ctr];
		array[ctr] = array[index];
		array[index] = temp;
	}
	return array;
}

function findProjectById (id) {
	return projects.find((project) => project.id === id);
}

function Project ({ projectinfo: initialProjectInfo }) {
	const { id } = useParams();
	const [creditsLaurels, setCreditsLaurels] = useState([]);

	const projectinfo = useMemo(() => initialProjectInfo || findProjectById(id), [initialProjectInfo, id]);

	useEffect(() => {
		if (projectinfo) {
			const mountArray = shuffle([...projectinfo.creditslaurels]);
			setCreditsLaurels(mountArray);
			window.scrollTo(0, 0);
		}
	}, [projectinfo]);

	const randomColor = useCallback(() => {
		const colorsArr = ['bg-blue', 'bg-pink', 'bg-orange', 'bg-olive', 'bg-navy', 'bg-green', 'bg-yellowgreen', 'bg-black', 'bg-folly', 'bg-vermilion'];
		return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	}, []);

	const align = useCallback(() => {
		const alignArr = ['text-left', 'text-center', 'text-right'];
		return alignArr[Math.floor(Math.random() * alignArr.length)];
	}, []);

	const alignColCredits = useCallback(() => {
		const colArrCredits = ['col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5', 'col-span-6', 'col-span-7'];
		return colArrCredits[Math.floor(Math.random() * colArrCredits.length)];
	}, []);

	if (!projectinfo) {
		return <div>Project not found</div>;
	}

	return (
		<>
			{id && <Menu />}
			<div className={`overflow-hidden ${randomColor()} design shrink-0 w-full md:shrink-0`}>
				<div className='inline-block mt-20'>
					<div className='grid grid-cols-8 gap-4 ml-0 mr-0 mb-20'>
						{/* Left: poster */}
						<div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
							{projectinfo.image ? (
								<img src={projectinfo.image} className=''></img>
							) : null}
						</div>
						{/* Right */}
						<div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4 sm:mt-6 md:mt-6'>
							<div className=''>
								<h1
									className={`${align()} + uppercase text-silver text-6xl md:text-8xl lg:text-8xl xl:text-8xl 2xl:text-8xl break-words font-authenticSans150`}>
									{projectinfo.title}
								</h1>
								{/* Sub-grid for credits */}
								<div className='grid grid-cols-12 gap-2'>
									<div className={alignColCredits()}></div>
									{/* Mapping through priority credits */}
									{projectinfo.creditspriority.map((item) => {
										return (
											<>
												<div
													key={item.name}
													className={`${align()} + col-span-4 max-h-32 rounded-3xl bg-silver text-silver tracking-tight leading-5 flex flex-col align-middle break-words`}>
													<div className='m-auto align-middle'>
														<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150'>
															{item.name}
														</p>
														<p className='ml-4 mb-2 mr-4 text-blue font-authenticSans90'>
															{item.role}
														</p>
													</div>
												</div>
												<div className={alignColCredits()}></div>
											</>
										);
									})}
									{/* Mapping through other credits and laurels */}
									{creditsLaurels.map((item) => {
										if (item.type === 'credit') {
											return (
												<>
													<div
														key={item.name}
														className={`${align()} + col-span-6 
														md:col-span-4 lg:col-span-4 xl:col-span-4 2xl:col-span-4
														max-h-32 rounded-3xl bg-silver text-silver tracking-tight leading-5 flex flex-col align-middle break-words`}>
														<div className='m-auto align-middle'>
															<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150'>
																{item.name}
															</p>
															<p className='ml-4 mb-2 mr-4 text-blue font-authenticSans90'>
																{item.role}
															</p>
														</div>
													</div>
													<div className={alignColCredits()}></div>
												</>
											);
										} else if (item.type === 'laurel') {
											return (
												<div key={item.image} className='col-span-3'>
													<img src={item.image}></img>
												</div>
											);
										}
									})}
									<div className={alignColCredits()}></div>
								</div>
								{/* description*/}
								<p className='mt-4 text-silver text-center text-xl font-authenticSans130 tracking-tight'>
									{projectinfo.description}
								</p>
								{/* quote */}
								<div className='quote mt-4 mb-5 text-silver text-center text-xl font-authenticSans90 rounded-2xl bg-silver tracking-tight'>
									{projectinfo.pressquotes.map((quote) => (
										<p key={quote.quote} className='inline-block m-4 text-blue'>
											{quote.quote} <span>- {quote.publication}</span>
										</p>
									))}
								</div>
								{projectinfo.videos[0].source === 'youtube' && (
									<YouTube
										videoId={projectinfo.videos[0].id}
										opts={{
											height: '300',
											width: '100%',
										}}
										containerClassName={'youtubeContainer'}
									/>
								)}

								{projectinfo.videos[0].source === 'vimeo' && (
									<Vimeo
										video={projectinfo.videos[0].id}
										height='300'
									/>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
