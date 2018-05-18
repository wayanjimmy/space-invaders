import Ship from './Ship'

const Sketch = p => {
  let ship

  p.setup = () => {
    p.createCanvas(600, 400)
    ship = new Ship(p)
  }

  p.draw = () => {
    p.background(51)
    ship.show()
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
