const Atomizer = exports;

const CONFIG = {
	breakPoints: {
		small: '@media (--small-viewport)',
		medium: '@media (--medium-viewport)',
		maxmedium: '@media (--max-medium-viewport)',
		large: '@media (--large-viewport)',
		print: '@media print',
	},

	custom: {
		vr1n: 'calc(-1rem * var(--line-height-ratio))',
		'vr-5': 'calc(0.5rem * var(--line-height-ratio))',
		'vr-55': 'calc(0.55rem * var(--line-height-ratio))',
		vr1: 'calc(1rem * var(--line-height-ratio))',
		'clr-black': 'var(--black)',
		'clr-lightgray': 'var(--light-gray)',
	},
};

const OPTIONS = {
	banner: '/* stylelint-disable */\n\n',
};

Atomizer.CONFIG = CONFIG;
Atomizer.OPTIONS = OPTIONS;
