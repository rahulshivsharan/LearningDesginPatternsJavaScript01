var Manager = function(limit,postName){
	this.leavesApprovalLimit = limit; // total leaves this person can approve of his juniors
	this.senior = null; // his senior mapping
	this.postName = postName; // post of current manager
};

Manager.prototype = {
	/*
		if current employee is having an authority to approve
		the applied leaves of Junior, he will approve it
		or else will pass on the approval request to his senior.
	*/
	approveLeavesRequest : function(totalLeavesWant){
		var totalLeavesCanBeApproved = 0;
		
		if(this.leavesApprovalLimit < totalLeavesWant){
			if(this.senior === undefined || this.senior === null){
				console.log(this.postName+" will be disscussing for approval of "+totalLeavesWant+" leaves request");
			}else{
				console.log(this.postName+" forwarded request to \""+this.senior.postName+"\"");
				this.senior.approveLeavesRequest(totalLeavesWant);	
			}
			
		}else{
			console.log(this.postName+" is approving in total "+totalLeavesWant+" leaves");
		}

	},
	// setting the senior of the current designated employee 
	setSenior : function(senior){
		this.senior = senior;
	}
};

var EmployeePortal = function(){
	var assistanceMgr = new Manager(3,"Assistant Manager"),
		manager = new Manager(7,"Manager"),
		seniorManager = new Manager(20,"Senior Manager"),
		vicePrs = new Manager(0,"Vice President");

	// setting chain of resposibility	
	assistanceMgr.setSenior(manager); // setting "manager" as senior of "asst. manager"
	manager.setSenior(seniorManager); // setting "sr. manager" as senior of "manager"
	seniorManager.setSenior(vicePrs); // setting "VP" as senior of "sr. manager"	

	this.senior = assistanceMgr;	
};

EmployeePortal.prototype.applyLeave = function(leaves){
	console.log("WANT IN TOTAL "+leaves+" LEAVES");
	this.senior.approveLeavesRequest(leaves);
};

var portal = new EmployeePortal();
portal.applyLeave(13);
portal.applyLeave(25);
portal.applyLeave(3);