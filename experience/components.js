const productLinkComponent = {
  schema: {
    text: {type: 'string'},
    href: {type: 'string'},
    targetId: {type: 'string'},
  },
  init() {
    this.imageTarget = document.querySelector('#imageTarget')  // Fixed to use querySelector without '#'
    this.scene = this.el.sceneEl.object3D
    this.camera = this.el.sceneEl.camera
    this.labelRenderer = new THREE.CSS2DRenderer()
    this.labelShownAfterCongrats = false  // Flag to control label visibility
    this.label = null

    // Set up the label renderer
    this.labelRenderer.setSize(window.innerWidth, window.innerHeight)
    this.labelRenderer.domElement.style.position = 'absolute'
    this.labelRenderer.domElement.style.top = '0px'
    this.labelRenderer.domElement.style.pointerEvents = 'none'
    document.body.appendChild(this.labelRenderer.domElement)

    // Handle model-loaded event
    this.el.addEventListener('model-loaded', () => {
      this.targetObject = this.el.sceneEl.querySelector('#product').object3D
      this.meshBounds = new THREE.Box3().setFromObject(this.targetObject)
      this.lengthMeshBounds = {
        x: Math.abs(this.meshBounds.max.x - this.meshBounds.min.x),
        y: Math.abs(this.meshBounds.max.y - this.meshBounds.min.y),
        z: Math.abs(this.meshBounds.max.z - this.meshBounds.min.z),
      }
      this.attachLabelToTarget()
    })

    // Event listener to hide the label
    const hideLabel = ({detail}) => {
      if (!this.imageTarget) return

      const imgTargetName = this.imageTarget.getAttribute('name');
      if ((imgTargetName === detail.name) && this.label) {
        this.label.style.display = 'none'
        this.label.remove();
        console.log("hiding label");
      }
    }

    // Event listener to show the label
    const showLabel = ({detail}) => {
      if (!this.imageTarget || !this.labelShownAfterCongrats) return

      const imgTargetName = this.imageTarget.getAttribute('name')
      if (imgTargetName !== detail.name) return

      if (!this.label) {
        this.createLabel()
      }

      this.label.style.display = 'flex'
    }

    // Listen for image target events
    this.el.sceneEl.addEventListener('xrimagelost', hideLabel)
    this.el.sceneEl.addEventListener('xrimagefound', showLabel)

    // Listen for the congrats-shown event
    this.el.sceneEl.addEventListener('congrats-hidden', () => {
      this.labelShownAfterCongrats = true

      // Show the label if the image target is currently visible
      if (this.imageTarget) {
        if (!this.label) {
          this.createLabel();
        }
        this.label.style.display = 'flex';
      }
    })
  },

  createLabel() {
    // Create the label only if it doesn't already exist
    if (this.label) return;

    this.label = document.createElement('div');
    this.label.className = 'label';
    this.label.id = 'pill';

    this.img = document.createElement('img');
    this.img.src = require('./assets/Brandmark_3.png');
    this.img.style.marginRight = '2vw';
    this.img.style.width = '4vw';

    this.a = document.createElement('a');
    this.a.href = this.data.href;
    this.a.target = '_blank';
    this.a.textContent = this.data.text;
    this.a.style.textDecoration = 'none';

    this.label.appendChild(this.img);
    this.label.appendChild(this.a);

    this.labelObj = new THREE.CSS2DObject(this.label);
    this.scene.add(this.labelObj);

    this.attachLabelToTarget();
  },

  attachLabelToTarget() {
    // Attach the label object to the target object
    if (this.targetObject && this.labelObj) {
      this.targetObject.add(this.labelObj)
      this.labelObj.position.set(0, this.lengthMeshBounds.y + 2, 0)
    }
  },

  tick() {
    // Render the label only if it exists
    if (this.label) {
      this.labelRenderer.render(this.scene, this.camera)
    }
  },

  remove() {
    if (this.label) {
      document.body.removeChild(this.label)
    }
  },
}

export {productLinkComponent}

