// 装備武器がないなら入れなくする
if (!localStorage.getItem("equip")) {
  location.href = "/equipment";
  alert("装備がありません");
}
// 敵のデータ
let enemyData = {
  enemies: {
    1: {
      name: "スライム",
      health: 30,
      attack: 5,
      description: "柔らかくて、簡単に倒せる敵。",
    },
    2: {
      name: "ゴーレム",
      health: 70,
      attack: 15,
      description: "硬い石でできた巨大な敵。",
    },
    3: {
      name: "ゴースト",
      health: 40,
      attack: 10,
      defense: 1,
      description: "幽霊のように見える敵。少し手強い。",
    },
    4: {
      name: "石油王",
      health: 150,
      attack: 20,
      description: "お金を大量に持っている富豪の敵。超低確率",
    },
  },
};
// ダンジョンに入ったことがないなら追加する
if (!localStorage.getItem("mainDungeon")) {
  localStorage.setItem("mainDungeon", 1);
}
// log
let liveCommentary = document.getElementById("liveCommentary");
function log(log) {
  let message = document.createElement("p");
  message.innerHTML = log;
  liveCommentary.appendChild(message);
  liveCommentary.scrollTop = liveCommentary.scrollHeight;
}
// 敵の抽選
let enemy1, enemy2, enemy3;
let oilKing = Math.floor(Math.random() * 100) + 1;
console.log(oilKing);
if (oilKing !== 100) {
  enemy1 = Math.floor(Math.random() * 3) + 1;
  enemy2 = Math.floor(Math.random() * 3) + 1;
  enemy3 = Math.floor(Math.random() * 3) + 1;
} else {
  enemy1 = 4;
}
console.log(enemyData.enemies[enemy1].name);
console.log(enemyData.enemies[enemy2].name);
console.log(enemyData.enemies[enemy3].name);
log(`出現: ${enemyData.enemies[enemy1].name}が現れた！`);
log(`出現: ${enemyData.enemies[enemy2].name}が現れた！`);
log(`出現: ${enemyData.enemies[enemy3].name}が現れた！`);
//ダンジョン回数によって敵のステータス1.1倍
let hp1 = parseInt(enemyData.enemies[enemy1].health);
let fight1 = parseInt(enemyData.enemies[enemy1].attack);
let hp2 = parseInt(enemyData.enemies[enemy2].health);
let fight2 = parseInt(enemyData.enemies[enemy2].attack);
let hp3 = parseInt(enemyData.enemies[enemy3].health);
let fight3 = parseInt(enemyData.enemies[enemy3].attack);
let dungeon = parseInt(localStorage.getItem("mainDungeon"));
let pow = 1.0;
for (let i = 0; i < dungeon; i++) {
  pow *= 1.1;
}
hp1 = Math.floor(hp1 * pow);
fight1 = Math.floor(fight1 * pow);
hp2 = Math.floor(hp2 * pow);
fight2 = Math.floor(fight2 * pow);
hp3 = Math.floor(hp3 * pow);
fight3 = Math.floor(fight3 * pow);
console.log(hp1, hp2, hp3);
console.log(fight1, fight2, fight3);

let equipWeapon = JSON.parse(
  localStorage.getItem(localStorage.getItem("equip"))
);
console.log(equipWeapon);

//ユーザー情報
let playerInfo = document.getElementById("playerInfo");
let playerHp = document.createElement("p");
let playerFight = document.createElement("p");
let playerSatisfaction = document.createElement("p");
let hp = parseInt(equipWeapon.hp);
playerHp.innerHTML = `自分のHP: ${hp}`;
playerFight.innerHTML = `攻撃力: ${equipWeapon.fight}`;
playerSatisfaction.innerHTML = `会心ダメージ: ${equipWeapon.satisfaction}%`;
playerInfo.appendChild(playerHp);
playerInfo.appendChild(playerFight);
playerInfo.appendChild(playerSatisfaction);
// 敵の攻撃
function damage() {
  if (enemy1Defeated == false) {
    let probability1 = Math.floor(Math.random() * 2) + 1;
    if (probability1 == 2) {
      hp -= fight1;
      log(`ダメージを食らった${fight1}`);
      playerHp.innerHTML = `自分のHP: ${hp}`;
      checkHp();
    }
  }
  if (enemy2Defeated == false) {
    let probability2 = Math.floor(Math.random() * 2) + 1;
    if (probability2 == 2) {
      hp -= fight2;
      log(`ダメージを食らった${fight2}`);
      playerHp.innerHTML = `自分のHP: ${hp}`;
      checkHp();
    }
  }
  if (enemy3Defeated) {
    let probability3 = Math.floor(Math.random() * 2) + 1;
    if (probability3 == 2) {
      hp -= fight3;
      log(`ダメージを食らった${fight3}`);
      playerHp.innerHTML = `自分のHP: ${hp}`;
      checkHp();
    }
  }
  operation.style.display = "block";
  option.style.display = "none";
}
let operation = document.getElementById("operation");
let option = document.getElementById("option");

