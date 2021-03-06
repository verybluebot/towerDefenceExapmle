import Phaser from 'phaser';

export default class SimplePool extends Phaser.ArraySet {
    constructor (objectFactory) {
        super();

        this.makeObject = objectFactory;
    }

    get () {
        const obj = this.getFirstDead();
        if (obj) return obj;
        else return this.makeObject();
    }

    prewarm (amount) {
        for (let i = 0; i < amount; i++) {
            this.add( this.makeObject() );
        }
    }

    getFirstDead () {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].poolDead) {
                return this.list[i];
            }
        }

        return null;
    }
}
