function rot13(str){
    const alphabet ={
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
    };
// Inverto l'oggetooo alphabet, scambio valori con key 
    const reverseAlphabet = {
        ...Object.entries(alphabet).reduce( // object.entrie ritorna un array contenente tutte le chiavi e i valori dell'oggetto passato
            (acc, [key, values]) => ({...acc, [values] : key}), // con reduce passiamo il singolo elemento del vettore ma scambiando key e value
            {}
        )
    };

    const spreadedStr=[...str.toLowerCase()]; //sprededStr è un array contenente tutte le singole lettere della stringa str

    const codedStr=spreadedStr  //a questo punto andiamo a codificare la stringa passata
    .map((x) =>     // map genera un vettore basandosi sugli elementi di spreadedStr.
      alphabet[x]  // Quello che segue lo posso vedere come una serie di if else innestati 
        ? alphabet[x] <= 13  // la prima condizione è che x di alphabet sia un valore minore di 13
          ? reverseAlphabet[alphabet[x] + 13] // se è minore di 13 allora partiamo da x aggiungiamo 13 e prendiamo l'elemento a quella "posizione"
          : reverseAlphabet[alphabet[x] - 13] // altrimenti facciamo sottrae  13 
        : x //Se invece il valore della stringa non è presente in alphabet viene passato direttamente al nuovo vettore
    )
    .reduce((acc, str) => `${acc}${str}`); // con reduce si passa un solo elemento, in questo caso la stringa 

    return codedStr.toUpperCase();
}

console.log(rot13("a"));