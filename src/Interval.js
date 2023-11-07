

let id = setInterval(()=>console.log(Math.random()*10),1000)

//setInterval 중지시키는 메소드 
//clearInterval(id) 


setTimeout(()=>clearInterval(id),10000)

