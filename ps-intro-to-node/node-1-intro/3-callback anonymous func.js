var maxTime = 1000;

var evenDoubler = function(v, callback){
    var waitTime = Math.floor(Math.random()*(maxTime+1));
    
    if(v%2){
        setTimeout(function(){
            callback(new Error("Odd input"));
        },waitTime);
    }
    else {
        setTimeout(function(){
         callback(false, v*2, waitTime);
        },waitTime);
    }
    
};



evenDoubler(2,function(err, results, time){
        if(err){
            console.log("error - " + err.message);
        } 
        else {
            console.log("The results are: " + results + " in "+ time +" ms")
        } 
    }
);

console.log("£*****************£");