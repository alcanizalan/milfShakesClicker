import {thousandSuffixes} from "./suffixes"

export function formatCost(cost: number, suffixes: Array<string>) {
    let digits: number = 0;

    while (cost >= 1000){
        cost = cost / 1000;
        digits = digits + 1;
    } 
    const suffix: string = suffixes[digits];
    if (digits>=1){
      cost = Math.floor(cost*100)/100
    }else{
      cost = Math.floor(cost)
    }
    
    return `${cost}${suffix}`;
}