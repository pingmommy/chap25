import Alpha from "./Util/Alpha.js"
import VT100 from "./Util/VT100.js"

class Blink extends Alpha{
	

	isShow=true
	
	run(){
		if(this.isShow)
		 this.show();
		else 
		 this.hide();
		
		this.isShow = !this.isShow
	}
}


VT100.clearScreen();

for(let i=0;i<10;i++){

let b= new Blink();


setInterval(()=>b.run(),parseInt(Math.random()*500+10)) // 람다식을 호출하면 b.run()이 호출됨. 람다는 setInterval이 호출

}

VT100.reset();