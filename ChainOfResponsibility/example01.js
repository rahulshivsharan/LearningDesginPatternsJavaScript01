var Request = function(amt){
	this.amount = (amt === undefined) ? 0 : amt;
}

Request.prototype = {
	add : function(num){
		this.amount += num;
		return this;
	},
	getTotal : function(){
		return this.amount;
	}
}


var myReq = new Request(100);
console.log(" Total "+myReq.add(200).getTotal());

myReq = new Request();
console.log(" Total "+myReq.add(200).add(-50).add(20).getTotal());