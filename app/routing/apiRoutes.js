var path = require("path");
var friends = require(path.join(__dirname,"../data","friends.js"))

function findClosestFriend(my_data){
    var min_diff = Infinity;
    var closest_friend;
    friends.forEach(element => {
        var friend_score = element.scores;
        var my_score = my_data.scores;

        var diff = 0;
        for(var i = 0; i < element.scores.length; i++){
            diff += Math.abs(friend_score[i] - my_score[i]);
        }
        console.log("diff=",diff)
        if(min_diff > diff){
            min_diff = diff;
            closest_friend = element;
        }
    });

    return closest_friend;
}

module.exports = function(app){
    app.get("/api/friends",function(req,res){
        res.setHeader('Content-Type', 'text/plain')
        res.end(JSON.stringify(friends));
    })

    app.post("/api/friends",function(req,res){
        var new_friend = req.body;

        console.log(new_friend);
        var closest_friend = findClosestFriend(new_friend);
        friends.push(new_friend);
        res.send(closest_friend)
        
    })
}


