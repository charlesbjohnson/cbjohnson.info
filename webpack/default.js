const Path = require('path');

const Config = require('./config');

const Default = {
	context: Config.CONTEXT,

	entry: [
		`./${Path.join(Config.INDIR, Config.FILES.HTML)}`,
		`./${Path.join(Config.INDIR, Config.FILES.JS)}`,
	],

	output: {
		filename: Config.FILES.JS,
		path: Path.join(Config.CONTEXT, Config.OUTDIR),
	},

	module: {
		rules: [Config.RULES.HTML, Config.RULES.CSS, Config.RULES.IMAGE],
	},

	plugins: [
		Config.PLUGINS.CLEAN.plugin({
			paths: [Path.join(Config.CONTEXT, Config.OUTDIR)],
		}),
	],
};

module.exports = Default;
