/* eslint-disable react/prop-types */
function Project({ personinfo }) {
	return (
		<>
			<div className='overlay'></div>

			<div
				className={`overflow-hidden bg-blue design shrink-0 w-full md:shrink-0`}>
				<div className='inline-block mt-40'>
					{/* <div className='grid grid-cols-8 gap-4 ml-0 mr-0 mb-20'> */}
					<div className='ml-8 mr-8 mb-20'>
						{/* Left: poster */}
						{/* <div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
							<img src={projectinfo.image} className=''></img>
						</div> */}
						{/* Right */}
						<div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4 sm:mt-6 md:mt-6'>
							<div className=''>
								<h1
									className={`uppercase text-silver text-8xl break-all font-authenticSans150`}>
									{personinfo.name}
								</h1>
								{/* description*/}
								<p className='mt-4 text-silver text-center text-xl font-authenticSans130 tracking-tight'>
									{personinfo.bio}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Project;
