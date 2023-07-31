

class VT100{
	static clearScreen(){
		process.stdout.write("\u001B[2J")
	}
	
	static cursorMove(line,column){
		process.stdout.write(`\u001B[${line};${column}H`)
	}
	
	static setForeground(fg){
		process.stdout.write(`\u001B[${fg}m`)
	}
	
	static setBackground(bg){
		process.stdout.write(`\u001B[${bg}m`)
	}
	
	static reset(){
		process.stdout.write(`\u001B[0m`)
	}
	
	static print(str){
		process.stdout.write(str+"")
	}
	
	static println(str){
		process.stdout.write(str+"\n")
	}
}


export default VT100 // 다른 파일에서 이 클래스를 쓰려면 엑스포트를 꼭 해줘야 한다. 