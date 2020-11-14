var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1300, 200, 60, 200);

  car.velocityX = speed;
}

function draw() {
  background(0,0,0);  

  if (car.isTouching(wall)){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if (deformation > 180){
      car.shapeColor = "red";    
    }
    if (deformation < 180 && deformation > 100){
      car.shapeColor = "yellow";
    }
    if (deformation < 100){
      car.shapeColor = "green";
    }
  }

  drawSprites();
}