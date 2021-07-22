// function superbowlWin(record) {
//    if (find(result === "W"))
//    return superbowlWin;
// // }
// function superbowlWin(record){
//     let theYear = record.find(record.result);
//     if (theYear === "W") {
//     return theYear;
// }}
// console.log(theYear);

// function superbowlWin(inYear) {
//     return inYear.year === "W";
// }
// console.log(record.find(superbowlWin));

const superbowlWin = record.find( ({ year }) => year === 'W' );
console.log(superbowlWin)
// = record.find((record) => record.result === "W");
// return superbowlWin.year;

// function superbowlWin(record) {
//     let winYear = record.find(result => result === "W");
//     return winYear;

// function superbowlWin(myArray) {
//     let yearWin = myArray.find(element => element.result === "W")
//       return yearWin.year
//   }
//   superbowlWin(record)