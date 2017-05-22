const $ = require("jquery");
var ID = ["card1", "card2", "card3", "card4", "card5", "card6"];
var imageName = ["os.jpg","multimedia.jpg","Compiler.jpg","microporcessor.jpg","iict.jpg","network2.jpg"];
var LabName = ["Operating System Lab","Multimedia Lab","Compiler Lab","Microprocesor Lab","IICT Lab","Comunication Lab"];

function start() {
    //  showLabTable();
         loadLogin();
    // loadRoutine();
}
function showLabTable() {
    $(".login-div").css("display","none");
    $("#template").css("padding-left", "10%");
    for (var i = 0; i < 6; i++)
    {
        $('#template').append("<div class=\"lab-card img-rounded btn-primary\"id=\"" + ID[i] + "\"></div>");
        $('#template #' + ID[i]).click(function () {
            loadRoutine();
        });
        $('#template #' + ID[i]).append("<div class=\"lab-image-holder\"></div>");
        $('#template #' + ID[i]+" .lab-image-holder").append("<img src=\"./reasources/"+imageName[i]+"\" class=\"labImage\">");
        
        $('#template #' + ID[i]).append("<hr class=\"lineBr\">");
        $('#template #' + ID[i]).append("<p class=\"f16 font-white text-center lab-name\">"+LabName[i]+"</p>");

    }    
}
function loadRoutine() {
    $("#template").css("padding-left", "1%");
     $("#template").load("./src/html/schedule.html");
}
function loadLogin() {
    $("#template").load("./src/html/login.html");
}