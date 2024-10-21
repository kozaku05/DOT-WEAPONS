// 名前が登録されてなかったときページを戻す
function backPage() {
  window.location.href = "/";
}
localStorage.getItem("name") || backPage();
let money = localStorage.getItem("money");
document.getElementById("money").innerHTML = `あなたの所持金は：${money}マネー`;
let weapons = fetch("/weapon.json").then((response) => response.json());
console.log(weapons);
//ガチャのコード
function type1() {
  if (money < 800) {
  }
}

function type2() {
  if (money < 1000) {
  }
}

function type3() {
  if (money < 1000) {
  }
}
