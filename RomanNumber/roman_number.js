function convertToRoman(num) {
    let convertedNum='';
    let romanNum={
        M : 1000,
        CM : 900,
        D : 500,
        CD : 400,
        C : 100,
        XC : 90,
        L : 50,
        XL : 40,
        X : 10,
        IX : 9,
        V : 5,
        IV : 4,
        I : 1,
    };

    for ( let i in romanNum) {
        
        while(num>=romanNum[i]){
            convertedNum += i;
            
            num -=romanNum[i];
            
        }
    }

    return convertedNum;

    
}

console.log(convertToRoman(68));
