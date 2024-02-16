/**
 * function functionName(parameters){
 * function body
 * return
 * }
 * var returnValue = functionName(parameters value)
 */

function getAverage (sem1, sem2, sem3){
    const total = sem1 + sem2+ sem3;
    const average = total / 3;
    // console.log(average);
    return average;
}

// getAverage(60, 58, 59);

const sem1marks = 60;
const sem2marks = 58;
const sem3marks = 59;

var myAverage = getAverage(sem1marks, sem2marks, sem3marks);
console.log('my average so far: ', myAverage);