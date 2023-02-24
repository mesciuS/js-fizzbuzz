
// creo una variabile da assegnare al genitore
let containerEl = document.getElementById("container");

// creo la funzione con for
for (let i = 1; i <= 100; i++) {

    // creo un elemento html all'interno del container
    let newEl = document.createElement("div");

    newEl.innerHTML = i;

    containerEl.append(newEl);

    // creo IF per i multipli di 3
    if (i % 3 == 0) {
        newEl.innerHTML = "fizz";
    }

    // creo IF per multipli di 5
    if (i % 5 == 0) {
        newEl.innerHTML = "buzz";
    }

    // creo IF per multipli di entrambi
    if (i % 3 == 0 && i % 5 == 0) {
        newEl.innerHTML = "fizzbuzz"
    }
} 

