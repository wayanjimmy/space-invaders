import Sketch from './Sketch'

if (module.hot) {
  module.hot.accept(() => window.location.reload())
}

new p5(Sketch)
