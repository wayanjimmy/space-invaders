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
    this.p.noStroke()
    this.p.fill(255, 0, 200, 150)
    this.p.ellipse(this.x, this.y, this.r * 2, this.r * 2)
  }

  grow() {
    this.r += 2
  }

  move() {
    this.x += this.xdir
  }

  shiftDown() {
    this.xdir *= -1
    this.y += this.r
  }
}

export default Flower
