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