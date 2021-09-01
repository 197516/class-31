class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png");

    this.array=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&& this.body.position.x>200){
    var position = [this.body.position.x,this.body.position.y]
    //push here is for adding more in the array and pop is for removing
    this.array.push(position)
    }

    for(var x = 0;x<this.array.length;x++){
      image(this.smoke,this.array[x][0],this.array[x][1])
    }

   




  }
}
