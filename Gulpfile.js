const gulp = require('gulp')
const del = require('del')

const gulpImageMin = require('gulp-imagemin')
const gulpAtomizer = require('gulp-atomizer')
const gulpConcat = require('gulp-concat')
const gulpSourcemaps = require('gulp-sourcemaps')
const gulpPostcss = require('gulp-postcss')

const postcssImport = require('postcss-import')
const autoprefixer = require('autoprefixer')
const postcssCustomSelectors = require('postcss-custom-selectors')
const postcssModularScale = require('postcss-modular-scale')
const postcssNested = require('postcss-nested')
const postcssCssVariables = require('postcss-css-variables')
const postcssStripUnits = require('postcss-strip-units')
const postcssCalc = require('postcss-calc')
const postcssMediaMinmax = require('postcss-media-minmax')
const postcssCustomMedia = require('postcss-custom-media')
const postcssResponsiveType = require('postcss-responsive-type')
const postcssColorFunction = require('postcss-color-function')
const postcssColorGray = require('postcss-color-gray')

const gulpUseref = require('gulp-useref')
const gulpIf = require('gulp-if')
const gulpMinifyCss = require('gulp-minify-css')
const gulpRev = require('gulp-rev')
const gulpRevReplace = require('gulp-rev-replace')

gulp.task('vendor:css', function () {
  return gulp
    .src(['node_modules/normalize.css/normalize.css'])
    .pipe(gulp.dest('vendor/stylesheets'))
})

gulp.task('vendor:images', function () {
  return gulp
    .src(['node_modules/octicons/svg/**/*'])
    .pipe(gulpImageMin())
    .pipe(gulp.dest('public/vendor/images'))
})

gulp.task('vendor', ['vendor:css', 'vendor:images'])

gulp.task('clean:vendor', function () {
  return del(['vendor/**/*', 'public/vendor/**/*'])
})

gulp.task('build:css:atomic', function () {
  return gulp
    .src(['src/**/*.html'])
    .pipe(gulpAtomizer('_atomic.css', {
      breakPoints: {
        small: '@media(--small-viewport)',
        medium: '@media(--medium-viewport)',
        maxmedium: '@media(--max-medium-viewport)',
        large: '@media(--large-viewport)'
      },

      custom: {
        'vr1n': 'calc(-1 * var(--line-height-ratio))rem',
        'vr-5': 'calc(0.5 * var(--line-height-ratio))rem',
        'vr-55': 'calc(0.55 * var(--line-height-ratio))rem',
        'vr1': 'calc(1 * var(--line-height-ratio))rem',
        'clr-black': 'var(--black)',
        'clr-lightgray': 'var(--light-gray)'
      }
    }))
    .pipe(gulp.dest('src/stylesheets'))
})

gulp.task('build:css', ['vendor:css', 'build:css:atomic'], function () {
  return gulp
    .src(['src/stylesheets/style.css'])
    .pipe(gulpSourcemaps.init())
    .pipe(gulpPostcss([
      postcssImport(),
      autoprefixer(),
      postcssCustomSelectors(),
      postcssModularScale(),
      postcssNested,
      postcssCssVariables(),
      postcssStripUnits,
      postcssCalc,
      postcssMediaMinmax(),
      postcssCustomMedia(),
      postcssResponsiveType(),
      postcssColorFunction(),
      postcssColorGray()
    ]))
    .pipe(gulpConcat('style.css'))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('clean:css', function () {
  return del(['public/stylesheets/**/*'])
})

gulp.task('build:html', ['vendor:images'], function () {
  return gulp
    .src(['src/**/*.html'])
    .pipe(gulp.dest('public'))
})

gulp.task('clean:html', function () {
  return del(['public/**/*.html'])
})

gulp.task('build', ['build:html', 'build:css'])

gulp.task('clean', ['clean:vendor', 'clean:html', 'clean:css'])

gulp.task('watch:html', function () {
  gulp.watch('src/**/*.html', ['clean:html', 'build:html'])
})

gulp.task('watch:css', function () {
  gulp.watch('src/**/*.{html,css}', ['clean:css', 'build:css'])
})

gulp.task('watch', ['watch:html', 'watch:css'])

gulp.task('dist', ['build'], function () {
  return gulp
    .src(['public/**/*.html'])
    .pipe(gulpUseref())
    .pipe(gulpIf('*.css', gulpMinifyCss()))
    .pipe(gulpIf('!*.html', gulpRev()))
    .pipe(gulpRevReplace())
    .pipe(gulp.dest('public'))
})
