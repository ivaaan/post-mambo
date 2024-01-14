import Menu from './Menu';
import contacts from '../data/contacts.json';

function Contact() {
	return (
		<div>
			<Menu />

			{contacts.map((contact) => (
				<>
					<div className='overlay'></div>

					<div className={`overflow-hidden shrink-0 w-full md:shrink-0`}>
						<div className='inline-block mt-40'>
							<div className='ml-8 mr-8 grid grid-cols-3'>
								<div className='col-start-2 flex flex-row'>
									<div className='items-center'>
										{contact.job} {contact.email}
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			))}
		</div>
	);
}

export default Contact;
