function showPage(pageId) {
    document.querySelectorAll('.tab-pane').forEach(function (tabPane) {
        tabPane.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    document.querySelectorAll('.page-item').forEach(function (pageItem) {
        pageItem.classList.remove('active');
    });
    var pageLink = document.querySelector(`[data-target="#${pageId}"]`);
    if (pageLink) {
        pageLink.parentElement.classList.add('active');
    }
}
function playsound(key){
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 300);
    switch(key){
        case "a":
            var audio=new Audio("./sounds/song1.mp3");
            audio.play();
            break;
        case "b":
            var audio=new Audio("./sounds/song2.mp3");
            audio.play();
            break;
        case "c":
            var audio=new Audio("./sounds/song3.mp3");
            audio.play();
            break;  
        default:
            console.log(key);                         
    }
}
var length_books=document.querySelectorAll(".books").length;
for(var i=0;i<length_books;i++){
    document.querySelectorAll(".books")[i].addEventListener("click",function(){
        var handlebuttonKey=this.innerHTML;
        playsound(handlebuttonKey);
    });
}
const express=require('express');
const app=express();
const path=require('path');
app.use(express.urlencoded({extended:true}));
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname, ""));
});
app.post("/", function (req, res) {
    
});
app.listen(3000,function(){
    console.log("server is running at port 3000.");
    
});