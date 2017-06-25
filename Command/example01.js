
// command
var carManager = {
	requestInfo : function(model,id){
		return "The car whose model is \""+model+
				"\" is having the ID of \""+id+"\" is foobar";				
	},
	buyVehical : function(model,id){
		return "You have successfully purchased vehical of model \""+model+
				"\", having ID \""+id+"\"";
	},
	arrangeViewing : function(model,id){
		return "You have successfully booked a trail for vehical"+
				" having model \""+model+"\", with ID \""+id+"\"";
	}
};

// the invoker
carManager.execute = function(commandName){
	return carManager[commandName] ? carManager[commandName].apply(carManager,[].slice.call(arguments,1)) : "INVALID COMMAND";	
}

console.log(carManager.execute("arrangeViewing","WagonR","Lxi"));
console.log(carManager.execute("buyVehical","WagonR","Lxi"));
console.log(carManager.execute("xxxx","WagonR","Lxi"));