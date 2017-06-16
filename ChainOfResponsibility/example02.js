var AddNum = function(n){
	this.num = (n !== undefined) ? n : 0;
};

AddNum.prototype = {
	add : function(n){
		this.num += (n !== undefined) ? n : 0;
		return this;
	},
	getTotal : function(){
		return this.num;
	}
}

var f = new AddNum();
console.log(f.add(23).add(10).add(4).getTotal());

f = new AddNum(100);
console.log(f.add(123).add(10).getTotal());