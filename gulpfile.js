const gulp = require("gulp");
const sass = require("gulp-sass"); //npm install gulp-sass -D
const sourcemaps = require("gulp-sourcemaps"); //npm install gulp-sourcemaps -D
const connect = require("gulp-connect"); //npm install gulp-connect -D
const babel = require("gulp-babel"); //npm install gulp-babel -D

gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true //实时更新 修改页面后 自动刷新 
    });
    done();
})

gulp.task("html", done => {
    gulp.src("res/html/*.html")
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload()); //自动刷新页面
    done();
});

gulp.task("sass", done => {
    gulp.src("res/sass/*.scss")
        .pipe(sourcemaps.init()) //启用sourcemaps功能
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
    done();
});

gulp.task("libs", done => {
    gulp.src("res/libs/**")
        .pipe(gulp.dest("dist/libs"));
    done();
});

//ES6 ->  ES5
gulp.task("babel", done => {
    gulp.src("res/js/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    done();
});

gulp.task("imgsrc", done => {
    gulp.src("res/img/**")
        .pipe(gulp.dest("dist/img"));
    done();
});

gulp.task("watch", done => {
    // 实时监听sass和html文件的变化，让源文件和dist目录的文件自动保持一致
    gulp.watch("res/html/*.html", gulp.series("html"));
    gulp.watch("res/sass/*.scss", gulp.series("sass"));
    gulp.watch("res/libs", gulp.series("libs"));
    gulp.watch("res/js/*.js", gulp.series("babel"));
    done();
});

gulp.task("default", gulp.parallel("server", "watch"));