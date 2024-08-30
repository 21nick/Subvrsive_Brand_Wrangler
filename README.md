# Subvrsive_Brand_Wrangler
Brand Wranglers is an interactive Augmentend Reality (AR) mini-game that showcases Subvrsive’s creative and technical expertise. Using their mobile devices, participants transform the cowboy artwork at Subvrsive Headquarters into an engaging brand-matching game. This experience seamlessly blends the physcial and digital worlds, creating a memorable and immersive adventure.

![4zhsw0ejy0tlasd077gcn2s1uajgo9opd0q72zhz43lwcqamij61e44l-270x480](https://github.com/user-attachments/assets/9366fb1f-fcd3-4b8d-b6e1-bc249b495339)
<img src="https://github.com/user-attachments/assets/9366fb1f-fcd3-4b8d-b6e1-bc249b495339" width="1" height="1" />
# Technical Overview
**Structure**

Body.html Logic - Controls the image target detection, and any entities that appear in the project such as the tiles.

Head.html Logic - Loads in dependencies like aframe and initializes splash screen components like interactive buttons

App.js Logic - imports and ensures that necessary components are loaded.

**Components**

Game Manager - A component that manages the tile matching game and congrats screen.

Components - A component that manages the “Explore Projects” hyperlink that appears after the experience is over.

Congrats Screen - A component that manages congrats screen functionalities.

Guide Image - A component that shows and hides the visual prompt for users to find the target image.

Splash Screen - A component that manages the display of introductory content and user interaction before accessing the main application.

Tile - A helper component that contains data for the tile and handles flipping and click events.

Background Music - A component that stops and plays the background music.

Sfxs - A component that plays different sound effects and removes it at the end.

**Legacy Code**

Flip Tile - Component that flips tile back and forth (and when applied to all tiles, any tile could flip).

Tap Turn - Legacy code for testing turning functionality for tiles when tapped.


# Attribution
- All 3D Assets created by Sam Obuobi (istarshieldsi@gmail.com)
- UX created by Victor Lopez (Vomarlopez56@gmail.com)
- UI/Creative Direction by Garrett Mixon (garrett.mixon123@gmail.com)
- Co-Development by Nick Kang (knick2432@gmail.com)
- Project Management/Co-Development by Kelly Zhang (kellyzhang324@gmail.com)
- QA by Zachary Simchak (zsimchak36@gmail.com)

--- Asset Credits ---
- Background Music created by Dio (https://open.spotify.com/artist/6Gz2pxu7naI9iZmT91AFjb?si=sSPuRC4cRHG3VHsNRQoIQw) 
- Pixabay for sound effects
- Canva imagery
- Roc Grotesk from Adobe Fonts
- The Noun Project for icons
- Figma Community for imagery (https://www.figma.com/community/file/1055542945212651633/badges-and-awards)
