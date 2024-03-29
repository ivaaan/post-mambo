// import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// import Menu from './pages/Menu';
import Projects from './pages/Projects';
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Test from './pages/Test';
import Test2 from './pages/Test2';
import HeaderLogo from './pages/HeaderLogo';

function App() {
	// const location = useLocation();

	// useEffect(() => {
	// 	console.log('🐶', location.pathname);
	// }, [location.pathname]);

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
			<div className='w-screen h-full overflow-hidden relative shrink-0 m-0 p-0'>
				<HeaderLogo />
				{/* {location.pathname !== '/' ? <Menu /> : null} */}
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/projects/:id' element={<Project />} />
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/test' element={<Test />} />
					<Route path='/test2' element={<Test2 />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
