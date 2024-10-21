// 名前が登録されてなかったときページを戻す
function backPage(){
    window.location.href = '../index.html';
}
localStorage.getItem('name')||backPage()
let money = localStorage.getItem('money');
document.getElementById('money').innerHTML=`あなたの所持金は：${money}マネー`;

//ガチャのコード
function type1(){
    if(money<800){

    }
}

function type2(){
    if(money<1000){

    }
}

function type3(){
    if(money<1000){

    }
}
