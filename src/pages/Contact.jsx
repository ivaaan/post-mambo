import Menu from './Menu';
import contacts from '../data/contacts.json';

function Contact () {
	return (
		<div>
			<Menu />
			<>
				<div className='overflow-hidden shrink-0 h-screen relative bg-dark'>
					<div className='inline-block'>
						<div className='mt-60 ml-8 mr-8'>
							<div className='w-screen flex flex-col items-center justify-center align-center'>
								{contacts.map((contact) => (
									<div
										key={contact.job}
										className='items-center justify-center font-authenticSans130'>
										{contact.job}
										<a
											href={`mailto:${contact.email}`}
											className='text-4xl ml-3'>
											{contact.email}
										</a>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
}

export default Contact;
