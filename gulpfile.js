var gulp = require("gulp"),
  concat = require("gulp-concat"),
  sass = require("gulp-sass")(require("sass")),
  connect = require("gulp-connect");

gulp.task("styles", async function () {
  gulp
    .src("assets/css/**/*")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("main.css"))
    .pipe(gulp.dest("dist/css/"))
    .pipe(connect.reload());
});

gulp.task("html", async function () {
  gulp.src("index.html").pipe(connect.reload());
});

gulp.task("connect", async function () {
  connect.server({
    livereload: true,
  });
});

gulp.task("watch", async function () {
  gulp.watch("assets/css/**/*", gulp.series("styles"));
  gulp.watch("index.html", gulp.series("html"));
});

gulp.task("default", gulp.series("styles", "connect", "watch"));
