//canves setap
const canves=document.getElementById('canves1');
const ctx = canves.getContext('2d');
canves.width=300;
canves.height=250;
let score =0;
let gameFrame=0;
ctx.font='50px Georgia';


//Mouse Interactivity
let canvesposition=canves.getBoundingClientRect();
const mouse={
    x:canves.width/2,
    y:canves.height/2,
    click:false
}
canves.addEventListener('mousedown',function(event){
    mouse.click=true;
    mouse.x=event.x-canvesposition.left;
    mouse.y=event.y-canvesposition.top;
});
canves.addEventListener('mouseup', function(){
    mouse.click=false;
})

//player
const playerleft=new Image();
playerleft.src='fishswimred.png';
const playerright= new Image();
playerright.src='fishswimred.png';


class Player{
    constructor(){
        this.x=canves.width/2;
        this.y=canves.height/2;
        this.radius=10;
        this.angil=0;
        this.framex=0;
        this.framey=0;
        this.frame=0;
    }
    update(){
        const dx =this.x- mouse.x;
        const dy =this.y- mouse.y;
        if(mouse.x!= this.x ){
            this.x-=dx/20;
        }
        if(mouse.y!= this.y){
            this.y-=dy/20;
        }
    }
    draw(){
        if(mouse.click){
            ctx.lineWidth=0.2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
        ctx.fillStyle='red';
        ctx.beginPath();
        ctx.arc(this.x ,this.y, this.radius,0,Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.drawImage(playerleft, this.framex*this.spriteWidth,this.framey*this.spriteHeight,this.spriteWidth,this.spriteHeight,this.x-20,this.y-20,this.spriteWidth/4,this.spriteHeight/4 );

    }
}
const player= new Player();

//Bubbles
const BubblesArray=[];
class Bubbles{
    constructor(){
        this.x=Math.random()*canves.width;
        this.y=canves.height+ Math.random()*canves.height;
        this.radius=20;
        this.speed=Math.random()*5+1;
        this.distance;
        this.counted =false;
        this.sound = Math.random() <= 0.5 ?'sound1':'sound2' ;
    }
     update(){
        this.y-=this.speed;
        console.log(this.speed);
        const dx= this.x-player.x;
        const dy= this.y- player.y;
        // this.distance=0;
        this.distance =Math.sqrt(dx*dx+dy*dy);
        console.log(this.distance)

    }
    draw(){
        ctx.fillStyle='blue';
        
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.radius,0 , Math.PI*2);
        ctx.fill();
        ctx.closePath();
        ctx.stroke();
    }
}
const bubblepop1=document.createElement('audio');
bubblepop1.src="#"//بضيف صوت ازا بدي
const bubbles= new Bubbles();
function handlebubbles(){
    if(gameFrame%50==0){
        BubblesArray.push(new Bubbles());
    }
     for(let i=0 ;i<BubblesArray.length;i++){
      
        BubblesArray[i].update();
         BubblesArray[i].draw(); 
         }
         for(let i=0 ;i<BubblesArray.length;i++){
            if(BubblesArray[i]<0 - this.radius*2){
                BubblesArray.splice(i, 1);
         }
         
         if(BubblesArray[i].distance < BubblesArray[i].radius+player.radius){
             if(!BubblesArray[i].counted){
                score++
                BubblesArray[i].counted=true;
                BubblesArray.splice(i, 1); 
             }
            
         }


    }
}

//Animation loop
function animate(){
    ctx.clearRect(0,0,canves.width,canves.height);
    handlebubbles();
    player.update();
    player.draw();
    ctx.fillStyle='black';
    ctx.fillText('score :' + score ,30 ,40);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();