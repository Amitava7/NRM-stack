import React,{ Component } from 'react';
import './Title.scss'



class Title extends Component {
  componentDidMount() {
     const canvas = this.refs.canvas
     const c = canvas.getContext("2d")
     const width= canvas.width = window.innerWidth;
     const height = canvas.height = 70;
     var mouse = {
    'x':0,
    'y':0
  };
  window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
  });
  function Circle(x,y,dx,dy,rad) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.rad = rad;
    this.orad = rad;
    this.fillStyle = colors[Math.floor(Math.random()*colors.length)];
    this.draw = function(){
      c.beginPath();
      c.arc(this.x,this.y,this.rad,0,Math.PI*2, false);
      c.fillStyle = this.fillStyle;
      c.fill();
    }
    this.update= function(){
      if(this.x+this.rad>=width || this.x-this.rad<=0)
        this.dx = -this.dx;
      if(this.y+this.rad>=height || this.y-this.rad<=0)
        this.dy = -this.dy;
      this.x+=this.dx; this.y+=this.dy;

      if(mouse.x - this.x < 50 && mouse.x -this.x >-50 && mouse.y - this.y < 50 && mouse.y -this.y >-50 && this.rad < 30){
          this.rad +=1;
        }else if (this.rad >this.orad){
            this.rad --;
        }
      this.draw()
    }
  }
  var circles = [],
  colors = ['#98B7B1','#3F592C','#B7BF1D','#DADADA','#595959'];
  for (var i = 0; i < 80; i++) {
    var rad = 1 + Math.random()*10,
      x = Math.random() * (width - 2* rad) + rad,
      y = Math.random() * (height- 2* rad) + rad,
      dx = (Math.random() - 0.5)*2,
      dy= (Math.random() - 0.5)*2;
    circles.push(new Circle(x,y,dx,dy,rad));
  }


  function animate(){
    requestAnimationFrame(animate);
      c.clearRect(0,0,width, height);
      for (var i = 0; i < circles.length; i++) {
        circles[i].update();
      }
      c.fillStyle = '#595959';
      c.font = "50px Arial";
      c.textAlign = "center";
      c.fillText("Amitava Mozumder",width/2,60);
  }
  animate();

   }
  render() {
    return(
      <canvas ref="canvas"> </canvas>
    );
  }
}

export default Title;