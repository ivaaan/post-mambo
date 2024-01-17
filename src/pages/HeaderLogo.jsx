// import { useLocation } from 'react-router-dom';

function HeaderLogo() {
	// const location = useLocation();

	// return
	// location.pathname === '/' ? (
	// 	<div className='fixed flex z-50 top-2 justify-center'>
	// 		<div className='w-10/12 z-50'>
	// 			<img className='' src='/pm-logo-white.png'></img>
	// 		</div>
	// 	</div>
	// ) :
	return (
		<div className='fixed w-1/2 lg:w-7/12 xl:w-7/12 2xl:w-7/12 z-50 md:-top-3 md:-left-3 md:-right-2 lg:-top-6 lg:-left-6 lg:-right-4 xl:-top-6 xl:-left-6 xl:-right-4 2xl:-top-6 2xl:-left-6 2xl:-right-4'>
			<img src='/pm-logo-white.png'></img>
		</div>
	);
}

export default HeaderLogo;
