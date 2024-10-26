import { useMemo, useCallback } from 'react';
import people from '../data/people.json';
import projects from '../data/projects.json';
import Person from './Person';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import React from 'react';

function findProjectsByCredit (name) {
	return projects.filter((project) =>
		project.creditspriority.some((credit) => credit.name === name)
	);
}

function findRoleByName (name, project) {
	return project.creditspriority.find((credit) => credit.name === name);
}

function About () {
	const alignArr = useMemo(() => ['text-left', 'text-center', 'text-right'], []);
	const colArrCredits = useMemo(() => [
		'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4',
		'col-span-5', 'col-span-6', 'col-span-7'
	], []);

	const align = useCallback(() =>
		alignArr[Math.floor(Math.random() * alignArr.length)], [alignArr]);

	const alignColCredits = useCallback(() =>
		colArrCredits[Math.floor(Math.random() * colArrCredits.length)], [colArrCredits]);

	return (
		<div className='bg-darkyellow pb-40'>
			<Menu />
			{people.map((personinfo) => (
				<div key={personinfo.name} className='relative'>
					<Person personinfo={personinfo} />
					<div className='max-[640px]:top-16 min-[640px]:bottom-16 left-16 absolute text-silver font-authenticSans150'>
						<div className='grid grid-cols-12 gap-2'>
							<div className={alignColCredits()}></div>
							{findProjectsByCredit(personinfo.name).map((item) => (
								<React.Fragment key={item.title}>
									<div className={`${align()} col-span-5 max-h-40 rounded-3xl bg-silver tracking-tight flex flex-col`}>
										<Link to={`/projects/${item.id}`}>
											<div className='m-auto'>
												<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150 break-word'>
													{item.title}
												</p>
												<p className='ml-4 mb-2 mr-4 text-blue font-authenticSans90 break-word'>
													{findRoleByName(personinfo.name, item)?.role}
												</p>
											</div>
										</Link>
									</div>
									<div className={alignColCredits()}></div>
								</React.Fragment>
							))}
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default About;
