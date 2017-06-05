// funçao que retorna a data atual
$scope.dataAtual = function () {
    var data = new Date();
    var dia = data.getDate();
    var mes = data.getMonth();
    var ano = data.getFullYear();
    
    return [dia, mes, ano].join('/');
}
