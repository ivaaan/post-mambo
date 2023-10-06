// import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';
import Project from './pages/Project';
import HeaderLogo from './pages/HeaderLogo';
import projects from './pages/projects.json';

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
			<div className='w-full h-full overflow-hidden relative shrink-0 m-0 p-0'>
				<HeaderLogo></HeaderLogo>
				<div>
					{/* <Shuffle> */}
					{projects.map((projectinfo) => (
						<>
							<Project projectinfo={projectinfo} />
						</>
					))}
					{/* </Shuffle> */}
				</div>
				<BrowserRouter>
					<Routes>{/*<Route path="/" element={<Home />} />*/}</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
