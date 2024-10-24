// 名前が登録されていなかったときページを戻す
function backPage() {
  window.location.href = "/";
}
localStorage.getItem("name") || backPage();

let weaponType1 = document.querySelector("#weaponType1 .weapon-container");
let weaponType2 = document.querySelector("#weaponType2 .weapon-container");
let weaponType3 = document.querySelector("#weaponType3 .weapon-container");
let information = document.getElementById("information");
information.style.display = "none";
function equip(id) {
  localStorage.setItem("equip", id);
  information.style.display = "block";
  let data = JSON.parse(localStorage.getItem(localStorage.getItem("equip")));
  information.innerHTML = `装備しました:${data.name}`;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

for (let i = 1; i < 6; i++) {
  let weapon = JSON.parse(localStorage.getItem(i));
  if (weapon) {
    let message = document.createElement("div");
    message.classList.add("weapon");
    message.innerHTML = `武器名: ${weapon.name}<br>攻撃力: ${weapon.fight}<br>追加HP: ${weapon.hp}<br>会心ダメージ: ${weapon.satisfaction}%<br><button onclick='equip(${i})'>装備</button>`;
    weaponType1.appendChild(message);
  }
}

for (let i = 6; i < 11; i++) {
  let weapon = JSON.parse(localStorage.getItem(i));
  if (weapon) {
    let message = document.createElement("div");
    message.classList.add("weapon");
    message.innerHTML = `武器名: ${weapon.name}<br>攻撃力: ${weapon.fight}<br>追加HP: ${weapon.hp}<br>会心ダメージ: ${weapon.satisfaction}%<br><button onclick='equip(${i})'>装備</button>`;
    weaponType2.appendChild(message);
  }
}

for (let i = 11; i < 16; i++) {
  let weapon = JSON.parse(localStorage.getItem(i));
  if (weapon) {
    let message = document.createElement("div");
    message.classList.add("weapon");
    message.innerHTML = `武器名: ${weapon.name}<br>攻撃力: ${weapon.fight}<br>追加HP: ${weapon.hp}<br>会心ダメージ: ${weapon.satisfaction}%<br><button onclick='equip(${i})'>装備</button>`;
    weaponType3.appendChild(message);
  }
}
