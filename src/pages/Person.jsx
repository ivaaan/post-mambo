/* eslint-disable react/prop-types */
function Project({ personinfo }) {
	return (
		<>
			<div className='overlay'></div>

			<div
				className={`overflow-hidden bg-darkyellow design pb-20 shrink-0 w-full md:shrink-0`}>
				<div className='inline-block mt-20'>
					{/* <div className='grid grid-cols-8 gap-4 ml-0 mr-0 mb-20'> */}
					<div className='ml-8 mr-8 mb-20 grid grid-cols-2'>
						{/* Left: poster */}
						<div className='col-start-0 col-span-1'>
							<img src={personinfo.photo} className=''></img>
						</div>
						{/* Right */}
						<div className='col-span-1 sm:mt-6 md:mt-6'>
							{/* description*/}
							<p className='mt-4 text-silver text-center text-xl font-authenticSans130 tracking-tight'>
								{personinfo.bio}
							</p>
							{/* <h1
								className={`uppercase text-silver text-8xl break-all font-authenticSans150`}>
								{personinfo.name}
							</h1> */}
						</div>
						<div className='absolute'>
							<h1
								className={`uppercase mt-96 text-silver text-6xl min-[640px]:text-8xl break-all font-authenticSans150`}>
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
