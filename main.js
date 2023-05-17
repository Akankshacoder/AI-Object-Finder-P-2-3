status = "";
objects = [];
function preload(){

}

function setup(){
    canvas = createCanvas(600, 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide()
   video.size(600, 500)
}

function start(){
 od =  ml5.objectDetector("cocossd", modelLoaded)

    document.getElementById("stat").innerHTML = "Status: Detecting Objects"
    user = document.getElementById("fname").value
}

function modelLoaded(){
    console.log("Model Has Been Loaded Succesfully!! ");
    status = true;
}

function draw(){
    image(video ,0 ,0 ,600 ,500 )
    od.detect(video, gotResults)
}

function gotResults(error, results){
    if(error){
        console.log("error")
    }
    else{
        console.log("results")
        objects = results
    }
}