const jatioSonggit = "amar sonar bangla, ami tomay vaLOBasi, chirodin tomar akash tomar batash amar prane bajay basi";

let a = jatioSonggit.split(" ");
let b = jatioSonggit.split(",");

console.log(a);
console.log(b);

var arrN = [11,22,33,44,55,66,77,88,99,100,111,222,333,444];
// console.log("1.", "arrN", arrN);

// var sliceN = arrN.slice(2, 7);

// console.log("2.", "arrN", arrN);
// console.log("2.", "sliceN", sliceN);

// var spliceN = arrN.splice(2, 7);

// console.log("3.", "arrN", arrN);
// console.log("3.", "sliceN", sliceN);
// console.log("3.", "spliceN", spliceN);

var sliceNM = arrN.splice(5, 0, 9999, 1111, 2222);
console.log(sliceNM);
console.log(arrN);