let enemy_1 = document.createElement("button");
enemy_1.textContent = `${enemyData.enemies[enemy1].name}に攻撃`;
let enemy_2 = document.createElement("button");
enemy_2.textContent = `${enemyData.enemies[enemy2].name}に攻撃`;
let enemy_3 = document.createElement("button");
enemy_3.textContent = `${enemyData.enemies[enemy3].name}に攻撃`;

function fight() {
  option.style.display = "block";
  operation.style.display = "none";
  enemy_1.onclick = function () {
    hp1 -= parseInt(equipWeapon.fight);
    if (Math.floor(Math.random() * 2) + 1 == 2) {
      hp1 -= Math.floor((equipWeapon.fight * equipWeapon.satisfaction) / 100);
      log(`会心ダメージが入った`);
    }
    log(
      `攻撃: ${enemyData.enemies[enemy1].name}に${equipWeapon.fight}ダメージを与えた！`
    );
    checkDefeat();
    damage();
  };

  enemy_2.onclick = function () {
    hp2 -= parseInt(equipWeapon.fight);
    if (Math.floor(Math.random() * 2) + 1 == 2) {
      hp2 -= Math.floor((equipWeapon.fight * equipWeapon.satisfaction) / 100);
      log(`会心ダメージが入った`);
    }
    log(
      `攻撃: ${enemyData.enemies[enemy2].name}に${equipWeapon.fight}ダメージを与えた！`
    );
    checkDefeat();
    damage();
  };

  enemy_3.onclick = function () {
    hp3 -= parseInt(equipWeapon.fight);
    if (Math.floor(Math.random() * 2) + 1 == 2) {
      hp3 -= Math.floor((equipWeapon.fight * equipWeapon.satisfaction) / 100);
      log(`会心ダメージが入った`);
    }
    log(
      `攻撃: ${enemyData.enemies[enemy3].name}に${equipWeapon.fight}ダメージを与えた！`
    );
    checkDefeat();
    damage();
  };
  option.appendChild(enemy_1);
  option.appendChild(enemy_2);
  option.appendChild(enemy_3);
}
function information() {
  if (enemy1Defeated == false) {
    log(`情報: ${enemyData.enemies[enemy1].name}のHP:${hp1} 攻撃力:${fight1}説明:${enemyData.enemies[enemy1].description}`);
  }
  if (enemy2Defeated == false) {
    log(`情報: ${enemyData.enemies[enemy2].name}のHP:${hp2} 攻撃力:${fight2} 説明:${enemyData.enemies[enemy1].description}`);
  }
  if (enemy3Defeated == false) {
    log(`情報: ${enemyData.enemies[enemy3].name}のHP:${hp3} 攻撃力:${fight3} 説明:${enemyData.enemies[enemy1].description}`);
  }
}
function runAway() {
  location.href = "../";
}
let kill = 0;
let enemy1Defeated = false;
let enemy2Defeated = false;
let enemy3Defeated = false;
function checkDefeat() {
  if (hp1 <= 0 && !enemy1Defeated) {
    log(`情報: ${enemyData.enemies[enemy1].name}を倒した`);
    kill += 1;
    enemy1Defeated = true;
    enemy_1.style.display='none'
    enemy_1.disabled = true;
  }
  if (hp2 <= 0 && !enemy2Defeated) {
    log(`情報: ${enemyData.enemies[enemy2].name}を倒した`);
    kill += 1;
    enemy2Defeated = true;
    enemy_2.style.display='none'
    enemy_2.disabled = true;
  }
  if (hp3 <= 0 && !enemy3Defeated) {
    log(`情報: ${enemyData.enemies[enemy3].name}を倒した`);
    kill += 1;
    enemy3Defeated = true;
    enemy_3.style.display='none'
    enemy_3.disabled = true;
  }
  if (kill == 3) {
    operation.style.display = "none";
    option.style.display = "none";
    log("すべての敵を倒した！");
    let money = parseInt(localStorage.getItem("money"));
    let addMoney = Math.floor(Math.random() * 500) + 1;
    money += addMoney;
    localStorage.setItem("money", money);
    log(`${addMoney}マネーを手に入れた！`);
    localStorage.setItem(
      "mainDungeon",
      parseInt(localStorage.getItem("mainDungeon")) + 1
    );
    setTimeout(() => {
      location.href = "../";
    }, 2000);
  }
}
function checkHp() {
  if (hp <= 0) {
    operation.style.display = "none";
    option.style.display = "none";
    log("あなたは倒れた");
    let money = parseInt(localStorage.getItem("money"));
    money -= 100;
    if (money < 0) {
      money = 0;
    }
    localStorage.setItem("money", money);
    log(`100マネーを失った`);
    setTimeout(() => {
      location.href = "/";
    }, 2000);
  }
}
