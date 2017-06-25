var myModule = (function(){


	var name = "", // private variables
		address = "", // private variables
		obj = {}; 

	var init = init; // private method

	// public methods
	obj.setName = function(_name){
		name = _name;
	}

	obj.setAddress = function(addr){
		address = addr;
	}

	obj.getInfo = function(){
		var str = 	" The Name is \""+name+"\"" +
					", stays at \""+address+"\"";
		return str;				
	}

	obj.reset = function(){
		init();
	}

	return obj;

	// private method
	function init(){
		name = "Rahul Shivsharan";
		address = "Mumbai";
	}
})();

myModule.setName("Mehul Shah");
myModule.setAddress("Kurla West");

console.log(myModule.getInfo());
myModule.reset();
console.log(myModule.getInfo());