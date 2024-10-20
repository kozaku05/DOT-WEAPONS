const weaponName1 = {
    id1: 'こん棒',
    id2: '包丁',
    id3: 'メリケンサック',
    id4: '瓶',
    id5: 'レンガ',
};
const explanation = document.getElementById("explanation");
explanation.style.display = "none";
const storage = localStorage;
let playerInfo = document.getElementById('playerInfo');
let weaponInfo = document.getElementById('weaponInfo');
// 初めてサイトに入った時
let name = storage.getItem('name');
let navigation = document.getElementById("navigation");
let info = document.getElementById('info');
if (!name) {
    navigation.style.display = "none";
    explanation.style.display = "block";
    playerInfo.style.display = "none";
    weaponInfo.style.display = 'none';
} else {
    let weaponsCount = storage.getItem("weaponsCount");
    if (!weaponsCount) {
        let message = document.createElement('h2');
        message.innerHTML = "最初の武器を獲得しました:こん棒";
        info.appendChild(message);
        storage.setItem('weaponsCount', 1);
        storage.setItem("id1", 10);
    };
    let money = storage.getItem("money");
    if (!money) {
        storage.setItem('money', 100);
        let message = document.createElement('h2');
        message.innerHTML = 'お金を手に入れた:100マネー'
        info.appendChild(message);

    };
}

// 名前の登録
function registername() {
    let name = document.getElementById("name").value;
    storage.setItem('name', name);
    location.reload();
}
if (name) {
    //プレイヤーの情報をHTMLに表示するプログラム
    let playerName = storage.getItem('name');
    let playerMoney = storage.getItem("money");
    let playerWeapons = storage.getItem('weaponsCount');

    let htmlName = document.createElement('h2');
    htmlName.innerHTML = `あなたの名前は:${playerName}さんです`

    let htmlMoney = document.createElement('h2');
    htmlMoney.innerHTML = `所持金:${playerMoney}マネー`;

    let htmlWeapons = document.createElement('h2');
    htmlWeapons.innerHTML = `あなたの武器数:${playerWeapons}`

    playerInfo.appendChild(htmlName);
    playerInfo.appendChild(htmlMoney);
    playerInfo.appendChild(htmlWeapons);

    //武器情報を取得
    for (let i = 1; i <= parseInt(playerWeapons); i++) {
        let weaponId = storage.getItem(`id${i}`)
        if (weaponId) {
            let weaponName = weaponName1[`id${i}`];
            let weaponAttack =parseInt(weaponId);
            console.log(weaponId) 
            console.log(weaponName)
            let htmlWeapon = document.createElement('h2');
            htmlWeapon.innerHTML = `ID:${i} 名前:${weaponName} 攻撃力:${weaponAttack}`;
            weaponInfo.appendChild(htmlWeapon);
        }
    }
}
//データをすべて削除
function deleteAll(){
    localStorage.clear();
    location.reload();
}
