const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Path = require('path');
const WebpackMerge = require('webpack-merge');

const PostCSS = require('./postcss');
const PostHTML = require('./posthtml');

const Config = exports;

Config.CONTEXT = Path.resolve(__dirname, '../');

Config.FILES = {
	ATOMIC: 'stylesheets/partials/atomic.css',
	CSS: 'stylesheets/style.css',
	DOMAIN: 'CNAME',
	HTML: 'index.html',
	JS: 'scripts/index.js',
};

Config.INDIR = 'src';
Config.OUTDIR = 'dist';

Config.RULES = {
	HTML: {
		test: /\.html$/,
		use: [
			{
				loader: 'file-loader',
				options: {name: '[name].[ext]'},
			},
			{
				loader: 'extract-loader',
			},
			{
				loader: 'html-loader',
				options: {
					attrs: ['img:src', 'link:href'],
				},
			},
			{
				loader: 'posthtml-loader',
				options: {
					ident: 'posthtml',
					plugins: PostHTML.PLUGINS.list(Config),
				},
			},
		],
	},

	CSS: {
		test: /\.css$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					context: Path.join(Config.CONTEXT, Config.INDIR),
				},
			},
			{
				loader: 'extract-loader',
			},
			{
				loader: 'css-loader',
			},
			{
				loader: 'postcss-loader',
				options: {
					ident: 'postcss',
					plugins: PostCSS.PLUGINS.list(Config),
				},
			},
		],
	},

	IMAGE: {
		test: /\.svg$/,
		use: [
			{
				loader: 'file-loader',
				options: {
					name: 'assets/images/[name].[ext]',
					context: Path.join(Config.CONTEXT, Config.INDIR),
				},
			},
		],
	},
};

Config.PLUGINS = {
	CLEAN: {
		plugin({paths, options}) {
			return new CleanWebpackPlugin(
				paths,
				WebpackMerge([{root: Config.CONTEXT}, options]),
			);
		},
	},

	COPY: {
		plugin({patterns, options}) {
			return new CopyWebpackPlugin(
				patterns,
				WebpackMerge([
					{context: Path.join(Config.CONTEXT, Config.INDIR)},
					options,
				]),
			);
		},
	},
};
