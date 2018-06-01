class Flower {
  constructor(p, { x, y }) {
    this.p = p
    this.x = x
    this.y = y
    this.r = 30

    this.xdir = 1
    this.ydir = 0
  }

  show() {
    this.p.fill(255, 0, 200)
    this.p.ellipse(this.x, this.y, this.r * 2, this.r * 2)
  }

  grow() {
    this.r += 2
  }

  move() {
    this.x += this.xdir
    this.y += this.ydir
  }
}

export default Flower
