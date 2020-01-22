let gulp = require("gulp");
gulp.task("pranie", function(done) {
    console.log("robię pranie");
    done();
});
let sourcemaps = require('gulp-sourcemaps');
let sass = require("gulp-sass");
gulp.task("sass", function() {
  return gulp.src("scss/main.scss")
      .pipe(sourcemaps.init())
	  .pipe(sass({
      outputStyle:'expanded'
  //* nested,
  //* expanded,
  //* compact,
  //* compressed.
	  }).on("error", sass.logError))
      .pipe(sourcemaps.write())
       .pipe(gulp.dest('css'))
});
gulp.task("watch", function(){
  gulp.watch("scss/**/*.scss", gulp.series("sass"));
});

gulp.task("default", gulp.series("sass","watch"));

// compressed tylko dla przeglądarki, 
//komentarze:

