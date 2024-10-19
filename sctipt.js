const storage =localStorage;
// 初めてサイトに入った時
let history = storage.getItem('history');
if(!history){
    storage.setItem('history' , 1);
}else{
    storage.setItem('history' , parseInt(history)+1);
};
