import people from '../data/people.json';
import projects from '../data/projects.json';
import Person from './Person';

function findProjectsByCredit(name) {
	return projects.filter((project) => {
		return project.creditspriority.some((credit) => credit.name === name);
	});
}

function About() {
	// const colorsArr = [
	// 	'bg-blue',
	// 	'bg-pink',
	// 	'bg-orange',
	// 	'bg-olive',
	// 	'bg-navy',
	// 	'bg-green',
	// 	'bg-yellowgreen',
	// 	'bg-black',
	// 	'bg-folly',
	// 	'bg-vermilion',
	// ];

	// function randomColor() {
	// 	return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	// }

	return (
		<div>
			{people.map((personinfo) => (
				<>
					<Person personinfo={personinfo} />
					<h2>{personinfo.name} has worked on:</h2>
					{findProjectsByCredit(personinfo.name).map((project) => {
						{
							console.log(findProjectsByCredit(personinfo.name));
						}
						return (
							<>
								<div
									key={project.title}
									className={`mb-8 max-h-16 rounded-3xl bg-silver text-silver tracking-tight leading-5 flex flex-col h-screen`}>
									<div className='m-auto'>
										<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150'>
											{project.title}
										</p>
									</div>
								</div>
							</>
						);
					})}
				</>
			))}
		</div>
	);
}

export default About;
