
// 함수를 만드는 방법 - 3가지가 있다. 


//1.선언적 함수  - 먼저 선언하고 정의를 나중에 해도 상관없다. 호출도 위치가 어디든 상관없다.  
main();

function main(){
	
	console.log("main ....")
}


//2.익명함수 - 변수처럼 만들어진 함수여서 만들어진 후에 호출할 수 있다. 
let add = function(a,b){
	return a+b;
}

console.log(add(10,20))

//arrow함수 (람다)
let mul = (a,b) =>a*b  // 키워드없이 arrow 처리 인스턴스로 쓰는 익명함수를 만들 때 ()=>{} 이런 식으로 작성할 수 있다. 
console.log(mul(10,20))



//결과값은 모두 function
console.log(typeof main)
console.log(typeof add)
console.log(typeof mul)

//함수도 객체이고 값이기 때문에 문자열로 출력됨. 
console.log(main)
console.log(add)
console.log(mul)