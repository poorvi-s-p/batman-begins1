const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var myEngine,myWorld
var umbrella
var maxDrops=100
var drops=[]
var thunder,tim1,tim2,tim3,tim4;

function preload(){
    tim1=loadImage("Batman-begins/thunderbolt/1.png")
    tim2=loadImage("Batman-begins/thunderbolt/2.png")
    tim3=loadImage("Batman-begins/thunderbolt/3.png")
    tim4=loadImage("Batman-begins/thunderbolt/4.png")
}

function setup(){
   createCanvas(500,800);
   myEngine=Engine.create()
   myWorld=myEngine.world

umbrella=new Umbrella(500,1200)
if(frameCount%150===0){
    for(var i=0 ; i<maxDrops ; i++){
        drops.push(new Drop(random(0,900),random(0,900)))
    }
}
    
}

function draw(){
    background(0)
    Engine.update(myEngine)
    umbrella.display()
    var rand=Math.round(random(1,4))
    if(frameCount%80===0){
        thunder=createSprite(random(10,370),random(10,30),10,10)
        switch(rand){
            case 1:thunder.addImage(tim1)
            break;
            case 2:thunder.addImage(tim2)
            break;
            case 3:thunder.addImage(tim3)
            break;
            case 4:thunder.addImage(tim4)
            break;
            default:break;
        }
    }
    
    for(var i=0 ; i<maxDrops ; i++){
        drops[i].display()
        drops[i].updateY()
    }
    drawSprites();
}   

