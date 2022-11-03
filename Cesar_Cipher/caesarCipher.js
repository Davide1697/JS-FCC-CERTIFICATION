function rot13(str){
    const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let testoDecod="";
    console.log(str.length);
    
   

    for (let i=0; i<str.length; i++){
        if(alfabeto.indexOf(str[i]) ===-1){
            
            testoDecod+=str[i];

        }else if (alfabeto.indexOf(str[i]) >= 13) {

            testoDecod += alfabeto[alfabeto.indexOf(str[i])-13];
            // console.log("i : ", i, "testoDecod", testoDecod);

        } else if (alfabeto.indexOf(str[i]) < 13){

            testoDecod += alfabeto[alfabeto.indexOf(str[i])+13];
            console.log("i : ", i, "testoDecod", testoDecod, "lettere :", alfabeto.indexOf(str[i]));
        }
   } 
   return testoDecod;

}

console.log(rot13("SERR CVMMN!"));