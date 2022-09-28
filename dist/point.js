class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;

        if(x>y){
            this.label = -1
        } else{
            this.label = 1
        }
    }

    showPoint(){
        stroke(0);
        if(this.label == 1){
            fill(0)
        }else{
            fill(255)
        }
        ellipse(this.x,this.y,8,8)
    }
}
