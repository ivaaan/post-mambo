import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tahara from './pages/Tahara.jsx';
import Taharainvert from './pages/Taharainvert.jsx';
import Tahara2 from './pages/Tahara2.jsx';
import Tahara2invert from './pages/Tahara2invert.jsx';

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
		<>
			<BrowserRouter>
				<Routes>
					{/*<Route path="/" element={<Home />} />*/}
					<Route path='/tahara' element={<Tahara />} />
					<Route path='/taharainvert' element={<Taharainvert />} />
					<Route path='/tahara2' element={<Tahara2 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
