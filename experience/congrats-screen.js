export const congratsScreenComponent = {

  init() {
    this.congratsScreen = document.querySelector(".congrats-screen");
    this.closeButton = document.querySelector('.close-button');
    this.isCongratsVisible = false;
    this.learnMoreButton = document.getElementById('learnMoreButton');


      if (this.learnMoreButton){
      this.learnMoreButton.addEventListener('click', (event)=> {
        event.stopPropagation();
        const backgroundMusicComponent = this.el.sceneEl.components['background-music'];
        backgroundMusicComponent?.stopBGMusic();
        this.handleLearnMoreClick();
      })
    }
  

    this.closeButton?.addEventListener('click', (event) => {
      console.log("hitting button");
      if (this.isCongratsVisible) {
        event.stopPropagation();
        this.hideCongrats();
      }
    });

    window.addEventListener('click', (screenEvent) => {
      console.log("hitting screen");

      if (this.isCongratsVisible && !this.congratsScreen.contains(screenEvent.target)) {
        this.hideCongrats();
      }
      
    }, true);

  },

  handleLearnMoreClick(){
    this.learnMoreButton.style.backgroundColor = '#ECECEC';
    this.learnMoreButton.style.color = '#243352';
    
    setTimeout(() =>{
      this.learnMoreButton.style.backgroundColor = '#243352';
      this.learnMoreButton.style.color = 'white';
    }, 600);

    window.open('https://subvrsive.com/work', '_blank'); // Opens in a new tab
  },


  turnOnCongrats() {

    if (this.congratsScreen) {
      this.congratsScreen.style.display = 'block';
      this.congratsScreen.style.animation = 'moveDown 1s forwards';
      console.log("congrats screen should be visible and animating");
      
      setTimeout(() => {
        this.isCongratsVisible = true;
      }, 1000);

    }
  },

  hideCongrats() {

    if (this.congratsScreen) {
      this.isCongratsVisible = false;
      this.congratsScreen.style.animation = 'moveUp 1s forwards';
      setTimeout(() => {
        this.el.sceneEl.emit('congrats-hidden');
        this.congratsScreen.style.display = 'none';
      }, 900);
    }

  }

};
