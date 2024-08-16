export const flipTileComponent = {
  schema: {
    duration: { type: 'int', default: 500 }  // Configurable duration
  },

  init() {
    const tile = this.el  // The element to which this component is attached
    const isFlipped = {value: false}  // State to track whether the tile is flipped or not
    const duration = this.data.duration

    // Handle click event to flip the tile
    tile.addEventListener('click', () => {
      const from = isFlipped.value ? '180 0 0' : '0 0 0'
      const to = isFlipped.value ? '0 0 0' : '180 0 0'

      // Set the animation attribute correctly
      tile.setAttribute('animation', `property: rotation; from: ${from}; to: ${to}; dur: ${duration}; easing: easeInOutQuad;`)
      isFlipped.value = !isFlipped.value;  // Toggle the flipped state
    });
  }
};

