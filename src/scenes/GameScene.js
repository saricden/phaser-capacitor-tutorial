import {Scene} from 'phaser';

class GameScene extends Scene {
  constructor() {
    super("scene-game");
  }

  create() {
    // Add, scale, and make up a speed for our creature
    this.cat = this.physics.add.sprite(10, 10, 'cat-like');
    this.cat.body.setAllowGravity(false);
    this.cat.setScale(0.5);
    
    this.downX = null;
    this.downY = null;
    this.maxSpeed = 300;
    this.speedMultiplier = 1.5;

    this.input.on('pointerdown', ({ x, y }) => {
      this.downX = x;
      this.downY = y;
    });

    this.input.on('pointermove', ({ x, y }) => {
      if (this.downX !== null && this.downY !== null) {
        const dx = (x - this.downX);
        const dy = (y - this.downY);

        const vx = Math.max(Math.min(dx * this.speedMultiplier, this.maxSpeed), -this.maxSpeed);
        const vy = Math.max(Math.min(dy * this.speedMultiplier, this.maxSpeed), -this.maxSpeed);

        this.cat.body.setVelocity(vx, vy);
      }
    });

    this.input.on('pointerup', () => {
      this.downX = null;
      this.downY = null;

      this.cat.body.setVelocity(0, 0);
    });
  }

}

export default GameScene;