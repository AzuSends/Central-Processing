class Game extends Phaser.Scene {
    constructor() {
        super("gameScene")
    }

    preload() {
      this.load.image('cardBack', './assets/cardBack.png');
    }

    create() {
      this.deckOccipitalWords = ["o1", "o2", "o3"]
      this.deckAuditoryWords = ["a1", "a2", "a3"]
      this.deckMotorWords = ["m1", "m2", "m3"]


      this.deckOccipital =  this.add.sprite(300, 300, "cardBack").setInteractive();
      this.deckOccipital.scale = .15
      this.deckOccipital.on('pointerdown', () => {
        console.log("clicked occipital")
      })
      this.deckAuditory =  this.add.sprite(500, 300, "cardBack").setInteractive();
      this.deckAuditory.scale = .15
      this.deckAuditory.on('pointerdown', () => {
        console.log("clicked Auditory")
      })

      this.deckMotor =  this.add.sprite(700, 300, "cardBack").setInteractive();
      this.deckMotor.scale = .15
      this.deckMotor.on('pointerdown', () => {
        console.log("clicked Motor")
      })


    
    }

    update() {


    }
}