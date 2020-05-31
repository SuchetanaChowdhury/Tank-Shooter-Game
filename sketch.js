// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1;
//var ball1;
var canon1, canon2, canon3, canon4;
var tankerBall1;

function setup() {
// Setup the shooting ball and the bubble ball.
var canvas = createCanvas(1600, 400);
engine = Engine.create();
world = engine.world;
ground1 = new Ground(800, 380, 1600, 40);
canon1 = new Tanker(250, 280, 230, 40);
canon2 = new Tanker(250, 330, 300, 50);
canon4 = new TankerHead(320, 180, 200, 30, -PI/3);
tankerBall1 = new CanonBall(250, 200, 50);
//ball1 = new Ball(800, 200, 50);
canon3 = new Tanker(250, 235, 160, 40);
}

function draw() {
background(0);
Engine.update(engine);
//console.log(canon4);
ground1.display();
//ball1.display();
canon1.display();
canon2.display();
canon4.display();
tankerBall1.display();
canon3.display();
//keyReleased();
}


function keyReleased() {
    // Call the shoot method for the cannon. 
}
