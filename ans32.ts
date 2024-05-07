let perviousUsers: string[] = ["user1", "user2", "user3", "admin"];
let newUsers: string[] = ["user4", "user5", "user6", "user7"];
newUsers.forEach (newUsers => { 
    if (perviousUsers.some(perviousUsers => perviousUsers.toLowerCase() === newUsers.toLowerCase())) {
    console.log(`${newUsers} will required to enter a new userName..`);
} else {
        console.log(`${newUsers} is avaliable.`);
    }
});


    