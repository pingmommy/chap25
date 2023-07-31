
//ramda식으로 함수를 만들어보자. 


let add = (a,b) =>{
	return a +b;
};

console.log(add(10,20))

let add2 = (a,b) => a +b;
console.log(add2(10,20))

// 매개변수가 1개 이면 () 생략가능 , 명령문이 하나이면 {}, return까지 생략가능 
let print = v => console.log(v)

//매개변수가 없다면 ()생략할 수 없다. 
let hello=()=>console.log("HelloWorld")

hello();

function pow(a,b){
	return a**b
}

console.log(pow(10,3))
console.log(pow(10)) //NaN
console.log(pow()) //NaN

//10만 넘겨줬을 때 10만 출력되게 하려면
//default파라미터를 쓴다. 
function pow2(a,b=0){  
	return a**b
}

console.log(pow(10))

//가변매개변수 
function sum(){
	console.log(arguments)
}

// args배열 방식의 가변매개변수
function sum2(...args){
	console.log(args)
}


sum(1)
sum(1,2,3)

sum2(1)
sum2(1,2,3)


