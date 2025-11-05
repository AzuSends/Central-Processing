class Game extends Phaser.Scene {
    constructor() {
        super("gameScene")
    }

    preload() {
      this.load.image('cardBack', './assets/cardBack.png');
      this.gameWidth = this.sys.game.canvas.width
      this.gameHeight = this.sys.game.canvas.height


    }

    create() {
      this.add.text(this.gameWidth / 2, 75, 'Central Processing', {
        fontSize: '48px',
        fill: '#fff',
        fontFamily: 'Times New Roman',
        }).setOrigin(0.5);
      this.add.text(this.gameWidth / 4, 145, 'Occipital', {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Times New Roman',
      }).setOrigin(0.5);
      this.add.text(this.gameWidth / 2, 145, 'Auditory', {
      fontSize: '32px',
      fill: '#fff',
      fontFamily: 'Times New Roman',
      }).setOrigin(0.5);
      this.add.text(this.gameWidth * .75, 145, 'Motor', {
      fontSize: '32px',
      fill: '#fff',
      fontFamily: 'Times New Roman',
      }).setOrigin(0.5);
      this.currWordText = this.add.text(this.gameWidth / 2, 500, '', {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Times New Roman',
      }).setOrigin(0.5);
      this.add.text(this.gameWidth / 2, 450, 'Current Word:', {
        fontSize: '24px',
        fill: '#fff',
        fontFamily: 'Times New Roman',
      }).setOrigin(0.5);

      this.currWord = ""
      this.deckOccipitalWords = ["Party", "Classroom", "Dragon", "Studying", "Dancing", "Flying", "Falling", "Flamingo", "Bitting", "Puzzle", "Outer Space", "Acid", "Disco Ball"]
      this.deckAuditoryWords = ["Disco Ball", "Acid", "Bitting", "Eating", "Book", "Toddler", "Spicy", "Soccer", "Tree", "Fax Machine", "Arcade Machine", "Ace of Spades", "Chariot"]
      this.deckMotorWords = ["Moon Landing", "Rock Climbing", "Grasshopper", "Bowling Pin", "Orbit", "Wizard", "Party", "Rock n Roll", "Antartica", "Skull", "Hail", "Sandwich", "Banana Slug", ]


      this.deckOccipital =  this.add.sprite(this.gameWidth / 4,  this.gameHeight / 3, "cardBack").setInteractive();
      this.deckOccipital.scale = .15
      this.deckOccipital.on('pointerdown', () => {
        this.currWord = this.deckOccipitalWords[Math.floor(Math.random() * this.deckOccipitalWords.length)]
      })
      this.deckAuditory =  this.add.sprite(this.gameWidth / 2,  this.gameHeight / 3, "cardBack").setInteractive();
      this.deckAuditory.scale = .15
      this.deckAuditory.on('pointerdown', () => {
        this.currWord = this.deckAuditoryWords[Math.floor(Math.random() * this.deckAuditoryWords.length)]
      })

      this.deckMotor =  this.add.sprite(this.gameWidth * .75,  this.gameHeight / 3, "cardBack").setInteractive();
      this.deckMotor.scale = .15
      this.deckMotor.on('pointerdown', () => {
        this.currWord = this.deckMotorWords[Math.floor(Math.random() * this.deckMotorWords.length)]
      })


    
    }

    update() {
      this.currWordText.text = this.currWord;

    }
}