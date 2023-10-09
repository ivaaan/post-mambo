// import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderLogo from './pages/HeaderLogo';
import Menu from './pages/Menu';
import Projects from './pages/Projects';
import About from './pages/About';

function App() {
	// const [pages, setPages] = useState({
	// 	home: Home,
	// 	tahara: Tahara,
	// });
	// const [hasMore, setHasMore] = useState(true);
	// const [page, setPage] = useState(0);
	// const elementRef = useRef(null);

	// function onIntersection() {
	// 	const firstEntry = pages[0];
	// 	if (firstEntry.isIntersecting && hasMore) {
	// 		setPage((prevPage) => prevPage + 1);
	// 	}
	// }

	// useEffect(() => {
	// 	const observer = new IntersectionObserver(onIntersection);
	// 	if (observer && elementRef.current) {
	// 		observer.observe(elementRef.current);
	// 	}
	// 	return () => {
	// 		if (observer) {
	// 			observer.disconnect();
	// 		}
	// 	};
	// }, pages);

	return (
		<Router>
			<>
				<div className='w-full h-full overflow-hidden relative shrink-0 m-0 p-0'>
					<HeaderLogo></HeaderLogo>
					<Menu />
					<Routes>
						<Route path='/' element={<Projects />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/about' element={<About />} />
						<Route path='/contact' element={<Projects />} />
					</Routes>
				</div>
			</>
		</Router>
	);
}

export default App;
