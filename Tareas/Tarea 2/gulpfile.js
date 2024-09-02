const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');
const copy = require('gulp-copy');
const replace = require('gulp-replace');
const tsc = require('gulp-typescript');
const browserSync = require('browser-sync');

gulp.task('scripts', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            target: 'es6',
            isolatedModules: true
        }))
        .pipe(replace(/\sfrom '(\.\/[^']+)'/g, "from 'algo.js'"))
        .pipe(gulp.dest('dist/scripts'))
})

gulp.task('scripts:dev', () => {
    return gulp.src('src/scripts/**/*.ts')
        .pipe(tsc({
            noImplicitAny: true,
            target: 'es6',
            isolatedModules: true
        }))
        .pipe(replace(/\sfrom '(\.\/[^']+)'/g, "from 'algo.js'"))
        .pipe(gulp.dest('dist/scripts'))
})

gulp.task('styles', () => {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(cleanCss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('dist/styles'))
})

gulp.task('styles:dev', () => {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('dist/styles'))
})

gulp.task('assets', () => {
    return gulp.src('src/assets//**/*')
        .pipe(copy('dist', { prefix: 2 }));
})

gulp.task('html:dev', () => {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
})

gulp.task('html', () => {
    return gulp.src('src/*.html')
        .pipe((replace('styles.css', 'styles.min.css')))
        .pipe(gulp.dest('dist'));
})

gulp.task('dev', () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    });

    gulp.watch('src', gulp.series('default:dev')).on('change', browserSync.reload);
})

gulp.task('default', gulp.parallel('styles', 'scripts', 'assets', 'html'))

gulp.task('default:dev', gulp.series('styles:dev', 'scripts:dev', 'assets', 'html:dev'))