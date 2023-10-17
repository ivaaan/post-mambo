/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';

const items = [
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
	{ title: 'title', description: 'description' },
];

function Test() {
	return (
		<div>
			<IntersectionObserverComponent items={items} />
		</div>
	);
}

function IntersectionObserverComponent({ items }) {
	const [visibleItems, setVisibleItems] = useState([]);
	const observer = useRef(null);

	useEffect(() => {
		observer.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const index = parseInt(entry.target.dataset.index, 10);
					if (entry.isIntersecting && !visibleItems.includes(index)) {
						setVisibleItems((prevVisibleItems) => [...prevVisibleItems, index]);
					}
				});
			},
			{ rootMargin: '100px', threshold: 1 }
		);

		const elements = document.querySelectorAll('.item');
		elements.forEach((element) => {
			observer.current.observe(element);
		});

		return () => {
			elements.forEach((element) => {
				observer.current.unobserve(element);
			});
		};
	}, [visibleItems]);

	return (
		<div>
			{items.map((item, index) => (
				<div
					key={index}
					className={`item ${visibleItems.includes(index) ? 'visible' : ''}`}
					data-index={index}
					style={{
						transition: 'all 0.5s ease-in-out',
						transform: visibleItems.includes(index) ? 'scale(1)' : 'scale(0.2)',
						width: visibleItems.includes(index) ? '100%' : '100px',
					}}>
					<h2>
						{item.title} {index}
					</h2>
					<p>
						{item.description} {index}
					</p>
					<img
						src={'/people-justin.jpg'}
						className='item-image'
						alt={'item-image'}
					/>
				</div>
			))}
		</div>
	);
}

export default Test;
