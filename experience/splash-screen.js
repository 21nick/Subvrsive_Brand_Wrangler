export const splashScreenComponent = {
  init() {
    this.currentSplashScreenNumber = 1
    this.totalSplashScreens = 5
    // Function to show the splash screen
    this.showSplashScreen = (screenId) => {
      const splash = document.getElementById(screenId)
      if (splash) {
        splash.style.display = 'flex'
      }
    }

    this.hideSplashScreen = (screenId) => {
      const splash = document.getElementById(screenId)
      if (splash) {
        splash.style.display = 'none'
      }
    }

    this.initializeSplashScreens = () => {
      for (let i = 1; i <= this.totalSplashScreens; i++) {
        const button = document.getElementById(`nextButton${i}`)
        if (button) {
          button.addEventListener('click', () => {
            this.hideSplashScreen(`splashScreen${this.currentSplashScreenNumber}`)
            this.currentSplashScreenNumber++
            if (this.currentSplashScreenNumber <= this.totalSplashScreens) {
              this.showSplashScreen(`splashScreen${this.currentSplashScreenNumber}`)
            }
          })
        }
      }

      const startButton = document.getElementById('startButton')
      if (startButton) {
        startButton.addEventListener('click', () => {
          const splashScreenId = `splashScreen${this.currentSplashScreenNumber}`
          this.hideSplashScreen(splashScreenId)
          const scene = document.querySelector('a-scene')
          if (scene) {
            scene.style.display = 'block'
          }
          // Ensure XR8 is ready before calling resume
          if (window.XR8 && typeof window.XR8.resume === 'function') {
            try {
              window.XR8.resume()
            } catch (error) {
              console.error('Error calling XR8.resume:', error)
            }
          } else {
            console.error('XR8 is not available or XR8.resume is not a function')
          }
        })
      }
    }

    // Function to handle XR8 events and show splash screen
    this.onxrloaded = () => {
      XR8.addCameraPipelineModule({
        name: 'splashscreen',
        onAttach: () => {
          const scene = document.querySelector('a-scene')
          scene.addEventListener('realityready', () => {
            console.log(`splashScreen${this.currentSplashScreenNumber}`)
            this.showSplashScreen(`splashScreen${this.currentSplashScreenNumber}`)
            XR8.pause()
          })
        },
      })

      this.initializeSplashScreens()
    }

    // Check if XR8 is already loaded, otherwise set up an event listener
    if (window.XR8) {
      this.onxrloaded()
    } else {
      window.addEventListener('xrloaded', this.onxrloaded)
    }
  }
}
