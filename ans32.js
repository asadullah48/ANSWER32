var perviousUsers = ["user1", "user2", "user3", "admin"];
var newUsers = ["user4", "user5", "user6", "user7"];
newUsers.forEach(function (newUsers) {
    if (perviousUsers.some(function (perviousUsers) { return perviousUsers.toLowerCase() === newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, " will required to enter a new userName.."));
    }
    else {
        console.log("".concat(newUsers, " is avaliable."));
    }
});
