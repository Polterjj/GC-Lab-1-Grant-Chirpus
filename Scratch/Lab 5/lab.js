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

// 6.

function findSubmissionByName (array, name) {
    
}






























function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
    console.log (submissions)

}
deleteSubmissionByIndex(submissions, 2)

function deleteSubmissionByName(array, name){


}