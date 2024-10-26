function Project ({ personinfo }) {
	return (
		<>
			<div className='overlay'></div>

			<div
				className={`overflow-hidden bg-darkyellow design shrink-0 w-full md:shrink-0`}>
				<div className='inline-block mt-10'>
					<div className='ml-8 mr-8 mb-20 grid min-[640px]:grid-cols-2'>
						<div className='col-start-0 col-span-1'>
							<img
								src={personinfo.photo}
								className='object-scale-down max-h-screen'></img>
						</div>
						<div className='col-span-1 sm:mt-6 md:mt-6'>
							<p className='mt-4 text-silver text-center text-xl font-authenticSans130 tracking-tight'>
								{personinfo.bio}
							</p>
						</div>
						<div className='absolute'>
							<h1
								className={`uppercase mt-96 text-silver text-6xl min-[640px]:text-8xl break-word font-authenticSans150`}>
								{personinfo.name}
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
