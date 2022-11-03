function palindrome(str) {
  
    let regex=/\W|_/g; //crep una regex per matchare tutti gli elementti non alphanumerici, inclusi il _ e |
  
    /*in una nuova stringa copio la stirnga senza gli elementi specificati nella regex e porto tutto a caretteri minusoli*/
    let newStr=str.replace(regex,"").toLowerCase();
    console.log(typeof(newStr));
  
    /*converto la stringa in un array, lo inverto, e lo riconverto di nuovo in array*/
    let check=newStr.split("").reverse().join("");
    console.log(check);
  
    /*eseguo il confronto*/
    if (newStr===check) return true
    return false
  }
  
  console.log(palindrome("_eye"));