export function saveData(data){
localStorage.setItem("weather",JSON.stringify(data));
}

export function getData(){
return JSON.parse(localStorage.getItem("weather"));
}