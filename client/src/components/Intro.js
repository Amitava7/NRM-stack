import React, {useRef, useEffect, forwardRef} from 'react';
import "./Intro.scss";
var ctx;
var myref;
let mouse = {
 x :null,
 y: null,
 radius: 30
}
class Particle {
 constructor(x,y){
   this.x= x;
   this.y =y;
   this.size = 3;
   this.baseX = this.x;
   this.baseY = this.y;
   this.density = (Math.random()*30)+1
 }
 draw(){
   ctx.fillStyle ="#315024";
   ctx.beginPath();
   ctx.arc(this.x, this.y, this.size, 0, Math.PI*2, false);
   ctx.closePath();
   ctx.fill();
 }
 update(){
   let dx = mouse.x - this.x;
   let dy = mouse.y - this.y;
   let dist = Math.sqrt( dx*dx  + dy*dy);
   let forceX = dx /dist;
   let forceY = dy/dist;
   let maxDist = mouse.radius;
   let force = (maxDist - dist) / maxDist;
   let dirX = forceX * force * this.density;
   let dirY = forceY * force * this.density;
   if(dist < mouse.radius){
      this.x -= dirX;
      this.y -= dirY;
   }
   else{
     if(this.x != this.baseX){
       let dx = this.x - this.baseX;
       this.x -= dx/10;
     }
     if(this.y != this.baseY){
       let dy = this.y - this.baseY;
       this.y -= dy/10;
     }
   }
   this.draw();
 }
}
function init(){
 const canvas = myref.current;
 ctx = canvas.getContext("2d");
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 let particlesArray=[];
 ctx.fillStyle = "white";
 ctx.font = '30px Verdana';
 ctx.fillText("Amitava", 0, 50);
 const textCords = ctx.getImageData(0,0,150,150);
 for(let y=0, y2=textCords.height; y<y2; y++){
   for(let x=0, x2=textCords.width; x<x2; x++){
     if(textCords.data[(y*4*textCords.width)+(x*4)+3] > 128){
       let posX = x + window.innerWidth * 0.04;
       let posY = y +  window.innerHeight * 0.02;
       particlesArray.push(new Particle(posX*7,posY*7))
     }
   }
 }
 function animate(){
   requestAnimationFrame(animate);
   ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
   for(let i of particlesArray ){
     i.draw();
     i.update();
   }
 }
 animate();
}
const Intro = props =>{
 const myref1 = useRef();
 
 useEffect(()=>{
   myref = myref1;
   init();
   window.addEventListener('mousemove',
       function(event){
           mouse.x = event.x;
           mouse.y = event.y;
       })
  
   window.addEventListener('resize',
   function(event){
    init();
   });
   window.addEventListener("mouseout" ,
   function(event){
    mouse.x = undefined;
    mouse.y = undefined;
   });
 
 },[])
   return (
   <div className="bgpic">
     <canvas ref={myref1}>
     </canvas>
     <p>Full stack developer</p>
   </div>
   );
}
 
 
export default Intro;
