/*
	This is a problem given to me in morgan stanley.
	This below code feels like chain of resposibility pattern.	
*/

var addNum = function(num){	
	
	var fn = function(n){
		fn.total += n;

		return fn;	
	};

	fn.total = num;

	return fn;
};

console.log(addNum(4)(5).total);

