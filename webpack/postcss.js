const Autoprefixer = require('autoprefixer');
const CSSMQPacker = require('css-mqpacker');
const PostCSSCalc = require('postcss-calc');
const PostCSSColorFunction = require('postcss-color-function');
const PostCSSColorGray = require('postcss-color-gray');
const PostCSSCustomMedia = require('postcss-custom-media');
const PostCSSCustomSelectors = require('postcss-custom-selectors');
const PostCSSImport = require('postcss-import');
const PostCSSMediaMinMax = require('postcss-media-minmax');
const PostCSSMergeRules = require('postcss-merge-rules');
const PostCSSModularScale = require('postcss-modular-scale');
const PostCSSNesting = require('postcss-nesting');
const PostCSSNormalize = require('postcss-normalize');
const PostCSSResponsiveType = require('postcss-responsive-type');
const PostCSSStripUnits = require('postcss-strip-units');
const PostCSSVariables = require('postcss-css-variables');

const PostCSS = exports;

const PLUGINS = {
	list() {
		return [
			PostCSSImport(),
			PostCSSNormalize(),

			PostCSSNesting(),
			PostCSSCustomSelectors(),
			PostCSSCustomMedia(),

			PostCSSModularScale(),
			PostCSSVariables(),
			PostCSSStripUnits(),
			PostCSSCalc(),
			PostCSSMediaMinMax(),

			PostCSSResponsiveType(),

			PostCSSColorFunction(),
			PostCSSColorGray(),

			CSSMQPacker(),
			PostCSSMergeRules(),
			Autoprefixer(),
		];
	},
};

PostCSS.PLUGINS = PLUGINS;
