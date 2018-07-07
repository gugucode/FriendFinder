var path = require("path");
var friends = require(path.join(__dirname,"../data","friends.js"))

// find friend who has the smallest difference of scores
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

        if(min_diff > diff){
            min_diff = diff;
            closest_friend = element;
        }
    });

    return closest_friend;
}

// export the get and post rounters
module.exports = function(app){
    app.get("/api/friends",function(req,res){
        // send all data in friends.js
        res.setHeader('Content-Type', 'text/plain')
        res.end(JSON.stringify(friends));
    })

    app.post("/api/friends",function(req,res){
        var new_friend = req.body;
        var closest_friend = findClosestFriend(new_friend);
        friends.push(new_friend);
        res.send(closest_friend)   
    })
}


