var mySingleton = (function(){
	var instance = undefined;

	return {
		getInstance : function(){
			if(instance === undefined){
				instance = init();
			}
			return instance;
		}
	};

	// called when instance is created for the
	// first time.
	function init(){

		console.log("init called. ");

		var privateVariable = "Private Variable";
		var privateNumber = parseInt(Math.random() * 1000000);

		return {
			getVariable : function(){
				return privateVariable;
			},
			getRandomNumber : function(){
				return privateNumber;
			}
		};
	}// end of init method


})();


var instances = [mySingleton.getInstance(),
				mySingleton.getInstance(),
				mySingleton.getInstance(),
				mySingleton.getInstance(),
				mySingleton.getInstance()];

for(var index = 0; index < instances.length; index++){
	console.log(instances[index].getRandomNumber());	
}
