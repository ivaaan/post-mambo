import Project from './Project';
import projects from '../data/projects.json';
import Menu from './Menu';
// import HeaderLogo from './HeaderLogo';

function Projects() {
	return (
		<div>
			{/* <HeaderLogo></HeaderLogo> */}

			<Menu />

			{projects.map((projectinfo) => (
				<>
					<Project projectinfo={projectinfo} />
				</>
			))}
		</div>
	);
}

export default Projects;
