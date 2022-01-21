const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;


var gameState=0
var playerCount=0
var vidas=4;
var form
var controles
var game
var spiderImg, spidersalto;
var spider;
var bg1, bg2, bg3;
var columna, columnaImg, colum;
var piso1;
var piso, piso2, piso3, piso4, piso5;
var invisibleground;
var blockImg
var agua, aguaAnima;
var lansarayosImg, lansarayos;
var paredecImg;
var pinoImg, arbolImg, lamparaImg, arbustoImg, autoImg;
var boton1;

var blockGroup;
var pisoGroup;
var laserGroup;
var flechaGroup;
var rayo2Group;
var paredesGroup;
var lavaGroup;
var misilopoGroup;


var laserImg, laserImg2;
var ground;

var flech=[];
var Flsprite, FlImg;
var llama1, llama2;
var lImg1, lImg2, lImg3;
var block1=[]
var block2=[]
var block3=[]
var block4=[]
var block5=[]
var flplayer=[]
var tr1, tr2, tr3;

var rayolaser2;
var guardia, guradia2;
var opmisil;

var puas1, puasImg


var anunciovida;
var font;
var vidaImg;
var v1, v2, v3, v4;


var lava1, lava2, lavaImg;

var lavavoladora1, lavavoladora2, lavavoladora3 ;
var lavavolImg

var vidan1=5;
var vidan2=5;
var laserultimo;



