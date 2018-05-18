class Ship {
  constructor(p) {
    this.p = p
    this.x = this.p.width / 2
  }

  show() {
    this.p.fill(255)
    this.p.rectMode(this.p.CENTER)
    this.p.rect(this.x, this.p.height - 20, 20, 60)
  }

  move(dir) {
    this.x += dir * 5
  }
}

export default Ship
