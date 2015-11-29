var maxTime = 1000;

var evenDoubler = function(v, callback){
    var time = Math.floor(Math.random()*(maxTime+1));
    
    if(v%2){
        callback(new Error("Odd input"), 0, time);
    }
    else {
        callback(false, v*2, time);
    }
    
};

var handleResults = function(err, results, time){
    if(err){
        console.log("error - " + err.message);
    } 
    else {
        console.log("The results are: " + results + " in "+ time +" ms")
    } 
};

evenDoubler(1,handleResults);

console.log("*****************");