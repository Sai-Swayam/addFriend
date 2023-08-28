//Add Friend feature

var isStatus = document.querySelector("h3");

var Switch = 0;

var addFriend = document.querySelector("#add");
addFriend.addEventListener("click", () => {
    if (Switch === 0) {
        Switch = 1;
        isStatus.innerHTML = "Following";
        // isStatus.style.color = "green";
        document.querySelector("#add").innerHTML = "Unfollow"
    }
    else {
        Switch = 0;
        isStatus.innerHTML = "Strangers";
        // isStatus.style.color = "red";
        document.querySelector("#add").innerHTML = "Follow"
    }
})

//Like feature

var container = document.querySelector(".card_top");
var heart = document.querySelector("#heart");
container.addEventListener("dblclick", () => {
    heart.style.transform = "scale(6.1)";
    setTimeout(() => {
        heart.style.transform = "scale(0)";
    }, 800);
})

//Custom Cursor

// var body = document.body;
// var cursor = document.querySelector("#cursor");
// body.addEventListener("mousemove", function(coord){
//     cursor.style.left = coord.x +"px";
//     cursor.style.top = coord.y + "px";
//     // console.log(coord.x);
// });