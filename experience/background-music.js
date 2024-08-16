export const backgroundMusicComponent = {
  init() {
    this.backgroundMusic = new window.Howl({
      src: [require('./assets/BGmusic.mp3')],
      loop: true,
      volume:0.25
    });

    this.playBGMusic();
    
    // Add visibility change listener
      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          this.stopBGMusic();
        } else {
          this.playBGMusic();
        }
      });
  },

  stopBGMusic(){
    if (this.backgroundMusic){
      this.backgroundMusic.stop();
    }
  },

  playBGMusic(){

    this.backgroundMusic?.play();

  },

  remove: function(){
    if (this.backgroundMusic){
      console.log("stopping music")
      this.backgroundMusic.stop();
    }
  }
};

