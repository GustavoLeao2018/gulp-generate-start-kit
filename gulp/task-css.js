// Tarefa de css
gulp.task('css', ['sass'], () => {
    return  es.merge([    
                    gulp.src([
                        'node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css'    
                    ]),
                    gulp.src(diretorios.cssin).pipe(cleanCss())
              ])
              .pipe(concat(diretorios.cssoutname))
              .pipe(gulp.dest(diretorios.cssoutsrc))
              .pipe(gulp.dest(diretorios.cssout));
});