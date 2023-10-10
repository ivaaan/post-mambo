/* eslint-disable react/prop-types */
import YouTube from 'react-youtube';
import { useState, useEffect } from 'react';

function shuffle(arra1) {
	var ctr = arra1.length,
		temp,
		index;
	while (ctr > 0) {
		index = Math.floor(Math.random() * ctr);
		ctr--;
		temp = arra1[ctr];
		arra1[ctr] = arra1[index];
		arra1[index] = temp;
	}
	return arra1;
}

function Project({ projectinfo }) {
	const [creditsLaurels, setCreditsLaurels] = useState([]);

	useEffect(() => {
		const mountArray = shuffle(projectinfo.creditslaurels);
		setCreditsLaurels(mountArray);
		console.log('shuffled state', creditsLaurels);
	}, []);

	const colorsArr = [
		'bg-blue',
		'bg-pink',
		'bg-orange',
		'bg-olive',
		'bg-navy',
		'bg-green',
		'bg-yellowgreen',
		'bg-black',
		'bg-folly',
		'bg-vermilion',
	];

	function randomColor() {
		return colorsArr[Math.floor(Math.random() * colorsArr.length)];
	}

	console.log('randomColor()', randomColor());

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
		<>
			<div className='overlay'></div>

			<div
				className={`overflow-hidden ${randomColor()} design shrink-0 w-full md:shrink-0`}>
				<div className='inline-block mt-40'>
					<div className='grid grid-cols-8 gap-4 ml-0 mr-0 mb-20'>
						{/* Left: poster */}
						<div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4'>
							<img src={projectinfo.image} className=''></img>
						</div>
						{/* Right */}
						<div className='col-start-1 col-span-8 lg:col-span-4 xl:col-span-4 2xl:col-span-4 sm:mt-6 md:mt-6'>
							<div className=''>
								<h1
									className={`${align()} + uppercase text-silver text-8xl break-all font-authenticSans150`}>
									{projectinfo.title}
								</h1>
								{/* Sub-grid for credits */}
								<div className='grid grid-cols-12 gap-2'>
									<div className={alignColCredits()}></div>
									{/* Mapping through priority credits */}
									{projectinfo.creditspriority.map((item) => {
										return (
											<>
												<div
													key={item.name}
													className={`${align()} + col-span-4 max-h-16 rounded-3xl bg-silver text-silver tracking-tight leading-5 flex flex-col h-screen`}>
													<div className='m-auto'>
														<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150'>
															{item.name}
														</p>
														<p className='ml-4 mb-2 mr-4 text-blue font-authenticSans90'>
															{item.role}
														</p>
													</div>
												</div>
												<div className={alignColCredits()}></div>
											</>
										);
									})}
									{/* Mapping through other credits and laurels */}
									{creditsLaurels.map((item) => {
										if (item.type === 'credit') {
											return (
												<>
													<div
														key={item.name}
														className={`${align()} + col-span-4 max-h-16 rounded-3xl bg-silver text-silver tracking-tight leading-5 flex flex-col h-screen`}>
														<div className='m-auto'>
															<p className='ml-4 mr-4 mt-2 text-blue font-authenticSans150'>
																{item.name}
															</p>
															<p className='ml-4 mb-2 mr-4 text-blue font-authenticSans90'>
																{item.role}
															</p>
														</div>
													</div>
													<div className={alignColCredits()}></div>
												</>
											);
										} else if (item.type === 'laurel') {
											return (
												<div key={item.image} className='col-span-3'>
													<img src={item.image}></img>
												</div>
											);
										}
									})}
									<div className={alignColCredits()}></div>
								</div>
								{/* description*/}
								<p className='mt-4 text-silver text-center text-xl font-authenticSans130 tracking-tight'>
									{projectinfo.description}
								</p>
								{/* quote */}
								<div className='quote mt-4 text-silver text-center text-xl font-authenticSans90 rounded-2xl bg-silver tracking-tight'>
									{projectinfo.pressquotes.map((quote) => (
										<p key={quote.quote} className='inline-block m-4 text-blue'>
											{quote.quote} <span>- {quote.publication}</span>
										</p>
									))}
								</div>
								<div className='quote mt-4 text-silver text-center rounded-lg bg-silver tracking-tight'>
									<YouTube
										videoId={projectinfo.videos[0].id}
										opts={{
											height: '300',
											width: '100%',
											// playerVars: {
											// 	// https://developers.google.com/youtube/player_parameters
											// 	autoplay: 1,
											// },
										}}
										containerClassName={'youtubeContainer'}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <h1 className="taharaHeading">Tahara</h1>
            <p>Minim sunt nostrud cillum id esse magna laboris est velit ut id ullamco tempor sit sit aliquip in id ea occaecat exercitation ex dolor velit ea ut anim amets eu ex dolor dolor cillum enim nisi Duis Ut dolore reprehenderit occaecat irure in commodo exercitation ipsum cupidatat Excepteur Lorem ipsum est sit id esse cillum minim incididunt ipsum sint in qui proidents do Ut irure nisi sit in dolor est ut officia do Lorem exercitation dolore Lorem ipsum sed ullamco mollit dolor dolore sunt anim quis sit culpa ut Excepteur elits proidents sed laborums consequats ad cupidatat nisi consequats adipiscing dolore eu deserunt mollit non aliquas quis veniams Duis ad tempor nulla veniams fugiat dolore mollit velit fugiat eu quis labore anim dolore magna enim in ut veniams reprehenderit cillum magna id et et mollit labore dolore est nulla in aute dolore aute proidents dolore enim dolore Ut irure velit irure adipiscing irure elits anim ex commodo aliquip anim in in deserunt consectetur id sit nulla irure dolore nisi exercitation culpa labore ut dolor consectetur nisi id sed culpa proidents aliquas laboris do Lorem sint magna fugiat ad in reprehenderit incididunt voluptate nisi ea cupidatat proidents dolore enim do dolore exercitation nisi in non adipiscing in fugiat eiusmod ipsum anim minim commodo proidents nisi ullamco amets irure et elits reprehenderit est veniams qui aliquas nostrud sit labore ipsum magna nisi in et sed ex in in nostrud Lorem occaecat in minim aute culpa ipsum labore irure in sint commodo in nulla consectetur tempor pariaturs minim et sint enim est in incididunt non eiusmod velit in adipiscing cupidatat consequats consectetur enim fugiat ad ea deserunt ipsum eiusmod non voluptate Duis tempor ullamco id reprehenderit Ut laborums sed labore velit dolor ullamco cupidatat incididunt esse pariaturs eu nulla in in velit labore Lorem dolor eiusmod magna dolore voluptate incididunt adipiscing irure fugiat Ut elits anim velit magna Duis irure et in aliquip labore ipsum fugiat dolore labore ut aute quis est irure do culpa nisi consequats aliquip qui aliquip fugiat amets Lorem esse proidents qui laborums dolore aute mollit reprehenderit quis veniams occaecat labore ut Ut ut ea sit commodo et proidents cillum nulla in dolore aute sit in id deserunt ea aliquip proidents amets dolore velit quis in amets tempor irure ad elits laborums nostrud commodo mollit reprehenderit dolore Lorem ad nulla quis ex aliquip in deserunt incididunt laborums eiusmod ex cillum tempor amets in esse sunt id tempor cillum commodo id voluptate sint irure dolore in ut reprehenderit id do sint est ut Ut commodo consectetur velit ex sed dolor dolor adipiscing cillum in eiusmod labore voluptate labore tempor occaecat dolore ut cillum commodo velit dolore sunt Duis consequats irure sit aliquas Ut proidents qui amets ipsum elits reprehenderit nisi irure in eu id culpa labore labore officia nisi et sint elits ut mollit occaecat anim laboris aliquas ullamco do Excepteur ex proidents voluptate esse in incididunt Duis irure cillum pariaturs adipiscing consequats do exercitation elits est sed sint consectetur commodo qui proidents aliquip Lorem reprehenderit nisi magna anim Lorem Duis mollit magna elits eiusmod proidents adipiscing nostrud fugiat voluptate aliquas culpa adipiscing do deserunt eu culpa nisi esse pariaturs sed cillum proidents consequats ullamco ut velit magna ad esse ullamco dolore eu nostrud anim proidents nulla reprehenderit qui velit adipiscing tempor quis dolore do labore proidents labore pariaturs sint pariaturs dolor minim et labore et ut aliquas ullamco eiusmod Ut ex cupidatat minim ex velit amets voluptate qui consequats eiusmod dolore non nisi exercitation commodo cupidatat qui nulla minim id aliquas amets eu pariaturs nisi nostrud Ut enim in velit dolore deserunt qui veniams cillum aliquas esse deserunt pariaturs deserunt cillum eu irure sunt commodo labore in tempor Excepteur et ex consectetur labore cupidatat enim non exercitation dolor sed nisi ut qui magna in sunt nulla tempor ut dolor Ut ad culpa anim ullamco nostrud velit ullamco sint amets minim sunt anim anim ad laboris adipiscing dolore ad do qui officia adipiscing consequats in id exercitation non labore amets ipsum nostrud dolor Lorem non est anim aliquip in est exercitation consectetur laboris tempor ex et in in veniams veniams mollit quis cillum tempor consectetur occaecat veniams ea Lorem magna ipsum ut do Duis ullamco ad anim sint velit aliquip do elits aliquas sit dolore ullamco proidents eu tempor Ut ut officia occaecat nostrud in ex labore id in sint nulla exercitation culpa velit exercitation culpa consequats est do cupidatat ut velit quis adipiscing sint ex aliquip adipiscing Excepteur consequats sunt esse sunt quis amets minim mollit adipiscing cillum voluptate non sint id Ut cillum ea Duis consequats mollit culpa Duis et ut quis quis Excepteur sint laboris est pariaturs eiusmod enim ex est ea elits magna proidents aliquip nostrud voluptate mollit sint in do sed do non et occaecat amets ut Excepteur labore reprehenderit eiusmod sit elits consequats est incididunt officia in eu ex deserunt velit dolor consequats veniams incididunt ad magna enim anim quis aliquip mollit eu aliquas id voluptate consectetur non Duis enim eiusmod aute qui laboris voluptate sed ut ipsum ut qui aliquas sunt minim irure Duis aliquas in et labore ipsum officia sit in consectetur ullamco sint Duis exercitation dolore tempor aute qui commodo exercitation Lorem anim Ut Lorem ullamco deserunt in ut est proidents consequats cupidatat nostrud amets labore ad laboris ipsum occaecat ad exercitation irure consequats dolor non Duis sunt sed Ut aute non ipsum qui in qui commodo fugiat officia tempor dolore minim enim aute enim voluptate aliquas magna qui non veniams id veniams ea commodo quis consequats non aute dolore fugiat nostrud enim sunt sunt qui mollit reprehenderit in tempor anim irure Duis deserunt do dolor mollit exercitation pariaturs quis magna velit mollit reprehenderit proidents in in occaecat ipsum ad sint aute in velit in sed voluptate adipiscing voluptate commodo velit eiusmod sit incididunt sit eiusmod nostrud Duis quis eu magna laborums Lorem labore Duis cillum aute cupidatat dolor sed ea in fugiat dolor aute cillum deserunt reprehenderit laborums sint.</p> */}
			</div>
		</>
	);
}

export default Project;
