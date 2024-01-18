import { Link } from 'react-router-dom';

function Menu() {
	return (
		<div
			className='fixed z-50 
		
		bottom-6 
		max-[640px]:right-6
		lg:left-6 xl:left-6 2xl:left-6 md:left-6 lg:left-6 xl:left-6
		
		font-authenticSans150'>
			<div className='rounded-3xl bg-silver text-blue tracking-tight flex relative'>
				<div
					className={`col-span-1 row-span-2 ml-2 border-r-2 border-blue-500`}>
					<div className='m-4 align-middle text-center items-center'>
						<Link to='/'>Home</Link>
					</div>
					<div className='m-4 align-middle text-center items-center'>
						<Link to='/contact'>Contact</Link>
					</div>
				</div>

				<div className={`col-span-1 mr-2 relative`}>
					<div className='m-4 align-middle text-center items-center'>
						<Link to='/projects'>Projects</Link>
					</div>
					<div className='m-4 align-middle text-center items-center'>
						<Link to='/about'>About</Link>
					</div>
				</div>

				{/* Horizontal line */}
				<div className='absolute left-0 right-0 mx-auto bottom-1/2 border-b-2 border-blue-500'></div>
			</div>
		</div>
	);
}

export default Menu;
