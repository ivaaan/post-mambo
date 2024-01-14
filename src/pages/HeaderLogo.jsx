import { useLocation } from 'react-router-dom';

function HeaderLogo() {
	const location = useLocation();

	return location.pathname === '/' ? (
		<div className='fixed flex z-50 top-2 justify-center'>
			<div className='w-10/12 z-50'>
				<img className='' src='/pm-logo-white.png'></img>
			</div>
		</div>
	) : (
		<div className='fixed w-7/12 z-50 -top-6 -left-6 -right-4'>
			<img src='/pm-logo-white.png'></img>
		</div>
	);
}

export default HeaderLogo;
