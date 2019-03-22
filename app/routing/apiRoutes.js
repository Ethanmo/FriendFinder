var path = require('path');
var friends = require("../data/friends")


module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends);
    })

    app.post("/api/friends", function(req, res){
        
        
        // req.body(object)
        console.log(req.body.scores);
        var matchedIndex = 0;
        var currentLowestDiff = compareScore(friends[0].scores, req.body.scores);
        for (var i = 1; i < friends.length; i++){
            var newDiff = compareScore(friends[i].scores, req.body.scores);
            if (newDiff < currentLowestDiff){
                currentLowestDiff = newDiff;
                matchedIndex = i;
            }
            
        }
        friends.push(req.body);
        console.log(friends[matchedIndex]);
        res.json(friends[matchedIndex]);


    })
}

function compareScore(arr1, arr2){
    var temp = 0;
    for (var i = 0; i < 10; i++){
        temp += Math.abs(arr1[i] - arr2[i]);
    }
    return temp;
}