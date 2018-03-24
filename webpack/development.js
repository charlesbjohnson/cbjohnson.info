const WebpackMerge = require('webpack-merge');

const Config = require('./config');
const Default = require('./default');

const Development = WebpackMerge([
	Default,
	{
		mode: 'development',
		devtool: 'inline-source-map',

		serve: {
			content: Config.OUTDIR,
			hot: false,
		},
	},
]);

module.exports = Development;
