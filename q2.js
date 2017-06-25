function add(){
	var fn = function(){
		for(var index = 0; index < arguments.length; index++){
			fn.total += arguments[index];
		}
		
		return fn;
	};

	fn.total = 0;

	for(var index = 0; index < arguments.length; index++){
		fn.total += arguments[index];
	}
	
	return fn;
} // end of add 



console.log(" Total  ",add(5,5)(6).total);