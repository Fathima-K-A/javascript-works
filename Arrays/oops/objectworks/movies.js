var films=[

]
// /movie with highest run time

var highestRunTimeMovie=films.reduce((m1,m2)=>Number(m1.runtime) > Number(m2.runtime)?m1:m2)

console.log(highestRunTimeMovie);