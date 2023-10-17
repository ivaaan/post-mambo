/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';

const LazyImage = ({ src, alt, loaderIcon }) => {
	const [imgSrc, setImgSrc] = useState(
		loaderIcon
			? loaderIcon
			: 'https://www.eliananunes.com/images/lazy_loader.gif'
	);
	const imageRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const { isIntersecting } = entry;
					if (isIntersecting) {
						setImgSrc(src);
						observer.unobserve(imageRef.current);
					}
				});
			},
			{
				threshold: 0.5,
			}
		);
		observer.observe(imageRef.current);
	}, [src]);

	return (
		<img
			ref={imageRef}
			src={src}
			alt={alt}
			style={{
				transform: imgSrc === src ? 'scale(1)' : 'scale(0)',
				transition: 'transform 0.5s ease-in-out',
			}}
		/>
	);
};

const Test2 = () => {
	const images = [
		{ src: 'https://picsum.photos/id/736/300/300', alt: 'title1' },
		{ src: 'https://picsum.photos/id/730/300/300', alt: 'title2' },
		{ src: 'https://picsum.photos/id/635/300/300', alt: 'title3' },
		{ src: 'https://picsum.photos/id/536/300/300', alt: 'title4' },
		{ src: 'https://picsum.photos/id/436/300/300', alt: 'title5' },
		{ src: 'https://picsum.photos/id/336/300/300', alt: 'title6' },
		{ src: 'https://picsum.photos/id/236/300/300', alt: 'title7' },
		{ src: 'https://picsum.photos/id/136/300/300', alt: 'title8' },
		{ src: 'https://picsum.photos/id/74/300/300', alt: 'title9' },
	];

	return (
		<div className='container'>
			<h1>Scroll down to see images</h1>
			<h4>
				This component has been created using <em>intersection observer</em>
			</h4>
			{images.map((el, i) => (
				<LazyImage
					key={i}
					alt={el.alt}
					src={el.src}
					loaderIcon='https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif'
				/>
			))}
		</div>
	);
};

export default Test2;
