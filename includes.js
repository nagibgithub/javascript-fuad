const jatioSonggit = "amar sonar bangla, ami tomay vaLOBasi, chirodin tomar akash tomar batash amar prane bajay basi";

const jatioSonggitLowerCash = jatioSonggit.toLowerCase();

let findWord = "valobasi";

const doesExist = jatioSonggitLowerCash.includes(findWord);
console.log(doesExist, jatioSonggitLowerCash.indexOf(findWord));