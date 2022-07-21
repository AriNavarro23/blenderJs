var stateBlender = "off";
var blender = document.getElementById("blender");
var blenderSound = document.getElementById("blender-sound");
var buttonBlender = document.getElementById("blender-button-sound")


function blenderControl(){
    if(stateBlender == "off"){
        stateBlender = "on";
        makeBrrBrr();
        blender.classList.add("active");
    } else{
        stateBlender = "off"
        makeBrrBrr();
        blender.classList.remove("active");
    }
}


function makeBrrBrr (){
    if(blenderSound.paused){
    buttonBlender.play();
    blenderSound.play();
    }else{
        buttonBlender.play();
        blenderSound.pause();
        blenderSound.currentTime = 0;
    }
}