// Tarefa img
gulp.task('img', () => {
    return gulp.src(diretorios.imgin)
               .pipe(changed(diretorios.imgout))
               .pipe(imagemin())
               .pipe(gulp.dest(diretorios.imgoutsrc))
               .pipe(gulp.dest(diretorios.imgout));
});
