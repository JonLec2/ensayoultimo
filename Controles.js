class Controles{
    constructor(){
        this.button1=createButton('>')
        this.button2=createButton('<')
        this.button3=createButton('^')

    }

    hide(){
        this.button1.hide();
      }

display(){
    
 this.button1.position(width-70 , height/2);
 this.button1.style('background', 'Teal');
 this.button1.style('font-size', '40px');
 this.button1.style('color', 'white');
 
   
 this.button2.position(20 , height/2);
 this.button2.style('background', 'Teal');
 this.button2.style('font-size', '40px');
 this.button2.style('color', 'white');

  
 this.button3.position(20 , height/2-30);
 this.button3.style('background', 'Teal');
 this.button3.style('font-size', '40px');
 this.button3.style('color', 'white');


this.button1.touchStarted(()=>{
    spider.x=spider.x+8
})


if(spider.x>190){
this.button2.touchStarted(()=>{
    spider.x=spider.x-8
  
})
}


if(spider.y>300){
this.button3.touchStarted(()=>{
    spider.velocityY=spider.velocityY-31
    spider.maxSpeed=+15
})

}



}
}

