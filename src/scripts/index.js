const UniversalGA = require('universal-ga');
const WebfontLoader = require('webfontloader');

WebfontLoader.load({
	google: {
		families: ['Lato:300,400,700'],
	},
});

UniversalGA.initialize('UA-71605157-1', {
	debug: process.env.NODE_ENV !== 'production',
});

UniversalGA.pageview('/');
