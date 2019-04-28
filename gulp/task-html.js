

// Tarefa html
gulp.task('html', ['js', 'css'], () => {
    return es.merge([
            gulp.src(diretorios.htmlin)
                .pipe(htmlReplace({
                    'css': diretorios.cssreplaceout,
                    'js': diretorios.jsreplaceout
                }))
                .pipe(gulp.dest(diretorios.dist)),
            gulp.src(diretorios.htmlviewin)
               .pipe(htmlReplace({
                    'css': diretorios.cssreplaceoutview,
                    'js': diretorios.jsreplaceoutview
               }))
               .pipe(gulp.dest(diretorios.distview))
            ])
            .pipe(htmlMin({
                sortAttributes: true,
                sortClassName: true,
                collapseWhitespace: true
            }));
});