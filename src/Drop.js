class Drop {
  constructor(p, { x, y }) {
    this.p = p
    this.x = x
    this.y = y
    this.r = 8
    this.deleted = false
  }

  show() {
    this.p.fill(50, 0, 200)
    this.p.ellipse(this.x, this.y, this.r * 2, this.r * 2)
  }

  move() {
    this.y -= 5
  }

  hits(flower) {
    let d = this.p.dist(this.x, this.y, flower.x, flower.y)
    return d < this.r + flower.r
  }

  destroy() {
    this.deleted = true
  }
}

export default Drop
