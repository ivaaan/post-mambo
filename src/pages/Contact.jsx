import Menu from './Menu';

function Contact() {
	// const colorsArr = [
	// 	'bg-blue',
	// 	'bg-pink',
	// 	'bg-orange',
	// 	'bg-olive',
	// 	'bg-navy',
	// 	'bg-green',
	// 	'bg-yellowgreen',
	// 	'bg-black',
	// 	'bg-folly',
	// 	'bg-vermilion',
	// ];

	// function randomColor() {
	// 	return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	// }

	return (
		<>
			<Menu />

			<div className='overlay'></div>

			<div
				className={`overflow-hidden bg-blue shrink-0 w-full h-full md:shrink-0`}>
				<div
					className={`mb-8 max-h-16 rounded-3xl bg-silver text-silver tracking-tight leading-5 h-screen`}>
					<div className='m-auto'>
						<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150'>
							Here we will have some contact info
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Contact;
