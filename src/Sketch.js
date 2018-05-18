import Ship from './Ship'
import Flower from './Flower'

const Sketch = p => {
  let ship
  let flowers = []

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
    for (const flower of flowers) {
      flower.show()
    }
  }

  p.keyPressed = () => {
    if (p.keyCode === p.RIGHT_ARROW) {
      ship.move(1)
    } else if (p.keyCode === p.LEFT_ARROW) {
      ship.move(-1)
    }
  }
}

export default Sketch
