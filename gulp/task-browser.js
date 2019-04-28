var diretorios   = require('./task-diretorios').module;
var importacoes  = require('./task-importacoes').module;


// Tarefa de recarregar 
exports.module = importacoes.gulp.task('recarregar', () => {
    importacoes.browserSync.reload();
});

// Tarefa de servidor
exports.module = importacoes.gulp.task('servidor', ['sass'], () => {
    // Roda no navegador pegando os arquivos na pasta src
    importacoes.browserSync({server: diretorios.src}); 

    // Fica esperando e chamando as funções necessárias 
    importacoes.gulp.watch([diretorios.htmlin, diretorios.jsin], ['recarregar']); // Regarrega o browser
    importacoes.gulp.watch(diretorios.scssin, ['sass']); // Compila os arquivos sass
});

