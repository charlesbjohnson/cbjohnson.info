const Path = require('path');
const PostHTMLAtomizer = require('posthtml-atomizer');

const Atomizer = require('./atomizer');

const PostHTML = exports;

const PLUGINS = {
	list(config) {
		return [
			PostHTMLAtomizer({
				path: Path.join(config.CONTEXT, config.INDIR, config.FILES.ATOMIC),
				atomizer: {
					config: Atomizer.CONFIG,
					options: Atomizer.OPTIONS,
				},
			}),
		];
	},
};

PostHTML.PLUGINS = PLUGINS;
