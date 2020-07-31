class Paper{
    constructor(x, y, width, height) {
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.2
            
        }
        this.body = ellipse(x, y, width, height, options);
        this.width = width;
        this.height = height;
        
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        
        circle( 0, 0, this.width, this.height);
        pop();
      }
}