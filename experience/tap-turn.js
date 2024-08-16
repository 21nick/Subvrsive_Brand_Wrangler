export const tapTurnComponent = {
  init() {
    const tile = document.getElementById('center')
    this.prompt = document.getElementById('promptText')

    tile.addEventListener('click', (event) => {
      // Dismiss the prompt text.
      this.prompt.style.display = 'none'

      console.log('I\'m tapped heh')

      // rotate 180 with animation!
      tile.setAttribute('animation', {
        property: 'rotation',
        to: {x: 0, y: 180, z: 0},
        dur: 1000,
        easing: 'easeInOutQuad',
      })
    })
  },
}
