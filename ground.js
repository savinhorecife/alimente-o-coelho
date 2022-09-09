class Ground {
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }

        this.w = w;
        this.h = h;
        this.solo = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.solo);
    }

    display(){
        push();
        rectMode(CENTER);
        noStroke();
        fill(148,127,146);
        rect(this.solo.position.x, this.solo.position.y,this.w, this.h);
        pop();
    }
}