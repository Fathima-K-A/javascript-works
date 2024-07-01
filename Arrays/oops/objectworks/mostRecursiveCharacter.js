var text="pneumonoultramicroscopicsilicovolcanoconiosis"

wc={}

// for(let w of text){

//     if (w in wc){
//         wc[w]+=1;
//     }
//     else{
//         wc[w]=1;
//     }
// }
// console.log(wc);


text.split("").map(ch=>ch in wc?wc[ch]+=1:wc[ch]=1)
console.log(wc);

var nestedArray=Object.entries(wc)
// console.log(nestedArray);

var mostRecChar=nestedArray.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)

console.log(mostRecChar);