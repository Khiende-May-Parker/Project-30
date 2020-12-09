class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.4,
            friction :0.0,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.Visiblity = 255;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed < 3 ) {

        
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      else {
        World.remove(world,this.body);
        push();
        this.visiblity = this.visiblity - 5
        pop();
      }
      }
}