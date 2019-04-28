var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

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