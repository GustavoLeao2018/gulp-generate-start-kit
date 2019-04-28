var diretorios   = require('./task-diretorios');

// Tarefa de recarregar 
gulp.task('recarregar', () => {
    browserSync.reload();
});

// Tarefa de servidor
gulp.task('servidor', ['sass'], () => {
    // Roda no navegador pegando os arquivos na pasta src
    browserSync({server: diretorios.src}); 

    // Fica esperando e chamando as funções necessárias 
    gulp.watch([diretorios.htmlin, diretorios.jsin], ['recarregar']); // Regarrega o browser
    gulp.watch(diretorios.scssin, ['sass']); // Compila os arquivos sass
});