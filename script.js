var isStatus = document.querySelector("h3");

var Switch = 0;

var addFriend = document.querySelector("#add");
addFriend.addEventListener("click", () => {
    if(Switch === 0){
        Switch = 1;
        isStatus.innerHTML = "Friends";
        // isStatus.style.color = "green";
        document.querySelector("#add").innerHTML = "Remove Friend"
    }
    else{
        Switch = 0;
        isStatus.innerHTML = "Strangers";
        // isStatus.style.color = "red";
        document.querySelector("#add").innerHTML = "Add Friend"
    }
})

var container = document.querySelector(".card_top");
var heart = document.querySelector("#heart");
container.addEventListener("dblclick", ()=>{
    heart.style.transform = "scale(6.1)";
    setTimeout(() => {
        heart.style.transform = "scale(0)";
    }, 800);
})