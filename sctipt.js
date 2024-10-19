const explanation = document.getElementById("explanation");
explanation.style.display = "none";
const storage =localStorage;
// 初めてサイトに入った時
let history = storage.getItem('history');
let name = storage.getItem('name');
if(!name){
    let navigation = document.getElementById("navigation");
    navigation.style.display ="none";
    storage.setItem('history' , 1);
    let historyCount = document.getElementById("historyCount");
    historyCount.innerHTML = '初めまして！まずはチュートリアルをお楽しみください！'
    explanation.style.display = "block";
}else{
    storage.setItem('history' , parseInt(history)+1);
    let historyCount = document.getElementById("historyCount");
    historyCount.innerHTML = `訪問回数は${parseInt(history)+1}回目です`
};

function registername(){
    let name = document.getElementById("name").value;
    storage.setItem('name',name); 
    location.reload();
}
