import people from '../data/people.json';
import projects from '../data/projects.json';
import Person from './Person';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import HeaderLogo from './HeaderLogo';

function findProjectsByCredit(name) {
	return projects.filter((project) => {
		return project.creditspriority.some((credit) => credit.name === name);
	});
}

function findRoleByName(name, project) {
	return project.creditspriority.filter((credit) => credit.name === name);
}

function About() {
	const alignArr = ['text-left', 'text-center', 'text-right'];

	function align() {
		return alignArr[(alignArr.length * Math.random()) | 0];
	}
	const colArrCredits = [
		'col-span-1',
		'col-span-2',
		'col-span-3',
		'col-span-4',
		'col-span-5',
		'col-span-6',
		'col-span-7',
		// 'col-span-8',
		// 'col-span-9',
		// 'col-span-10',
		// 'col-span-11',
		// 'col-span-12',
	];

	function alignColCredits() {
		return colArrCredits[(colArrCredits.length * Math.random()) | 0];
	}

	return (
		<div className='bg-darkyellow pb-40'>
			{/* <HeaderLogo></HeaderLogo> */}

			<Menu />

			{people.map((personinfo) => (
				<div key={personinfo.name} className='relative'>
					<Person personinfo={personinfo} />
					<div className='max-[640px]:top-16 min-[640px]:bottom-16 left-16 absolute text-silver font-authenticSans150'>
						<div className='grid grid-cols-12 gap-2'>
							<div className={alignColCredits()}></div>
							{findProjectsByCredit(personinfo.name).map((item) => {
								// {
								// 	console.log(
								// 		'🙂',
								// 		personinfo.name,
								// 		item.id,
								// 		'id',
								// 		item.title,
								// 		'credit',
								// 		findRoleByName(personinfo.name, item)
								// 	);
								// }
								return (
									<>
										{/* <div className={alignColCredits()}></div> */}
										<div
											key={item.title}
											className={`${align()} + col-span-5 max-h-40 rounded-3xl bg-silver tracking-tight flex flex-col`}>
											<Link to={'/projects/' + `${item.id}`}>
												<div className='m-auto'>
													<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150 break-word'>
														{item.title}
													</p>
													<p className='ml-4 mb-2 mr-4 text-blue font-authenticSans90 break-word'>
														{findRoleByName(personinfo.name, item)[0].role}
													</p>
												</div>
											</Link>
										</div>
										<div className={alignColCredits()}></div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default About;
