const kalakalagan = "kala kala sada kala fuad ziad nagib fuad adib mahfuz mahfuz nagib mahmud farhana yeasmin asha farhana";
let fuad = kalakalagan.split(" ");
// console.log(fuad);

function removeDuplicate(fuad) {
    let newArr = [];
    for (let i = 0; i < fuad.length; i++) {
        const element = fuad[i];
        if (newArr.includes(element) === false) {
            newArr.push(element);
        }
    }
    return newArr;
}

console.log(removeDuplicate(fuad));