function checkCashRegister(price, cash, cid){

    let restoDaDare= Math.round((cash-price)*100);

    const totaleInCassa = cid.reduce((acc, value) => acc+value[1]*100, 0).toFixed(2);

    let reversedCid = cid.reverse();

    let restoCalcolato = [];

    const moneyDenom = {
        'ONE HUNDRED' : 10000,
        'TWENTY' : 2000,
        'TEN' : 1000,
        'FIVE' : 500,
        'ONE' : 100,
        'QUARTER' : 25,
        'DIME' : 10,
        'NICKEL' : 5,
        'PENNY' : 1,
        };

    if (restoDaDare > totaleInCassa){
        return {status: "INSUFFICIENT_FUNDS", change: []}
    } else if (restoDaDare === totaleInCassa) {
        return {status: "CLOSED", change: cid};
    } else {

        
        
        for ( let element of reversedCid) {
            //console.log(element[0])
            //console.log( 'prima del ciclo',element[1])
            element[1] = element[1]*100;
            //console.log('dopo lo scope del ciclo',element[1])
            let holder = [element[0], 0]
            //console.log(holder);
            while ( restoDaDare >= moneyDenom[element[0]] && element[1] > 0) {
                //console.log('monedydenom',moneyDenom[element[0]])
                //console.log(restoDaDare)
                restoDaDare -= moneyDenom[element[0]];
                element[1]-= moneyDenom[element[0]];
                holder [1] += moneyDenom[element[0]]/100;
                //console.log('restodadare', restoDaDare , 'element 0', element[0] ,'element1' ,element[1], 'moneydenom', moneyDenom[element[0]])
                
            }
            if (holder[1] > 0){
                restoCalcolato.push(holder)
            }
        }
        if (restoDaDare > 0) {
            return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        return {status: "OPEN", change: restoCalcolato};
    }

}
const cid=[["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
console.log(checkCashRegister(19.5, 20, cid))

