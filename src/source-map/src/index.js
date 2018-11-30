import {add} from './add';
import {subtract} from './subtract';

function sum(a,b,c,d){
    let addNum =  add(a, b);
    let addMin = subtract(c,d);
    return addNum + addMin;
}

sum(1,2,3,4);