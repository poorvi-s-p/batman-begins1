class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true
        }
    this.image=loadAnimation("Batman-begins/Walking Frame/walking_8.png","Batman-begins/Walking Frame/walking_7.png","Batman-begins/Walking Frame/walking_6.png","Batman-begins/Walking Frame/walking_5.png","Batman-begins/Walking Frame/walking_4.png","Batman-begins/Walking Frame/walking_3.png","Batman-begins/Walking Frame/walking_2.png","Batman-begins/Walking Frame/walking_1.png");
  this.umbrella=Bodies.circle(x,y,15,options)
  this.radius=15
  World.add(myWorld,this.umbrella)
    }
    display(){
        push()
        imageMode(CENTER)
        scale(0.5);
        animation(this.image,this.umbrella.position.x,this.umbrella.position.y,this.radius*2,this.radius*2)
        pop()
    }
}