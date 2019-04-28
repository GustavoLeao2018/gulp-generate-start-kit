var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

// Tarefa img
exports.module = importacoes.gulp.task('img', () => {
    return importacoes.gulp.src(diretorios.imgin)
               .pipe(importacoes.changed(diretorios.imgout))
               .pipe(importacoes.imagemin())
               .pipe(importacoes.gulp.dest(diretorios.imgoutsrc))
               .pipe(importacoes.gulp.dest(diretorios.imgout));
});
