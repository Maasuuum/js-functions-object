// function bringSingara(money){
//     console.log('mama singara den');
//     console.log(money) /**work as a variable name that will call if the value will declare in bringSingara(). Used no quotation because that's value will be a number type */
// }
// bringSingara(100);

function bringSingara(money){
    console.log('taka disen: ', money);
    console.log('ei nen singara');
}
var taka = 300;
// bringSingara(taka);

// multiple parameters
function add(num1, num2){
    console.log('going to add:', num1, num2);
}
// add(125, 96);

function sum(a, b, c, d, e){
    console.log(a, b, c, d, e);
    var sum = a + b + c + d + e;
    console.log('Total is: ', sum);
}
sum(10, 5, 18, 17, 39);