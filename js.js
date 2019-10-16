// Rozwiazanie 1
//     ["A","B","C"],
//     ["D","E","F"],
//     ["G","H","I"]
// Wykorzystuje wzor na wariacje bez powtorzeń dla punktów startu takich jak A C G I (podczas obliczeń biorę pod uwage punkt startu A oraz 4 elemntowy zbior 
// natomiast dla pozostałych  C G I wykorzystuje symetrie.
// Wyprowadziam wzór n-1 po (k-1) -3(7 po 2)-4(6 po 1)- (14*2). Rownanie odejmuje toksyczne przejscia np14*2 odpowiada abdf abcg abci abfd abgi abgc abic abig afig afgi afgc afcg afbh afhb


function countcodes(start, length){
    
    var resultPrim=0;
    var silniaPrim = 1;
    function silnia(l){
        for (var i = 1; i <= l; i++) {
        silniaPrim *= i;
       }
        return silniaPrim
    }
 
    if (start =="A" || start =="C" || start == "G" || start =="I"){
        let silniaNPrim =silnia(9-1)
        let lenghtminus1 = length-1
        let mianownikPrim = (8-lenghtminus1)
        // po kazdym uzyciu fn silnia musze wyzerować wartosc stad 1
        silniaPrim=1
        let mianownikPrimSilnia=silnia(mianownikPrim)
        silniaPrim=1
        let licznik2Prim= silnia(7)
        silniaPrim=1
        let mianownik2Prim=silnia(7-2)
        silniaPrim=1
        let licznik3Prim = silnia(6)
        silniaPrim=1
        let mianownik3Prim= silnia(6-1)

        return resultPrim= ((silniaNPrim/mianownikPrimSilnia)-(licznik2Prim/mianownik2Prim)*3-(licznik3Prim/mianownik3Prim)*4-28)
    }
}
    
    console.log(countcodes("A",4))

// Rozwiazanie 2
//Funcja ma zwrócić liczbę wszystkich możliwych do uzyskania kodów, dlatego wykorzystuje wzór matematyczny z kombinatoryki
//Wykorzystuje wzor wariacji bez powtórzeń 
// n po k = (n-1)!/(n-1−k)!) minus 1 poniewaz pierwsza liczba ze zbioru jest stala wiec wykorzystuje zbiór 8 elementow. 
// ponizsze rozwiazanie nie uwzględnia toksycznych przejsc oraz punktu startu 

function countcodes2(start, length){
var silniaN = 1;
var silniaK = 1;
var nMinusminus1=0;
var nMinusKSilnia=1;
let result =0;
    for (var i = 1; i <= 8; i++) {
    silniaN *= i;
    }
    // console.log(silniaN)
    for (var i = 1; i <= length; i++) {
        silniaK *= i;
    }
    // console.log(silniaK)
    nMinusminus1k = 9-1-length;
    // console.log(nMinusK)
    for (var i = 1; i <= nMinusminus1; i++) {
        nMinusKSilnia *= i;
    }
    //  console.log(nMinusKSilnia)

    result = silniaN/(silniaK*nMinusKSilnia)
    return result;

}
console.log(countcodes2(1,2))




// ****************PONIZEJ ZNAJDUJA SIE NOTATKI 



// var a = [
//     ["A","B","C"],
//     ["D","E","F"],
//     ["G","H","I"]
//   ]

//   getPossibleMoves= (letter, usedLetters) => {
//     //zależnie od litery przekazanej do tej funkcji np ze START zwraca liste mozliwych ruchów dla tej litery
 
 
//     let possibleMoves = [];
//    let used = possibleMoves.some((val) => usedLetters.indexOf(val)!==-1)
//     switch(letter) {
//         case "A":
//             possibleMoves.push("B", "D", "E")
//             const used = possibleMoves.some((val) => usedLetters.indexOf(val)!==-1)
//             var index = possibleMoves.indexOf(used);
//             possibleMoves.splice(index, 1)
//             return possibleMoves;
//         case "B":
//             possibleMoves.push("A", "C", "D", "F")
//             const used = possibleMoves.some((val) => usedLetters.indexOf(val)!==-1)
//             var index = possibleMoves.indexOf(used);
//             possibleMoves.splice(index, 1)
//             return possibleMoves;
//             //dalej dla innych
//     }
// }
//   countcodes = (start,length) => {
//       let usedLetters = []
//       usedLetters.push(start)
//       getPossibleMoves(start, usedLetters)
//   }
