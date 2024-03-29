function gerar(){
    var input = document.querySelector('#link').value 
    var api = 'https://chart.googleapis.com/chart?cht=qr&chs=500x500&chl='
    var conteudo = api + input
    document.querySelector('.imgqr').src = conteudo
}