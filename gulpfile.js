var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var exec = require('child_process').exec;
var jsx = require('gulp-jsx');

var distfolder = 'dist';

gulp.task('clean', function () {
    return gulp.src([
            distfolder+'/*'
        ], {read: false})
        .pipe(clean());
});

gulp.task('scss', function() {
    return gulp.src(['scss/*.scss',
            'scss/components/*.scss',
            'scss/pages/*.scss'
        ])
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest(distfolder+'/css'))
});

gulp.task('scripts', function() {
    return gulp.src([
            'src/global.js',
            'src/components/*.js',
            'src/pages/*.js',
            'src/router.js'
        ])
        .pipe(jsx({factory: 'React.createElement'}))
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distfolder+'/js'));
});

gulp.task('copy', function () {
    gulp.src('*.html')
        .pipe(gulp.dest(distfolder+'/'));
    gulp.src('img/*')
        .pipe(gulp.dest(distfolder+'/img/'));
    gulp.src('libs/**/*')
        .pipe(gulp.dest(distfolder+'/libs/'));
});

gulp.task('watch', function() {
    gulp.watch([
        'scss/**/*.scss',
        'src/**/*.js',
        '**/*.html'
    ], ['build']);
});

gulp.task('build', ['scss', 'scripts', 'copy']);

gulp.task('deploy', function (cb) {
    exec('aws s3 sync dist/ s3://YOUR-BUCKET-NAME-HERE/ --delete --profile YOUR-AWS-PROFILE-NAME-HERE',
        function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
});
