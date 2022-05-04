var canvas = document.getElementById('game');
var context  = canvas.getContext('2d');// 유니티의 게임매니저같은놈

/*context.beginPath() // 그림을 그리기 시작
//context.arc(100,100,20,0,2*Math.PI) // arc = 원 , rect = 네모, 2파이 = 360도
//context.fillStyle = 'red'
//context.fill()
//context.fillStyle = 'white'
context.moveTo(100,100)
context.lineTo(0, 100)
context.lineTo(110, 0)
context.closePath()

context.fillStyle = 'blue'
context.fill() //그리기(색체움)*/
class player
{
    constructor(x,y,radius,color)
    {
        this.pos_x = x;
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw()
    {
        context.arc(this.pos_x,this.pos_y,this.radius,0,2*Math.PI)
        context.fillStyle = this.color
        context.fill()
    }
}
class gunFire
{
    constructor(pos_x,pos_y)
    {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
    }

    draw()
    {
        context.beginPath();
        context.arc(this.pos_x,this.pos_y,10,0,2*Math.PI);
        context.fillStyle = 'blue';
        context.fill();
        context.closePath();
    }

}
function InChul(event)
{
    var x = event.clientX - canvas.offsetLeft;
    var y = event.clientY - canvas.offsetTop;
    var g = new gunFire(x,y);
    g.draw();
}

var p =new player(400,400,30,'pink');

p.draw();


