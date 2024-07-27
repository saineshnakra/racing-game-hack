const MenuScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function MenuScene() {
    Phaser.Scene.call(this, { key: "MenuScene" });
  },
  preload: preloadMenu,
  create: createMenu,
});

const GameScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function GameScene() {
    Phaser.Scene.call(this, { key: "GameScene" });
  },
  preload: preload,
  create: create,
  update: update,
});

let config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [MenuScene, GameScene],
  parent: "game-container",
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

let game = new Phaser.Game(config);

let player;
let cursors;
let obstacles;
let fuels;
let scores;
let health = 100; // Start health at 100
let fuelLevel = 10; // Fuel level starts at 100
let healthText;
let fuelText;
let score = 0;
let scoreText;
let road;
let roadWidth = 400; // Set the road width
let gameSpeed = 2; // Initial game speed
let dirtEmitter;
let level = 1; // Start at level 1
let maxLevel = localStorage.getItem("maxLevel") || 0; // Retrieve max level from local storage or set to 0 if not available

function preloadMenu() {
  this.load.image("menuBackground", "assets/menu_background.jpg");
}

function createMenu() {
  this.add
    .image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground")
    .setDisplaySize(window.innerWidth, window.innerHeight);

  let startButton = this.add
    .text(window.innerWidth / 2, window.innerHeight / 2, "Start Game", {
      fontSize: "64px",
      fill: "#ff0000",
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  startButton.on("pointerdown", () => {
    this.scene.start("GameScene");
  });

  // Display max level
  this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2 + 100,
      `Max Level: ${maxLevel}`,
      {
        fontSize: "32px",
        fill: "#FFFFFF",
        fontFamily: "'Creepster', cursive",
      }
    )
    .setOrigin(0.5);
}

function preload() {
  this.load.image("road", "assets/winter_road.png");
  this.load.image("car_red", "assets/car_red_1.png");
  this.load.image("obstacle", "assets/oil.png");
  this.load.image("fuel", "assets/fuel.png"); // Separate asset for fuel
  this.load.image("score", "assets/character_black_green.png"); // Separate asset for score
  this.load.image("blood", "assets/blood.png"); // Add blood particle image
  this.load.image("police", "assets/police.svg"); // Load the police car SVG
  this.load.image("sideBackground", "assets/side_background.jpg"); // Add side background image
}

function startGame() {
  document.getElementById("menu").style.display = "none";
  document.getElementById("game-over").style.display = "none";
  health = 100;
  fuelLevel = 10;
  score = 0;
  gameSpeed = 2;
  game.scene.start("default");
}

function update() {
  if (!this.scene.isPaused()) {
    scrollBackground();
    increaseGameSpeed();
    handlePlayerMovement();
  }
}

function scrollBackground() {
  road.tilePositionY -= gameSpeed;
}

function increaseGameSpeed() {
  gameSpeed += 0.001;
}

function handlePlayerMovement() {
  if (cursors.left.isDown && player.x > window.innerWidth / 2 - roadWidth / 2) {
    player.setVelocityX(-200);
    startDirtEmitters();
  } else if (
    cursors.right.isDown &&
    player.x < window.innerWidth / 2 + roadWidth / 2
  ) {
    player.setVelocityX(200);
    startDirtEmitters();
  } else {
    player.setVelocityX(0);
    stopDirtEmitters();
  }

  if (cursors.up.isDown) {
    player.setVelocityY(-200);
  } else if (cursors.down.isDown) {
    player.setVelocityY(200);
  } else {
    player.setVelocityY(0);
  }
}

function startDirtEmitters() {
  dirtEmitterLeft.setPosition(player.x - 20, player.y + 60);
  dirtEmitterRight.setPosition(player.x + 20, player.y + 60);
  dirtEmitterLeft.start();
  dirtEmitterRight.start();
}

function stopDirtEmitters() {
  dirtEmitterLeft.stop();
  dirtEmitterRight.stop();
}

function hitObstacle(player, obstacle) {
  const isPolice = obstacle.getData("isPolice");

  if (isPolice === true) {
    endGame.call(this, "You are arrested!");
  } else {
    health -= 10;
    healthText.setText("Health: " + health);

    if (health <= 0) {
      endGame.call(this, "Game Over! You lost all your health.");
    }
  }

  obstacle.destroy();
}

function levelUp() {
  level += 1;
  levelText.setText("Level: " + level);
  gameSpeed += 1; // Increase game speed with level

  // Store the max level reached
  if (level > maxLevel) {
    maxLevel = level;
    localStorage.setItem("maxLevel", maxLevel);
  }

  this.time.addEvent({
    delay: 2000,
    callback: () => {
      let levelUpText = this.add
        .text(window.innerWidth / 2, window.innerHeight / 2, "Level Up!", {
          fontSize: "64px",
          fill: "#ff0000",
          fontFamily: "'Creepster', cursive",
          align: "center",
        })
        .setOrigin(0.5);

      this.time.addEvent({
        delay: 1000,
        callback: () => {
          levelUpText.destroy();
        },
        callbackScope: this,
        loop: false,
      });
    },
    callbackScope: this,
    loop: false,
  });
}

function collectFuel(player, fuel) {
  fuel.destroy();
  fuelLevel = Math.min(fuelLevel + 6, 100); // Increase fuel level but cap at 100
  fuelText.setText("Fuel: " + fuelLevel);
}

function collectScore(player, scoreItem) {
  scoreItem.destroy();
  score += 1; // Increment score by 1 year
  scoreText.setText("Years: " + score);

  // Check for level-up condition
  if (score % 5 === 0) {
    levelUp.call(this);
  }

  // Add blood splash animation
  let bloodEmitter = this.add.particles("blood").createEmitter({
    x: scoreItem.x,
    y: scoreItem.y,
    speed: { min: -400, max: 400 },
    angle: { min: 0, max: 360 },
    scale: { start: 0.3, end: 0 }, // Reduce the size of the particles
    blendMode: "ADD",
    lifespan: 300, // Shorten the lifespan for quicker particles
    quantity: 10,
    tint: 0xff0000, // Set the color to red
  });
  this.time.addEvent({
    delay: 300,
    callback: () => bloodEmitter.stop(),
  });
}

function decreaseFuel() {
  fuelLevel -= 2; // Decrease fuel level
  fuelText.setText("Fuel: " + fuelLevel);

  // End game if fuel runs out
  if (fuelLevel <= 0) {
    endGame.call(this, "Game Over! You ran out of fuel.");
  }
}

function spawnObstacle() {
  let x = Phaser.Math.Between(
    window.innerWidth / 2 - roadWidth / 2 + 50,
    window.innerWidth / 2 + roadWidth / 2 - 50
  );
  let obstacleType = Phaser.Math.Between(0, 1); // Randomly decide between regular obstacle and police car
  let obstacle;

  if (obstacleType === 0) {
    obstacle = obstacles.create(x, 0, "obstacle");
  } else {
    obstacle = obstacles.create(x, 0, "police");
    obstacle.setScale(0.2); // Scale down the police car to 10% of its original size
    obstacle.setRotation(Phaser.Math.DegToRad(180)); // Rotate the car by 180 degrees

    obstacle.setData("isPolice", true); // Mark this as a police car
    console.log("Police car spawned:", obstacle.getData("isPolice"));

    let policeDirtEmitterLeft = this.add.particles("dirt").createEmitter({
      speed: { min: -50, max: 50 },
      angle: { min: 160, max: 200 },
      scale: { start: 0.2, end: 0 },
      blendMode: "ADD",
      lifespan: 300,
      quantity: 5,
      on: false,
    });

    // Add right dirt particle emitter for the police car
    let policeDirtEmitterRight = this.add.particles("dirt").createEmitter({
      speed: { min: -50, max: 50 },
      angle: { min: 160, max: 200 },
      scale: { start: 0.2, end: 0 },
      blendMode: "ADD",
      lifespan: 300,
      quantity: 5,
      on: false,
    });

    // Set the position of the dirt emitters to the back of the police car
    policeDirtEmitterLeft.startFollow(obstacle, -20, -50);
    policeDirtEmitterRight.startFollow(obstacle, 20, -50);
    policeDirtEmitterLeft.start();
    policeDirtEmitterRight.start();
  }

  obstacle.setVelocityY((200 * gameSpeed) / 2); // Adjust the speed of obstacles
}

function spawnFuel() {
  let x = Phaser.Math.Between(
    window.innerWidth / 2 - roadWidth / 2 + 50,
    window.innerWidth / 2 + roadWidth / 2 - 50
  );
  let fuel = fuels.create(x, 0, "fuel");
  fuel.setVelocityY((200 * gameSpeed) / 2); // Adjust the speed of fuels
}

function spawnScore() {
  let x = Phaser.Math.Between(
    window.innerWidth / 2 - roadWidth / 2 + 50,
    window.innerWidth / 2 + roadWidth / 2 - 50
  );
  let scoreItem = scores.create(x, 0, "score");
  scoreItem.setVelocityY((200 * gameSpeed) / 2); // Adjust the speed of score items
}

function create() {
  sideBackgroundLeft = this.add.tileSprite(
    window.innerWidth / 2 - roadWidth / 2 - 200, // Adjust position for left side
    window.innerHeight / 2,
    400,
    window.innerHeight,
    "sideBackground"
  );

  sideBackgroundRight = this.add.tileSprite(
    window.innerWidth / 2 + roadWidth / 2 + 200, // Adjust position for right side
    window.innerHeight / 2,
    400,
    window.innerHeight,
    "sideBackground"
  );

  // Add road background
  road = this.add.tileSprite(
    window.innerWidth / 2,
    window.innerHeight / 2,
    roadWidth,
    window.innerHeight,
    "road"
  );

  // Add player car
  player = this.physics.add.image(
    window.innerWidth / 2,
    window.innerHeight - 100,
    "car_red"
  );
  player.setCollideWorldBounds(true);

  // Initialize keyboard input
  cursors = this.input.keyboard.createCursorKeys();

  // Add obstacles, fuels, and scores
  obstacles = this.physics.add.group();
  fuels = this.physics.add.group();
  scores = this.physics.add.group();

  // Add collisions
  this.physics.add.collider(player, obstacles, hitObstacle, null, this);
  this.physics.add.overlap(player, fuels, collectFuel, null, this);
  this.physics.add.overlap(player, scores, collectScore, null, this);

  // Add UI elements
  healthText = this.add.text(16, 16, "Health: 100", {
    fontSize: "32px",
    fill: "#00ff00", // Green color
    fontFamily: "'Creepster', cursive",
  });

  fuelText = this.add.text(16, 50, "Fuel: 100", {
    fontSize: "32px",
    fill: "#FFFFFF", // White color
    fontFamily: "'Creepster', cursive",
  });

  scoreText = this.add.text(16, 84, "Jail Sentence: Good Citizen", {
    fontSize: "32px",
    fill: "#ff0000", // Red color
    fontFamily: "'Creepster', cursive",
  });

  // Add level text
  levelText = this.add
    .text(window.innerWidth / 2, 16, "Level: 1", {
      fontSize: "32px",
      fill: "#FFFFFF", // White color
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5);

  health = 100;
  fuelLevel = 10;
  score = 0;
  level = 1;
  gameSpeed = 2;

  // Spawn obstacles, fuels, and scores periodically
  this.time.addEvent({
    delay: 2000,
    callback: spawnObstacle,
    callbackScope: this,
    loop: true,
  });
  this.time.addEvent({
    delay: 3000,
    callback: spawnFuel,
    callbackScope: this,
    loop: true,
  });
  this.time.addEvent({
    delay: 2500,
    callback: spawnScore,
    callbackScope: this,
    loop: true,
  });

  // Decrease fuel over time
  this.time.addEvent({
    delay: 1000, // Decrease fuel every second
    callback: decreaseFuel,
    callbackScope: this,
    loop: true,
  });

  // Add dirt particle emitter
  dirtEmitterLeft = this.add.particles("dirt").createEmitter({
    speed: { min: -50, max: 50 },
    angle: { min: 160, max: 200 },
    scale: { start: 0.2, end: 0 },
    blendMode: "ADD",
    lifespan: 300,
    quantity: 5,
    on: false,
  });

  dirtEmitterRight = this.add.particles("dirt").createEmitter({
    speed: { min: -50, max: 50 },
    angle: { min: 160, max: 200 },
    scale: { start: 0.2, end: 0 },
    blendMode: "ADD",
    lifespan: 300,
    quantity: 5,
    on: false,
  });
}

function endGame(message) {
  this.scene.pause();

  // Store the max level reached
  if (level > maxLevel) {
    maxLevel = level;
    localStorage.setItem("maxLevel", maxLevel);
  }

  let gameOverText = this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2,
      message + "\nYour score: " + score,
      {
        fontSize: "48px",
        fill: "#ff0000",
        fontFamily: "'Creepster', cursive",
        align: "center",
      }
    )
    .setOrigin(0.5);

  // Display the play again button
  let playAgainButton = document.getElementById("play-again");
  playAgainButton.style.display = "block";

  playAgainButton.onclick = () => {
    // Restart the MenuScene
    this.scene.start("MenuScene");

    // Hide the play again button
    playAgainButton.style.display = "none";
  };
}
