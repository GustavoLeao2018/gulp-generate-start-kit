var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

// Tarefa de limpar dist
exports.module = importacoes.gulp.task('limpar', () => {
    return importacoes.del([diretorios.dist]);
})