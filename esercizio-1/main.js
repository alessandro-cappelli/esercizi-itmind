// Scrivere una funzione che prenda come argomento un intero n
// - restituisca 'Fizz' se n è multiplo di 3
// - restituisca 'Buzz' se n è multiplo di 5
// - restituisca 'FizzBuzz' se n è sia multiplo di 3 che di 5
// - restituisca n se non è multiplo ne di 4 ne di 5


let number = parseInt(prompt('Inserisci un numero'))

function controllo(){
    if((number%3 == 0) && (number%5 == 0)){
        return "FizzBuzz"

    }else if(number%5 == 0){
        return "Buzz"

    }else if(number%3 == 0){
        return "Fizz"

    }else if((number%4 !=0) && (number%5 !=0)){
        return number
    }
}


document.writeln(controllo())

