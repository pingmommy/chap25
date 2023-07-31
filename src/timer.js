//setTimeout, setInterval 함수 실습


//정해진 시간에 딱 한 번
// 2초 후에 "one shot"을 출력한다. 
//비동기방식이기때문에 12행은 함수와 상관없이 먼저 수행된다. 
setTimeout(function(){      //익명함수를 매개변수로 
	console.log("one shot")
},2000)


console.log("end")

//주어진 시간마다 반복
//비동기방식이기때문에 23행은 함수와 상관없이 먼저 수행된다. 

setInterval(()=>{
		console.log(parseInt(Math.random()*100))

	
},1000)

console.log("end")
