export const sfxsComponent = {
  init() {
    this.tileFlipSFX = new window.Howl({
      src: [require('./assets/pick.mp3')],
      volume:0.5
    });

    this.tileTurnBackSFX = new window.Howl({
      src: [require('./assets/swish-sound.mp3')],
      volume:0.8
    });

    this.tileMatchedSFX = new window.Howl({
      src: [require('./assets/ding.mp3')],
      volume:0.25
    });

    
  },

  playTileFlipSFX(){
    this.tileFlipSFX?.play();
  },

  playTileTurnBackSFX(){
    this.tileTurnBackSFX?.play();

  },

  playPosSFX(){
    this.tileMatchedSFX?.play();
  },


  remove: function(){
    if (this.tileFlipSFX){
      // console.log("stopping music")
      this.tileFlipSFX.stop();
    }

    if (this.tileTurnBackSFX){
      // console.log("stopping music")
      this.tileTurnBackSFX.stop();
    }

    if (this.tileMatchedSFX){
      // console.log("stopping music")
      this.tileMatchedSFX.stop();
    }

  }
};

