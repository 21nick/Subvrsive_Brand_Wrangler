// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './index.css'

// Register custom A-Frame components in app.js before the scene in body.html has loaded.
import {tapTurnComponent} from './tap-turn'
AFRAME.registerComponent('tap-turn', tapTurnComponent)

import {flipTileComponent} from './flip-tile'
AFRAME.registerComponent('flip-tile', flipTileComponent)

import {tileComponent} from './tile'
AFRAME.registerComponent('tile', tileComponent)

import {gameManagerComponent} from './game-manager'
AFRAME.registerComponent('game-manager', gameManagerComponent)

import {backgroundMusicComponent} from './background-music'
AFRAME.registerComponent('background-music', backgroundMusicComponent)

import {sfxsComponent} from './sfxs'
AFRAME.registerComponent('sfxs', sfxsComponent)

import {splashScreenComponent} from './splash-screen'
AFRAME.registerComponent('splash-screen', splashScreenComponent)

import {productLinkComponent} from './components'
AFRAME.registerComponent('product-link', productLinkComponent)

import {guideImageComponent} from './guide-image'
AFRAME.registerComponent('guide-image', guideImageComponent)

import {congratsScreenComponent} from './congrats-screen'
AFRAME.registerComponent('congrats-screen', congratsScreenComponent)
