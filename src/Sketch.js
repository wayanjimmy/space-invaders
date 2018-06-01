import Ship from './Ship'
import Flower from './Flower'
import Drop from './Drop'

const Sketch = p => {
  let ship
  let flowers = []
  let drops = []

  p.setup = () => {
    p.createCanvas(600, 400)
    ship = new Ship(p)

    for (let i = 0; i < 6; i++) {
      flowers[i] = new Flower(p, {
        x: i * 80 + 80,
        y: 60
      })
    }
  }

  p.draw = () => {
    p.background(51)
    ship.show()
    ship.move()

    for (const drop of drops) {
      drop.show()
      drop.move()

      for (const flower of flowers) {
        // collission detection
        if (drop.hits(flower)) {
          flower.grow()
          drop.destroy()
        }
      }
    }

    let edge = false

    for (const flower of flowers) {
      flower.show()
      flower.move()
      if (flower.x > p.width || flower.x < 0) {
        edge = !edge
      }
    }

    if (edge) {
      for (const flower of flowers) {
        flower.shiftDown()
      }
    }

    // remove deleted drops from the array
    drops = drops.filter(drop => !drop.deleted)
  }

  p.keyPressed = () => {
    if (p.key === ' ') {
      const drop = new Drop(p, {
        x: ship.x,
        y: p.height - 60
      })
      drops.push(drop)
    }

    if (p.keyCode === p.RIGHT_ARROW) {
      ship.setDir(1)
    } else if (p.keyCode === p.LEFT_ARROW) {
      ship.setDir(-1)
    }
  }

  p.keyReleased = () => {
    ship.setDir(0)
  }
}

export default Sketch
