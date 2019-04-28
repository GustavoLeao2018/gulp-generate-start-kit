var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;
var limpar = require('./task-limpar').module;
var css = require('./task-css').module;
var html = require('./task-html').module;

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

// Tarefa de css
exports.module = importacoes.gulp.task('css', ['sass'], () => {
    return  importacoes.es.merge([    
                    importacoes.gulp.src([
                        'node_modules/bootstrap/dist/css/bootstrap-reboot.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
                        'node_modules/bootstrap/dist/css/bootstrap.min.css'    
                    ]),
                    importacoes.gulp.src(diretorios.cssin).pipe(importacoes.cleanCss())
              ])
              .pipe(importacoes.concat(diretorios.cssoutname))
              .pipe(importacoes.gulp.dest(diretorios.cssoutsrc))
              .pipe(importacoes.gulp.dest(diretorios.cssout));
});

// Tarefa de limpar dist
exports.module = importacoes.gulp.task('limpar', () => {
    return importacoes.del([diretorios.dist]);
})

// Tarefa de build
exports.module = importacoes.gulp.task('build', () => {
    importacoes.runSequence('limpar', ['js', 'css', 'html', 'img']);
});