function preload() {
laserImg=loadImage("fotos/laser.png")
laserImg2=loadImage("fotos/laser2.png")
bg1=loadImage("fotos/banner.png")
bg2=loadImage("fotos/back.png")
bg3=loadImage("fotos/back2.png")
spiderImg=loadAnimation("fotos/sp1.png", "fotos/sp2.png", "fotos/sp4.png", "fotos/sp5.png" )
spidersalto=loadAnimation("fotos/sp3.png")
piso1=loadImage("fotos/piso.png")
blockImg=loadImage("fotos/cubo.png")
columnaImg=loadImage("fotos/columna.png")
FlImg=loadImage("fotos/flechaelec.png")
lImg1=loadImage("fotos/57522.png")
lImg2=loadImage("fotos/5753.png")
lImg3=loadImage("fotos/5376342_ccexpress.png")
puasImg=loadImage("fotos/puas.png")
font=loadFont('10204/Fortnite.ttf')
vidaImg=loadImage("fotos/pixilframe.png")
lavaImg=loadImage("fotos/lava2.png")
lavavolImg=loadImage("fotos/lavavol.png")
aguaAnima=loadAnimation("fotos/agua1.png", "fotos/agua2.png")
lansarayosImg=loadImage("fotos/lasarayos.png")
paredecImg=loadImage("fotos/paredelectricidad.png")
pinoImg=loadImage("fotos/pino.png")
arbolImg=loadImage("fotos/arbol.png")
lamparaImg=loadImage("fotos/lampara.png")
arbustoImg=loadImage("fotos/arbusto.png")
autoImg=loadImage("fotos/auto.png")

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;

game=new Game
game.start();
controles=new Controles;

//creación de grupos
blockGroup=createGroup();
pisoGroup=createGroup();
laserGroup=createGroup();
flechaGroup=createGroup();
llamasGroup=createGroup();
paredesGroup=createGroup();
rayo2Group=createGroup();
lavaGroup=createGroup();
misilopoGroup=createGroup(),


//Personaje principal

spider=createSprite(200, 400)
spider.addAnimation("correr", spiderImg);
spider.addAnimation("saltar", spidersalto)
spider.scale=0.1
spider.visible=false


spider.debug=true


spider.setCollider("rectangle", 0, 0, 500, 900)

//piso invisible
invisibleground=createSprite(3400, 590, 7000, 50)
invisibleground.visible=false; 

//piso imagen
piso=createSprite(600, 590);
piso.addImage(piso1);
piso.scale=0.5
pisoGroup.add(piso)

piso2=createSprite(1800, 590)
piso2.addImage(piso1)
piso2.scale=0.5
pisoGroup.add(piso2)

piso3=createSprite(3000, 590)
piso3.addImage(piso1)
piso3.scale=0.5
pisoGroup.add(piso3)

piso4=createSprite(4200, 590)
piso4.addImage(piso1)
piso4.scale=0.5
pisoGroup.add(piso4)

piso5=createSprite(5400, 590)
piso5.addImage(piso1)
piso5.scale=0.5
pisoGroup.add(piso5)

pisoGroup.setVisibleEach(false)

colum=createSprite(1800, 180, 1190, 70)
colum.visible=false



//lava
lava1=createSprite(534, 533, 10, 10)
lava1.addImage(lavaImg)
lava1.scale=0.2
lavaGroup.add(lava1)


lava2=createSprite(925, 533, 10, 10)
lava2.addImage(lavaImg)
lava2.scale=0.2
lavaGroup.add(lava2)

lava3=createSprite(1089, 533, 10, 10)
lava3.addImage(lavaImg)
lava3.scale=0.2
lavaGroup.add(lava3)

lavaGroup.setVisibleEach(false)

//bloques de la primera montaña
var  bl1=createSprite(400, 540, 10, 10)
bl1.addImage(blockImg)
bl1.scale=0.2
blockGroup.add(bl1)


for(var m=390; m<=540; m=m+50){
var blg=createSprite(600, m , 10, 10)
blg.addImage(blockImg)
blg.scale=0.2
blockGroup.add(blg)

}

for(var m=490; m<=540; m=m+50){
var blg2=createSprite(450, m , 10, 10)
blg2.addImage(blockImg)
blg2.scale=0.2
blockGroup.add(blg2)

}


for(var m=390; m<=540; m=m+50){
var blg3=createSprite(850, m , 10, 10)
blg3.addImage(blockImg)
blg3.scale=0.2
blockGroup.add(blg3)
}

for(var m=440; m<=540; m=m+50){
var blg4=createSprite(1000, m , 10, 10)
blg4.addImage(blockImg)
blg4.scale=0.2
blockGroup.add(blg4)
}

for(var m=490; m<=540; m=m+50){
var blg5=createSprite(1180, m , 10, 10)
blg5.addImage(blockImg)
blg5.scale=0.2
blockGroup.add(blg5)
}


blockGroup.setVisibleEach(false)


puas=createSprite(1255, 555, 10, 10)
puas.addImage(puasImg)
puas.scale=0.08

agua=createSprite(728, 540, 10, 10)
agua.addAnimation("mover", aguaAnima)
agua.scale=0.178

lansarayos=createSprite(2400, 520, 10, 10)
lansarayos.addImage(lansarayosImg)
lansarayos.scale=0.15



boton1=createSprite(2420, 500, 10, 10)


//vidas
v1=createSprite(400, 200, 20, 20)
v1.addImage(vidaImg)
v1.scale=0.3
v1.visible=false

v2=createSprite(400, 200, 20, 20)
v2.addImage(vidaImg)
v2.scale=0.3
v2.visible=false


v3=createSprite(400, 200, 20, 20)
v3.addImage(vidaImg)
v3.scale=0.3
v3.visible=false

v4=createSprite(400, 200, 20, 20)
v4.addImage(vidaImg)
v4.scale=0.3
v4.visible=false


//laseres del segundo nivel
for(var m=1410; m<=2410; m=m+300){
  var laser=createSprite(m, 340, 20, 20)
  laser.addImage(laserImg)
  laser.scale=0.2
  laser.velocityY=-13
  laserGroup.add(laser)
}

for(var u=1560; u<=2210; u=u+300){
  var laser2=createSprite(u, 450, 20, 20)
  laser2.addImage(laserImg)
  laser2.scale=0.2
  laser2.velocityY=+11
  laserGroup.add(laser2)
}


laserGroup.setVisibleEach(false)


//paredes del tercer nivel

for(var y=2600; y<=3500; y=y+140){
  var pared1=createSprite(y, 480, 13, 200)
  pared1.addImage(paredecImg)
  pared1.scale=0.3
 

 pared1.setCollider("rectangle", 0, 40, 90, 560)
  paredesGroup.add(pared1)
}


// piso con motor físico del cuarto nivel
ground=new Ground(4200, 547, 1200, 20)



//montañas con body 
for(var k=250; k<=550; k=k+50){
  block1.push(new Block(4600, k, 50, 50))

}

for(var p=250; p<=550; p=p+50){
  block2.push(new Block(4300, p, 50, 50))

}

for(var p=400; p<=550; p=p+51){
  block3.push(new Block(4200, p, 50, 50))

}


for(var p=350; p<=550; p=p+51){
  block4.push(new Block(4400, p, 50, 50))

}

//guardias del penultimo nivel
guardia=createSprite(6000, 300, 20, 40)
guradia2=createSprite(6000, 100, 20, 40)
}



