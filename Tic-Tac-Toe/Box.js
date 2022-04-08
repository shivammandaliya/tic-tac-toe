class Box {
  
    constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

    appear()
    {
      stroke(5);
      strokeWeight(3);
      noFill()
      rect(this.x, this.y, this.w, this.h);
    }
}