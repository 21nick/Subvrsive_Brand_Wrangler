export const guideImageComponent = {
  init() {
    const guideImage = document.querySelector('#muralPrompt');
    const imageTarget = document.querySelector('#imageTarget');
  
    const hideImage = ({detail}) => {
      const imgTargetName = imageTarget.getAttribute('name');
    
      if (imgTargetName !== detail.name) {
        console.log(`image target name = ${imgTargetName}, detail name = ${detail.name}`)
        return
      }
      guideImage.style.display = 'none';
    }

    const showImage = ({detail}) => {
      const imgTargetName = imageTarget.getAttribute('name');

      if (imgTargetName !== detail.name || this.isGameEnded()) {
        return
      }
      guideImage.style.display = 'block';
    }

    this.el.sceneEl.addEventListener('xrimagefound', hideImage);
    this.el.sceneEl.addEventListener('xrimagelost', showImage);

  },

  isGameEnded(){
    const gameManagerComponent = this.el.sceneEl.components['game-manager'];
    return (gameManagerComponent.score >= gameManagerComponent.goalScore);

  }


  

};
