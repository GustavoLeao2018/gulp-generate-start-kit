var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;

// Tarefa Base(default)
exports.module = importacoes.gulp.task('default', ['servidor']);