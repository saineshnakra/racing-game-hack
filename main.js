const MenuScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function MenuScene() {
    Phaser.Scene.call(this, { key: "MenuScene" });
  },
  preload: preloadMenu,
  create: createMenu,
});

let web3;
let account;

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const accounts = await web3.eth.getAccounts();
      account = accounts[0];
      console.log(`Connected to account: ${account}`);
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    console.error(
      "Non-Ethereum browser detected. You should consider trying MetaMask!"
    );
  }
}

async function pushScoreToLeaderboard(score) {
  const leaderboardContractAddress = "YOUR_LEADERBOARD_CONTRACT_ADDRESS";
  const leaderboardContractABI = [
    /* Your Leaderboard Contract ABI */
  ];

  const leaderboardContract = new web3.eth.Contract(
    leaderboardContractABI,
    leaderboardContractAddress
  );

  try {
    await leaderboardContract.methods
      .updateScore(account, score)
      .send({ from: account });
    console.log("Score pushed to leaderboard");
  } catch (error) {
    console.error("Error pushing score to leaderboard:", error);
  }
}

const SkinsScene = new Phaser.Class({
  Extends: Phaser.Scene,
  initialize: function SkinsScene() {
    Phaser.Scene.call(this, { key: "SkinsScene" });
  },
  preload: preloadSkins,
  create: createSkins,
});

function preloadSkins() {
  this.load.image("car_red", "assets/car_red_1.png");
  this.load.image("car_blue", "assets/car_blue_1.png");
  this.load.image("car_green", "assets/car_green_1.png");
}

function createSkins() {
  this.sound.stopAll(); // Stop all sounds when switching scenes
  this.add
    .image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground")
    .setDisplaySize(window.innerWidth, window.innerHeight);

  let carSkins = ["car_red", "car_blue", "car_green"];
  let selectedSkin = localStorage.getItem("selectedSkin") || "car_red";

  carSkins.forEach((skin, index) => {
    let skinButton = this.add
      .image(
        window.innerWidth / 2,
        window.innerHeight / 2 - 100 + index * 100,
        skin
      )
      .setInteractive()
      .setScale(0.5);

    skinButton.on("pointerdown", () => {
      localStorage.setItem("selectedSkin", skin);
      selectedSkin = skin;
      this.scene.start("MenuScene");
    });
  });

  let backButton = this.add
    .text(window.innerWidth / 2, window.innerHeight - 100, "Back", {
      fontSize: "32px",
      fill: "#FFFFFF",
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  backButton.on("pointerdown", () => {
    this.scene.start("MenuScene");
  });

  this.sound.add("mainBackgroundSound", { loop: true }).play();
}

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
  this.load.audio("mainBackgroundSound", "assets/main-background-sound.mp3");
}

function createMenu() {
  this.sound.stopAll(); // Stop all sounds when switching scenes
  this.add
    .image(window.innerWidth / 2, window.innerHeight / 2, "menuBackground")
    .setDisplaySize(window.innerWidth, window.innerHeight);

  let connectButton = this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2 - 100,
      "Connect Wallet",
      {
        fontSize: "64px",
        fill: "#FFFFFF",
        fontFamily: "'Creepster', cursive",
      }
    )
    .setOrigin(0.5)
    .setInteractive();

  let startButton = this.add
    .text(window.innerWidth / 2, window.innerHeight / 2, "Start Game", {
      fontSize: "64px",
      fill: "#FFFFFF", // Change color to white
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  let skinsButton = this.add
    .text(window.innerWidth / 2, window.innerHeight / 2 + 100, "Skins", {
      fontSize: "64px", // Change font size to match "Start Game" button
      fill: "#FFFFFF",
      fontFamily: "'Creepster', cursive",
    })
    .setOrigin(0.5)
    .setInteractive();

  connectButton.on("pointerdown", async () => {
    await connectWallet();
    this.sound.add("mainBackgroundSound", { loop: true }).play();
  });

  skinsButton.on("pointerdown", () => {
    this.scene.start("SkinsScene");
  });

  startButton.on("pointerdown", () => {
    if (account) {
      this.scene.start("GameScene");
      this.sound.stopAll(); // Stop all sounds when switching scenes
    } else {
      alert("Please connect your wallet first.");
    }
  });

  // Display max level below the "Skins" button
  this.add
    .text(
      window.innerWidth / 2,
      window.innerHeight / 2 + 200,
      `Max Level: ${maxLevel}`,
      {
        fontSize: "32px",
        fill: "#FFFFFF",
        fontFamily: "'Creepster', cursive",
      }
    )
    .setOrigin(0.5);

  this.sound.add("mainBackgroundSound", { loop: true }).play();
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
  this.load.audio("normalGameSound", "assets/normal-game-sound.mp3");
  this.load.audio("gasFuelSound", "assets/gas-fuel.mp3");
  this.load.audio("killscore", "assets/kill.mp3");
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
  this.sound.play("gasFuelSound");
}

function collectScore(player, scoreItem) {
  scoreItem.destroy();
  score += 1; // Increment score by 1 year
  scoreText.setText("Years: " + score);

  // Check for level-up condition
  if (score % 5 === 0) {
    levelUp.call(this);
  }

  this.sound.play("killscore");

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
  fuel.setScale(0.1); // Adjust the scale as needed
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

  this.sound.add("normalGameSound", { loop: true }).play();
}

async function endGame(message) {
  this.scene.pause();

  // Store the max level reached
  if (level > maxLevel) {
    maxLevel = level;
    localStorage.setItem("maxLevel", maxLevel);
  }

  console.log("Pushing score to leaderboard...");
  try {
    await pushScoreToLeaderboard(score);
    console.log("Score pushed successfully.");
  } catch (error) {
    console.error("Failed to push score to leaderboard:", error);
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
