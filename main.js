var status = "";
function setup(){
 canvas = createCanvas(300, 300);
 canvas.position(490, 250);
 video = createCapture(VIDEO);
 video.hide();
}
function start(){
 objectDetector = ml5.objectDetector("cocossd", model_loaded);
 document.getElementById("status").innerHTML = "Status: Detecting Objects";
 object = document.getElementById("object").value;
}
function model_loaded(){
 console.log("Model Loaded");
 status = true;
}
function draw(){
 image(video, 0, 0, 300, 300);
}