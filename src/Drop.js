class Drop {
  constructor(p, { x, y }) {
    this.p = p
    this.x = x
    this.y = y
  }

  show() {
    this.p.fill(50, 0, 200)
    this.p.ellipse(this.x, this.y, 20, 20)
  }

  move() {
    this.y -= 5
  }
}

export default Drop
