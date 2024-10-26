let playerInfo = document.getElementById("playerInfo");
let information = document.getElementById("information");
let nameArea = document.getElementById("nameArea");
// お知らせ書き込み
function write(data) {
  let headline = document.createElement("h2");
  headline.innerHTML = data;
  information.appendChild(headline);
}
// 名前の設定系
nameArea.style.display = "none";
if (!localStorage.getItem("name")) {
  nameArea.style.display = "block";
  playerInfo.style.display = "none";
}
function setName() {
  let name = document.getElementById("inputName").value;
  localStorage.setItem("name", name);
  localStorage.setItem("money", 800);
  localStorage.setItem("masterRank", 0);
  nameArea.style.display = "none";
  write("名前を設定しました<br>お金を800手に入れました");
  playerInfo.style.display = "block";
  getPlayerInfo();
}
// プレイヤー情報表示
function getPlayerInfo() {
  let playerName = localStorage.getItem("name");
  let playerMoney = localStorage.getItem("money");
  let masterRank = localStorage.getItem("masterRank");
  playerInfo.innerHTML = `<h1>プレイヤー情報:</h1><h2>あなたの名前:${playerName}</h2><h2>所持金:${playerMoney}</h2><h2>武器マスターランク:${masterRank}</h2>`;
}
getPlayerInfo();
function reset(){
  localStorage.clear();
  location.reload();
}
