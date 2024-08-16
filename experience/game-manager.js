export const gameManagerComponent = ('game-manager', {

  init() {
    // Initialize variables
    this.firstTile = null
    this.secondTile = null
    this.matchInProgress = false
    this.score = 0
    this.goalScore = 4

    const congratsEntity = document.querySelector('[congrats-screen]')

    if (congratsEntity) {
      this.congratsScreenComponent = congratsEntity.components['congrats-screen']
    }

    this.el.addEventListener('tileFlipped', (event) => {
      if (this.promptShown) {
        this.turnOffPromptOnce()
        this.promptShown = false
      }

      const tile = event.detail.el
      const tileId = event.detail.id

      if (!tileId) {
        // console.error('Tile id is null');
        return
      }

      console.log(`Tile clicked: ${tileId}`)

      if (!this.firstTile) {
        this.firstTile = tile
        console.log(`First tile set to: ${this.firstTile.id}`)
      } else if (!this.secondTile) {
        this.secondTile = tile
        console.log(`Second tile set to: ${this.secondTile.id}`)
        this.matchInProgress = true
        this.checkForMatch()
      }
    })
  },

  checkForMatch() {
    console.log(`Checking match between: ${this.firstTile?.id} and ${this.secondTile?.id}`)
    if (this.firstTile && this.secondTile) {
      if (this.firstTile.getAttribute('tile').model === this.secondTile.getAttribute('tile').model) {
        console.log('Tiles match')
        this.firstTile.components.tile.setMatched()
        this.secondTile.components.tile.setMatched()
        this.resetTilesNull()
        this.score++
        console.log(`score = ${this.score}`)
      } else {
        console.log('Tiles do not match')

        setTimeout(() => {
          if (this.firstTile) {
            console.log(`Resetting first tile: ${this.firstTile.id}`)
            this.firstTile.components.tile.resetTile()
          }

          if (this.secondTile) {
            console.log(`Resetting second tile: ${this.secondTile.id}`)
            this.secondTile.components.tile.resetTile()
          }
          // Reset the tiles after the timeout
          this.resetTilesNull()
        }, 1000)
      }
    }
    this.checkForEndGame()
  },

  checkForEndGame() {
    if (this.score >= this.goalScore && !this.congratsShown) {
      this.congratsScreenComponent?.turnOnCongrats()
    }
  },

  resetTilesNull() {
    if (this.firstTile) {
      this.firstTile = null
    }
    if (this.secondTile) {
      this.secondTile = null
    }
    this.matchInProgress = false
  },

})
