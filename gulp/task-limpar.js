// Tarefa de limpar dist
gulp.task('limpar', () => {
    return del([diretorios.dist]);
});