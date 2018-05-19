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

    for (const drop of drops) {
      drop.show()
      drop.move()
    }

    for (const flower of flowers) {
      flower.show()
    }
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
      ship.move(1)
    } else if (p.keyCode === p.LEFT_ARROW) {
      ship.move(-1)
    }
  }
}

export default Sketch
