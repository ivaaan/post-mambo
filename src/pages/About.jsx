function About() {
	const colorsArr = [
		'bg-blue',
		'bg-pink',
		'bg-orange',
		'bg-olive',
		'bg-navy',
		'bg-green',
		'bg-yellowgreen',
		'bg-black',
		'bg-folly',
		'bg-vermilion',
	];

	function randomColor() {
		return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	}

	return (
		<>
			<div className='overlay'></div>

			<div className={`${randomColor()} design shrink-0 w-full md:shrink-0`}>
				<div className='inline-block mt-40'>
					<div className='grid grid-cols-8 gap-4 ml-0 mr-0 mb-20'>
						<div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
							<h1
								className={`uppercase text-silver text-8xl break-all font-authenticSans150`}>
								About
							</h1>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default About;
