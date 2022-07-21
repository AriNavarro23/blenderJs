var stateBlender = "off";
var blender = document.getElementById("blender");


function blenderControl(){
    if(stateBlender == "off"){
        stateBlender = "on";
        console.log("turn me on");
    } else{
        stateBlender = "off"
        console.log("turn me off");
    }
}