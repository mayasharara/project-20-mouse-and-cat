var gardenimage
var catimage , cat2, cat3, cat4;
var mouseimage, mouse2, mouse3 ,mouse4;
function preload() {
    gardenimage=loadImage ("garden.png");

    catimage=loadImage("cat1.png");
  cat2=loadImage("cat2.png");
  cat3-loadImage("cat3.png");
  cat4=loadImage("cat4.png");
    
   
     mouseimage=loadImage("mouse1.png");
mouse2=loadImage("mouse2.png");
mouse3=loadImage("mouse3.png");
mouse4=loadImage("mouse4.png");
    //load the images here

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
garden=createSprite(windowWidth/4,windowHeight/2.1,400,2);
garden.addImage(gardenimage,"garden");

cat=createSprite(100,100,10,20);
cat.addImage(catimage,"cat1.png");
cat.scale=1; 

mouse=createSprite(50,40,20,10);
mouse.addImage(mouseimage,"mouse1.png");
mouse.scale =1;


}

function draw() {

    background("garden.png");
    //Write condition here to evalute if tom and jerry collide

    if (cat.isTouching(mouse)){
        cat.changeImage(cat4,"cat4.png");
        mouse.changeImage(mouse4,"mouse4.png");
    }
    drawSprites();



function keyPressed(){

  //For moving and changing animation write code here

if(keyCode=== LEFT_ARROW){

    mouse.addAnimation(mouse3,"mouse3.png");
    mouse.changeImage(mouse3,"mouse3.png");
    mouse.frameDelay=25;
}

if(keyCode=== LEFT_ARROW){

    cat.addImage("cat2.png,cat3.png");
    cat.changeImage("cat2.png,cat3.png");
    cat.x=cat.x+-10;
}

}
}
