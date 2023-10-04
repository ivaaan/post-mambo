/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		colors: {
			blue: '#0074EC',
			silver: '#E8EBF7',
			pink: '#E45978',
			orange: '#F97854',
			olive: '#8F943A',
			navy: '#0E3570',
		},
		fontFamily: {
			authenticSans60: ['"AUTHENTIC Sans 60"'],
			authenticSans90: ['"AUTHENTIC Sans 90"'],
			authenticSans130: ['"AUTHENTIC Sans 130"'],
			authenticSans150: ['"AUTHENTIC Sans 150"'],
			authenticSansCondensed60: ['"AUTHENTIC Sans Condensed 60"'],
			authenticSansCondensed90: ['"AUTHENTIC Sans Condensed 90"'],
			authenticSansCondensed130: ['"AUTHENTIC Sans Condensed 130"'],
			authenticSansCondensed150: ['"AUTHENTIC Sans Condensed 150"'],
			picnic: ['"PicNic-Regular"'],
		},
	},
	plugins: [],
};
