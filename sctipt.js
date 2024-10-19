const explanation = document.getElementById("explanation");
explanation.style.display = "none";
const storage = localStorage;
// 初めてサイトに入った時
let name = storage.getItem('name');
let navigation = document.getElementById("navigation");
if (!name) {
    navigation.style.display = "none";
    explanation.style.display = "block";
} else {
        let weaponsCount = storage.getItem("weaponsCount");
        if (!weaponsCount) {
            let info = document.getElementById("info");
            info.innerHTML = "最初の武器を獲得しました:こん棒";
            storage.setItem('weaponsCount', 1);
            storage.setItem("id1", 10);
        };
}


function registername() {
    let name = document.getElementById("name").value;
    storage.setItem('name', name);
    location.reload();
}
