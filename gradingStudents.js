function gradingStudents(grades) {
   
    var res = [];
    for(var i=0;i<grades.length;i++){
        var item = getRoundedGrade(grades[i]);

        if(grades[i] < 38){
            res.push(grades[i]);
        }
        else if(item-grades[i] < 3 ){
            res.push(item);
        }
        else if(item-grades[i] === 3){
            res.push(grades[i]);
        }
    }
    return res;
}

function getRoundedGrade (score){
    return score + (5 - score % 5);
}

var res = gradingStudents([73,
    67,
    38,
    33,
    35
]);
    console.log(res);