function draw() {
  Engine.update(engine);

  
//choque de laseres del primer nivel
laserGroup.bounceOff(colum)
laserGroup.bounceOff(invisibleground)



//funcón para pasar del estado 0 a 1
  if(playerCount===1){
    gameState=1
  }
  
  //juego

  if(gameState===1){
   clear();
    game.play();
  background(0, 120, 120)
controles.display();



   //visibilidades de los grupos
  invisibleground.visible=false
  spider.visible=true
  blockGroup.setVisibleEach(true)
  pisoGroup.setVisibleEach(true)
  laserGroup.setVisibleEach(true)

  lavaGroup.setVisibleEach(true)


   spider.collide(invisibleground)
   spider.collide(blockGroup)
   spider.collide(colum)

   

  camera.position.x=spider.x+400
  camera.position.y=490
  
v1.y=camera.position.y-410
v1.x=camera.position.x+390
v1.visible=true
 
v2.y=camera.position.y-410
v2.x=camera.position.x+440
v2.visible=true
 

v3.y=camera.position.y-410
v3.x=camera.position.x+490
v3.visible=true

v4.y=camera.position.y-410
v4.x=camera.position.x+540
v4.visible=true


//laseres
if(spider.x<2200){
  if(frameCount % 130 ===0){
    var laser3=createSprite(2330, 500, 20, 20)
    laser3.addImage(laserImg2)
    laser3.scale=0.2
    laser3.velocityX=-7
    laser3.lifetime=135
    laserGroup.add(laser3)
  }
}

//accesorios
if(spider.x>2200){

boton1.shapeColor="red"
}
else{
  boton1.shapeColor="green"

}


//lava del primer nivel
lavavol();

//flecha del tercer nivel

if(spider.x>2410  && spider.x<3510 ){
  if(frameCount % 70 ===0){
  
  Flsprite=createSprite(3500, random(30, 70), 30, 10)
  Flsprite.addImage(FlImg)
  Flsprite.rotation=-30
  Flsprite.scale=0.1
  Flsprite.lifetime=40
  Flsprite.velocityX=-22
  Flsprite.velocityY=+13
  Flsprite.velocityY=Flsprite.velocityY + 1.91
  Flsprite.friction=0.012
  flechaGroup.add(Flsprite)
  
  }
  }

flechaGroup.bounceOff(invisibleground)

//función llamas del tercer nivel

llamacielo();

llamasGroup.collide(invisibleground)


//función misil oponente del penultimo nivel
misiloponente()

//rayo laser del nivel 4
if(spider.x>3500 && spider.x<5000){
if(frameCount %60===0){
  rayolaser2=createSprite(random(4500, 4800),100, 30, 10)
rayolaser2.addImage(laserImg2)
rayolaser2.rotation=-25
rayolaser2.scale=0.2
rayolaser2.velocityX=-31
rayolaser2.velocityY=+13
rayolaser2.lifetime=50
rayo2Group.add(rayolaser2)

}


}


//guardias del penultimo nivel
guardia.y=spider.y+50
guradia2.y=spider.y-70



//moviminetos
  if(keyDown("right_arrow")  ){
    spider.x=spider.x+8
     }
  


    if(spider.x>190){
    if(keyDown("left_arrow")){
    spider.x=spider.x-8
  
    }
    }
  
  if(spider.y>300){
  if(keyDown("up_arrow") ){
    spider.velocityY=spider.velocityY-3
spider.maxSpeed=+15
  }
  }
//gravedad
  spider.velocityY = spider.velocityY + 0.91
  

  //arrojar flechas en el cuarto nivel
  if(spider.x>3500 && spider.x<4800){
if(keyDown("2")){
 flplayer.push(new BaseClass(spider.x, spider.y, 40, 10))
}
  }
   

  if(spider.x>4800 && spider.x<6000){
if(keyDown("3")){
laserultimo=createSprite(spider.x, spider.y, 40, 10)
laserultimo.velocityX=+17
laserultimo.lifetime=100
}
  }
  


  //imagenes de fondo
    for(var k=0; k<=5000; k=k+2380) {
  image(bg2, k, -25, 1200, 620)
    }
  
     for(var k=1190; k<=6000; k=k+2380){
  image(bg3, k, -25, 1200, 620)
     }
    
  image(columnaImg, 1200, 150, 1200, 290)
  
 //accesorios 2
image(pinoImg, 150, 300, 120, 200)
image(arbolImg, 650, 350, 150, 150)
image(lamparaImg, 1350, 350, 100, 150)
image(arbustoImg, 1900, 450, 150, 50)
image(arbustoImg, 2040, 450, 150, 50)
image(arbolImg, 2900, 350, 150, 150)
image(autoImg, 3170, 395,100, 50 )
   
         spider.depth=piso.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso2.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso3.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso4.depth;
         spider.depth=spider.depth+1;
         spider.depth=piso5.depth;
         spider.depth=spider.depth+1;
         spider.depth=lansarayos.depth;
         spider.depth=spider.depth+1;
     

        //display de los Bodies
    
         ground.display();

         for (var i = 0; i < block1.length; i++) {
          block1[i].display();   
        }
      

    
        for (var h = 0; h < block2.length; h++) {
          block2[h].display();   
        }

        
        for (var w = 0; w < block3.length; w++) {
          block3[w].display();   
        }

         
        for (var i = 0; i < block4.length; i++) {
          block4[i].display();   
        }


        //display de lansamiento de flechas
        for (var j = 0; j < flplayer.length; j++) {
          flplayer[j].display();   
        }


//ultimas naves
//if(laserultimo.isTouching(guardia)){
 // vidan1-=1
//}


//if(laserultimo.isTouching(guradia2)){
  //vidan2-=1
//}


//if(vidan1===0  && vidan2===0){
  //text("ve por el tesorto", displayWidht/2, displayHeight/2)
//}





        //score

        fill("white")
textFont(font, 32)
        text("Vida:", camera.position.x+300, camera.position.y-400)


        if(spider.isTouching(laserGroup) || spider.isTouching(lavaGroup)){
          spider.x=200
          spider.y=440
          spider.velocityY=0
          vidas-=1
anunciovida=createSprite(camera.position.x/2, camera.position.y/2, 40, 40)
          anunciovida.lifetime=50
          
        }

if(spider.isTouching(paredesGroup)  || spider.isTouching(flechaGroup) || spider.isTouching(llamasGroup)){
  spider.x=2485
  spider.y=440
vidas-=1
spider.velocityY=0
}



if(spider.isTouching(rayo2Group)){
  spider.x=3600
  spider.y=440
vidas-=1
spider.velocityY=0
}


if(spider.isTouching(misilopoGroup)){
spider.x=4800
spider.y=440
vidas-=1
spider.velocityY=0
}



if(vidas===3){
  v4.visible=false
}

if(vidas===2){
  v4.visible=false
  v3.visible=false

}

if(vidas===1){
  v4.visible=false
  v3.visible=false
  v2.visible=false
}


if(vidas===0){
  v4.visible=false
  v3.visible=false
  v2.visible=false
  v1.visible=false

gameState=2

}


console.log(vidas)


  }


  if(gameState===2){
    text("perdiste", windowWidth/2, windowHeight/2)



  }






  console.log(gameState);




  drawSprites()
}


