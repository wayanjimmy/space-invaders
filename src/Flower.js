class Flower {
  constructor(p, { x, y }) {
    this.p = p
    this.x = x
    this.y = y
  }

  show() {
    this.p.fill(255, 0, 200)
    this.p.ellipse(this.x, this.y, 60, 60)
  }
}

export default Flower
