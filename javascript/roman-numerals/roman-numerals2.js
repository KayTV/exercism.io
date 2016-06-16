function loop (num) {
  var array = [];
  for(var i = 0; i < 10; i++) {
    if(i === 1) {
      console.log("I");
    }else if(i === 5) {
      console.log("V");
    }else if(i === 10){
      console.log("X");
    }else if ( i < 5) {

    }else if (i > 5)
  }
}
/* need to have an empty array in which if each condition is met, then push up a string
then combine the sting at the end to get the roman numeral number

what do these numbers also have in common? lay out each of the main numbers from
arabic to roman. do a while loop to while >= arabic to roman, add to a string until
the condition is met.

var arabicToRoman = [
  {arabic: 1000, roman: 'M'},
  {arabic: 900, roman: 'CM'},
  {arabic: 500, roman: 'D'},
  {arabic: 400, roman: 'CD'},
  {arabic: 100, roman: 'C'},
  {arabic: 90, roman: 'XC'},
  {arabic: 50, roman: 'L'},
  {arabic: 40, roman: 'XL'},
  {arabic: 10, roman: 'X'},
  {arabic: 9, roman: 'IX'},
  {arabic: 5, roman: 'V'},
  {arabic: 4, roman: 'IV'},
  {arabic: 1, roman: 'I'}
];
