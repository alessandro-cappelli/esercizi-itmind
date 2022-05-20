// Scrivere una funzione 
// che prenda come argomento una stringa n e restituisca true o false, 
// se la stringa è palidroma


let parola = prompt('inserisci una parola');
let parolaDivisa = parola.split('');

let parolaInvertita = [];

function controllo(){
    for(let i=parolaDivisa.length -1; i>=0; i--){
        parolaInvertita.push(parolaDivisa[i]);
    }

    console.log(parolaDivisa, parolaInvertita);


    if(parolaDivisa.toString()==parolaInvertita.toString()){
        return true

    }else{
        return false
    }
}


document.writeln(controllo());
