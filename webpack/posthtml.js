const Path = require('path');
const PostHTMLAtomizer = require('posthtml-atomizer');
const PostHTMLModules = require('posthtml-modules');

const Atomizer = require('./atomizer');

const PostHTML = exports;

const PLUGINS = {
	list(config) {
		return [
			PostHTMLModules({
				root: Path.join(config.CONTEXT, config.INDIR),
				from: Path.join(config.CONTEXT, config.INDIR, config.FILES.HTML),
			}),
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
