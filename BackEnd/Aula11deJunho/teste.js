

function mediaVetores(VetVetor) {
    for (var i = 0; i < VetVetor.lenght; i++) {
        vlrMedia += VetVetor[i];
    }
    vlrMedia = vlrMedia/VetVetor.lenght;
    return vlrMedia
}
var VetorTeste = [6, 7, 8, 9];

var vlrMedia = mediaVetores(VetorTeste);

console.log(vlrMedia);
