const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bruce;


function preload(){
  
}

function setup(){
createCanvas(400, 700);

engine = Engine.create();
world = engine.world;

bruce= new Umbrella(150,570,45,45);


Engine.run(engine);    
}

var drops=[]; 

function draw(){
 
rectMode(CENTER);
background(0);    
  
var maxDrops=100;
for (var i=0; i<maxDrops; i++){
  drops.push(new Drop(random(0,500),random(0,500),5)); 
  drops[i].display();
}    
drawSprites();
bruce.display();
} 


