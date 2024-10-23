// 名前が登録されていなかったときページを戻す
function backPage() {
  window.location.href = "/";
}
localStorage.getItem("name") || backPage();
// 武器種類
const weaponsTypes = {
  type1: {
    1: ["バランスソード"],
    2: ["重厚な盾"],
    3: ["標準の槍"],
    4: ["安定した斧"],
    5: ["堅実な短剣"],
  },
  type2: {
    6: ["ヒーリングスタッフ"],
    7: ["ライフボウ"],
    8: ["リカバリーソード"],
    9: ["ウェルネスハンマー"],
    10: ["ヒールクレイモア"],
  },
  type3: {
    11: ["強力な剣"],
    12: ["猛撃の斧"],
    13: ["強打の弓"],
    14: ["高威力ハンドガン"],
    15: ["強襲ライフル"],
  },
};
// 必要なものを取得
let money = localStorage.getItem("money");
document.getElementById("money").innerHTML = `あなたの所持金は：${money}マネー`;
let gachaArea = document.getElementById("Gacha");
let masterRank = localStorage.getItem("masterRank");
let information = document.getElementById("information");
//ガチャのコード
function gacha(type, cost, maxFight, maxHp, maxsatisfaction) {
  if (cost > money) {
    alert("マネーが足りません");
    return;
  }
  gachaArea.style.display = "none";
  localStorage.setItem("money", parseInt(money) - cost);
  let weapon;
  if (type == "type1") {
    weapon = Math.floor(Math.random() * 5) + 1;
  } else if (type == "type2") {
    weapon = Math.floor(Math.random() * 5) + 6;
  } else {
    weapon = Math.floor(Math.random() * 5) + 11;
  }
  let weaponName = weaponsTypes[type][weapon][0];
  let fight = Math.floor(Math.random() * maxFight) + 1;
  let hp = Math.floor(Math.random() * maxHp) + 1;
  let satisfaction = Math.floor(Math.random() * maxsatisfaction) + 1;
  let result = JSON.stringify({
    name: weaponName,
    fight: fight,
    hp: hp,
    satisfaction: satisfaction,
  });
  console.log(result);
  if (!localStorage.getItem(weapon)) {
    localStorage.setItem(weapon, result);
    let weaponInfo = JSON.parse(localStorage.getItem(weapon));
    information.innerHTML = `<h2>新しい武器を獲得しました${weaponInfo.name}</h2><h2>攻撃力:${weaponInfo.fight}</h2><h2>追加HP:${weaponInfo.hp}</h2><h2>会心ダメージ:${weaponInfo.satisfaction}%</h2><button onclick='location.reload()'>OK</button>`;
  } else {
    let weaponInfo = JSON.parse(localStorage.getItem(weapon));
    information.innerHTML = `<h2>同じ武器を獲得しました${weaponInfo.name}</h2><h2>以前のステータス</h2><h2>攻撃力:${weaponInfo.fight}</h2><h2>追加HP:${weaponInfo.hp}</h2><h2>会心ダメージ:${weaponInfo.satisfaction}%</h2><br><h2>今回のステータス</h2><h2>攻撃力:${fight}</h2><h2>追加HP:${hp}</h2><h2>会心ダメージ:${satisfaction}%</h2><button onclick='swap(${weapon},${result})'>武器を変える</button><button onclick='location.reload()'>キャンセル</button>`;
  }
}
function swap(weapon, result) {
  let data = JSON.stringify(result);
  localStorage.setItem(weapon, data);
  location.reload();
}
function type1() {
  if (masterRank == 0) {
    gacha("type1", 800, 10000, 10000, 5);
  } else if (masterRank == 1) {
    gacha("type1", 800, 100000, 300000, 15);
  } else if (masterRank == 2) {
    gacha("type1", 800, 300000, 700000, 15);
  } else {
    gacha("type1", 800, 800000, 1500000, 30);
  }
}
function type2() {
  if (masterRank == 0) {
    gacha("type2", 1000, 10000, 10000, 5);
  } else if (masterRank == 1) {
    gacha("type2", 1000, 100000, 300000, 15);
  } else if (masterRank == 2) {
    gacha("type2", 1000, 300000, 700000, 15);
  } else {
    gacha("type2", 1000, 700000, 2000000, 20);
  }
}
function type3() {
  if (masterRank == 0) {
    gacha("type3", 1000, 10000, 10000, 5);
  } else if (masterRank == 1) {
    gacha("type3", 1000, 100000, 300000, 15);
  } else if (masterRank == 2) {
    gacha("type3", 1000, 300000, 700000, 15);
  } else {
    gacha("type3", 1000, 1200000, 1000000, 50);
  }
}
