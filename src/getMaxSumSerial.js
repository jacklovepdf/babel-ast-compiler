
function getMaxSerial(arr){
    let start = 0, N = arr.length, len = 1, results = {sum: arr[0], start:0, len:1}, tempMax;

    while(start < N){
        if(arr[start] > 0){
            len  = 1;
            while(len <= N-start){
                if(arr[start+len-1]>0){
                    tempMax = sum(arr, start, len);
                    if(tempMax > results.sum){
                        results = {
                            sum: tempMax,
                            start: start,
                            len: len
                        }
                    }
                }
                len++;
            }
        }
        start++
    }
    return results;
}

function sum(arr, start, len){
    let s = 0;
    for(let i=start; i<len+start; i++){
        s +=arr[i]
    }
    return s;
}


function getSumMap(arr) {
    let start = 0, end = 0;
    let sumMap = {};
    
    end = start;
    for (let i=start; i < arr.length; i++) {
       if (arr[i] <=0) {
           i++;
           continue;
       } else {
           for(let j = end + 1; j < arr.length; j++) {
               if (arr[j] > 0) {
                   if (sumMap[i] === undefined) {
                       sumMap[i] = {};
                   }
                   sumMap[i][j] = getSum(arr, i, j);
               }
           }
       }
    }
    return sumMap;
}
function subSeqMax(sumMap) {
    let start = Object.keys(sumMap)[0], 
       end = Object.keys(sumMap[start])[0],
       max = sumMap[start][end];

    for(let tmpStart in sumMap) {
        for (let tmpEnd in sumMap[tmpStart]) {
           let sum = sumMap[tmpStart][tmpEnd];
           if (sum > max) {
               start = tmpStart;
               end = tmpEnd;
               max = sum;
           }
        }
    }
    return {start, end, max}
}
function getSum(arr, start, end) {
   const range = arr.slice(start, end + 1);
   return range.reduce((a, b) => a + b, 0);
}

console.log()

var arr = [];
for(let i=0; i<1000; i++){
    arr.push(Math.random())
}

console.time("getMaxSerial-jack");
var res = getMaxSerial(arr);
console.log("res====>", res);
console.timeEnd("getMaxSerial-jack")

console.time("getMaxSerial-yusha");
var res1 = subSeqMax(getSumMap(arr))
console.log("res1====>", res1);
console.timeEnd("getMaxSerial-yusha")