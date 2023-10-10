import Project from './Project';
import projects from '../data/projects.json';

function Projects() {
	return (
		<div>
			{projects.map((projectinfo) => (
				<>
					<Project projectinfo={projectinfo} />
				</>
			))}
		</div>
	);
}

export default Projects;
