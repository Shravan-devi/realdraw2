noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftwristX= results[0].pose.leftWrist.x;
    rightwristX= results[0].pose.rightWrist.x;
    difference= floor(leftwristX-rightwristX);
    noseX= results[0].pose.nose.x;
    noseY= results[0].pose.nose.y;    
  }
}

function draw() {
background('#969A97');
fill("#6262d1");
stroke("#6262d1");
rectMode(CENTER);
square(noseX, noseY, difference);
}
