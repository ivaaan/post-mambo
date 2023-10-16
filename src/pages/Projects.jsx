import Project from './Project';
import projects from '../data/projects.json';
import Menu from './Menu';

function Projects() {
	return (
		<div>
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
