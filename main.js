difference=0;
leftwristx=0;
rightwristx=0;
function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    
    canvas=createCanvas(500,500);
    canvas.position(600,100);
    
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
    
}
function modelLoaded(){
    console.log("poseNet Is initalized")
}
function draw(){
    background("#e0812d")
    document.getElementById("square_side").innerHTML="font size will be = "+difference+"px"
    textSize(difference);
    fill("#11249c")
    text("Reuben",180,280);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("leftwristx=     " +leftwristx+"rightwristx=   "+rightwristx+
        "difference=     "+difference);
    }
}