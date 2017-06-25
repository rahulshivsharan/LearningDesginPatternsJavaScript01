var testModule = (function(){
	
	var counter = 0; // private variable

	return { // below are all public methods
		incrementCounter : function(){
			counter++;
		},
		getCounter : function(){
			return counter;
		},
		setCounter : function(num){
			counter = num;
		},
		reset : function(){
			counter = 0;
		}
	}
})();


testModule.incrementCounter();
testModule.incrementCounter();

console.log(testModule.getCounter());
testModule.incrementCounter();
console.log(testModule.getCounter());
testModule.setCounter(100);
testModule.incrementCounter();
console.log(testModule.getCounter());