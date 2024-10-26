// 名前が登録されていなかったときページを戻す
function backPage() {
  window.location.href = "/";
}
localStorage.getItem("name") || backPage();

let level = document.getElementById("level");
if (!localStorage.getItem("mainDungeon")) {
  level.innerHTML = "現在の階層：１";
}else{
  level.innerHTML=`現在の階層: ${localStorage.getItem('mainDungeon')}`
}
function reset() {
  localStorage.removeItem("mainDungeon");
  location.reload();
}
