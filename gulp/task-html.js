var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

// Tarefa html
exports.module = importacoes.gulp.task('html', ['js', 'css'], () => {
    return importacoes.es.merge([
            importacoes.gulp.src(diretorios.htmlin)
                .pipe(importacoes.htmlReplace({
                    'css': diretorios.cssreplaceout,
                    'js': diretorios.jsreplaceout
                }))
                .pipe(importacoes.gulp.dest(diretorios.dist)),
            importacoes.gulp.src(diretorios.htmlviewin)
               .pipe(importacoes.htmlReplace({
                    'css': diretorios.cssreplaceoutview,
                    'js': diretorios.jsreplaceoutview
               }))
               .pipe(importacoes.gulp.dest(diretorios.distview))
            ])
            .pipe(importacoes.htmlMin({
                sortAttributes: true,
                sortClassName: true,
                collapseWhitespace: true
            }));
});