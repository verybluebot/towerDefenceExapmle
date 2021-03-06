import Phaser from 'phaser';

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
        this.bg = this.game.add.sprite(0, 0, 'gamebg');
        this.bg.width = this.game.width;
        this.bg.height = this.game.height;

        this.otr = this.game.add.sprite(this.game.width / 2, 200, 'gameoverText');
        this.otr.anchor.setTo(0.5);
        this.btnPlay = this.game.add.sprite(this.game.width / 2, 300, 'btnAgain');
        this.btnPlay.anchor.setTo(0.5);
        this.btnPlay.alpha = 0;

        this.game.add.tween(this.btnPlay).to({ alpha: 1 }, 1000, Phaser.Easing.Quadratic.InOut, true, 0, 1000, true);

        this.game.input.onDown.addOnce(this.switchState, this);
    }

    switchState () {
        this.game.state.start('Game');
    }
}
