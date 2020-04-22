const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function preload(){
    heli=loadImage("unnamed.png")
    pack=loadImage("download.png")
}

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var option={
        restitution:0
    }
    
        
ball=Bodies.rectangle(200,150,20,20,option)
    var ground_options ={
        isStatic: true
    }
    
    ball1=Bodies.rectangle(100,70,40,40,ground_options)
    
   World.add(world,ball1)

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
    World.add(world,ball)
    console.log(ground);
}

function draw(){
    background("white");
    Engine.update(engine);
    rectMode(CENTER)
    fill ("white")
    rect(ground.position.x,ground.position.y,400,20);
    image(pack,ball.position.x,ball.position.y,30,30)
    image(heli,ball1.position.x,ball1.position.y,200,200)
    
}