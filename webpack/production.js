const WebpackMerge = require('webpack-merge');

const Config = require('./config');
const Default = require('./default');

const Production = WebpackMerge.strategy({module: 'replace'})([
	Default,
	{
		mode: 'production',
		devtool: 'source-map',

		module: {
			rules: [
				WebpackMerge.strategy({use: 'replace'})([
					Config.RULES.HTML,
					{
						use: [
							...Config.RULES.HTML.use.slice(0, 2),
							WebpackMerge([
								Config.RULES.HTML.use[2],
								{options: {minimize: true}},
							]),
							...Config.RULES.HTML.use.slice(3),
						],
					},
				]),

				WebpackMerge.strategy({use: 'replace'})([
					Config.RULES.CSS,
					{
						use: [
							WebpackMerge([
								Config.RULES.CSS.use[0],
								{options: {name: '[path][name]-[hash].[ext]'}},
							]),
							...Config.RULES.CSS.use.slice(1, 2),
							WebpackMerge([
								Config.RULES.CSS.use[2],
								{options: {import: false, minimize: true, sourceMap: true}},
							]),
							...Config.RULES.CSS.use.slice(3),
						],
					},
				]),

				WebpackMerge.strategy({use: 'replace'})([
					Config.RULES.IMAGE,
					{
						use: [
							{
								loader: 'svg-url-loader',
								options: {
									noquotes: true,
								},
							},
						],
					},
				]),
			],
		},

		plugins: [Config.PLUGINS.COPY.plugin({patterns: ['CNAME']})],
	},
]);

module.exports = Production;
