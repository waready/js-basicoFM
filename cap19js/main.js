var zoom = function(){
    var thum = document.getElementById("thumb");
    
    if(thum.className == "thumb"){
        thum.setAttribute("class", "thumb grande");
    }
    else{
        thum.setAttribute("class", "thumb");
    }
}