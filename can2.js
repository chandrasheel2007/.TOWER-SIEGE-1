class Can2{

    constructor(x, y){

        var options = {
            restitution: 0.2,
            friction: 0.5,
            density: 0.3,
            //isStatic: true
        }

        this.body = Bodies.rectangle(x, y, 70, 80, options);
        World.add(world, this.body);
        this.w = 70;
        this.h = 80;
        
        this.image = loadImage("images/can2.png");





    }

    display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();




    }
}
