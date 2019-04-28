// Tarefa build
gulp.task('build', () => {
    runSequence('limpar', ['js', 'css', 'html', 'img']);
});