function llamacielo(){
  if(spider.x>2410  && spider.x<3510 ){
    if(frameCount % 60 ===0){
    
    llama1=createSprite(random(2600, 3400), 30, 30, 10)
    var rand=Math.round(random(1, 2));
    switch(rand){
      case 1: llama1.addAnimation("caer1",lImg1)
      break;
      case 2: llama1.addAnimation("caer2",lImg2)
      default: break;
    }

    llama1.velocityY=+13
llama1.scale=0.12
llama1.lifetime=40

llamasGroup.add(llama1)

    }

    
    }

    

}



function misiloponente(){

  if(spider.x>4800 && spider.x<6000){
if(frameCount % 30===0){
  opmisil=createSprite(6000, 300, 10, 10)
  opmisil.velocityX=-13

  var positionx= Math.round(random(1, 2));
  if(positionx==1){
    opmisil.y=random(70, 300)
  }

  else{
if(positionx==2){
    opmisil.y=random(310, 590);
}
  }

  opmisil.lifetime=150
  opmisil.tint="blue"
misilopoGroup.add(opmisil)

}

  }
}
 

function lavavol(){

  if(frameCount % 30===0){
    lavavoladora1=createSprite(random(495, 560), 540, 10, 10)
    lavavoladora1.addImage(lavavolImg)
    lavavoladora1.scale=0.3
    lavavoladora1.velocityY=-12
    lavavoladora1.lifetime=10

  }

  if(frameCount % 40===0){
  lavavoladora2=createSprite(random(880, 970), 540, 10, 10)
  lavavoladora2.addImage(lavavolImg)
  lavavoladora2.scale=0.3
  lavavoladora2.velocityY=-12
  lavavoladora2.lifetime=13
  }

  if(frameCount % 35===0){
    lavavoladora3=createSprite(random(1050, 1150), 540, 10, 10)
    lavavoladora3.addImage(lavavolImg)
    lavavoladora3.scale=0.3
    lavavoladora3.velocityY=-12
    lavavoladora3.lifetime=8

  }


}

