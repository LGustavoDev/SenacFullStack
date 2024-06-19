
var vlrMedia=0;
function mediaVetores(vetVetor) {
    
    for (var i = 0; i < vetVetor.lenght; i++) {
        vlrMedia += vetVetor[i];
    }
    vlrMedia = vlrMedia/vetVetor.lenght;
    return vlrMedia
}
var vetorTeste = [6, 7, 8, 9];

var vlrMedia = mediaVetores(vetorTeste);

console.log(vlrMedia);
