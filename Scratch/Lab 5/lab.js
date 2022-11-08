// 1.

let submissions = [{
    name: "Jane",
    score: 95, 
    date: 2020-01-24,
    passed: true,
}, {
    name: "Joe",
    score: 77, 
    date: 2018-05-14,
    passed: true,
}, {
    name: "Jack",
    score: 59,
    date: 2019-07-05,
    passed: false,
}, {
    name: "Jill",
    score: 88,
    date: 2020-04-22,
    passed: true,
}]

// 2.

function addSubmission (array, newName, newScore, newDate) {
    let newSubmission = {
        name: newName,
        score: newScore,
        date: newDate,
    };

    newSubmission.score >= 60
    ? (newSubmission.passed = true) : (newSubmission.passed = false);

    array.push(newSubmission);
    console.log(array);

}

addSubmission(submissions, "Sally", 48, 2020 - 01 - 01);

// 3.

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
    console.log(array);
}

deleteSubmissionByIndex(submissions, 4)

// 4.

function deleteSubmissionByName(array, findName) {
    let exists = array.findIndex(function(item){
        return item.name == findName
    });
    console.log(exists);
    if (exists === -1){
        console.log("Name Does Not Exist");
    } else {
        deleteSubmissionByIndex(array, exists)
    }
}

deleteSubmissionByName(submissions, "dandy")

// 5.

function editSubmission (array, index, newScore){
    array[index].score = newScore;
    if (array[index].score >= 60){
        array[index].passed = true;
        console.log(array);
    } else {
        array[index].passed = false;
        console.log(array);
    }
}

editSubmission(submissions, 1, 55);

function editsubmissions(array,index,score) {
    return array[index].score = score;
}

// 6
const findSubmissionByName = function(array, name) {
    return array.find( person => person.name === name )
}

// 7
const findLowestScore = function(array) {
    let min = array[0].score
    array.forEach( item =>
    {
        if(item.score < min) 
        {
            min=item.score
        }
    })
    return  array.find( item => item.score == min ? item : null)    
}

// 8
const findAverageScore = function(array) {
    let sum = 0
    for (let item of array) {
        sum += item.score;
    }
    return sum/array.length;
}

// 9
const filterPassing = function(array) {
    return array.filter( item => item.passed == true);
}

// 10
const filter90andAbove = function(array) {
    return array.filter( item => item.score >= 90);
}

export {
    editsubmissions,
    findSubmissionByName,
    findLowestScore,
    findAverageScore,
    filterPassing,
    filter90andAbove,
}