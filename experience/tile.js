export const tileComponent = {
  schema: {
    id: { type: 'string'},
    model: {type: 'string'},
    flipped: { type: 'boolean', default: false},
    matched: {type: 'boolean', default: false},
    duration: { type: 'int', default: 500 }  // Configurable duration
  },

  init(){
    const tile = this.el
    this.data.id = this.el.getAttribute('id');
    this.data.model = this.el.getAttribute('gltf-model');

    
    tile.addEventListener('click', () => {
      const gameManager = tile.sceneEl.components['game-manager'];

      if (!gameManager){
        // if game manager null, return
        return;
      }

      // if one or both tiles are null, then flip tile/emit tileflipped
      if (!gameManager.firstTile || !gameManager.secondTile) {
        
        if (!gameManager.matchInProgress && !this.data.flipped && !this.data.matched) {
          
          tile.sceneEl.emit('tileFlipped', { el: this.el, id: this.data.id });
          this.flipTile();
        }
      }
      
    });
  },


  flipTile(){
    // flip to show subvrsive project
    const sfxsComponent = this.el.sceneEl.components['sfxs'];
    sfxsComponent?.playTileFlipSFX();

    let isFlipped = this.data.flipped;
    const duration = this.data.duration

    const from = '0 0 0'
    const to = '0 180 0'

    // Set the animation attribute correctly
    this.el.setAttribute('animation', `property: rotation; from: ${from}; to: ${to}; dur: ${duration}; easing: easeInOutQuad;`)
    this.data.flipped = true;  // Toggle the flipped state
  },

  resetTile(){
    // flip back to show Subvrsive letter
    const sfxsComponent = this.el.sceneEl.components['sfxs'];
    sfxsComponent?.playTileTurnBackSFX();
    
    const duration = this.data.duration

    const from = '0 180 0'
    const to = '0 0 0'

    // Set the animation attribute correctly
    this.el.setAttribute('animation', `property: rotation; from: ${from}; to: ${to}; dur: ${duration}; easing: easeInOutQuad;`)
    this.data.flipped = false; 
    this.el.setAttribute('material', 'color', '#000');
  },

  setMatched(){
    
    const sfxsComponent = this.el.sceneEl.components['sfxs'];
    sfxsComponent?.playPosSFX();

    this.data.matched = true;
  }


  };
