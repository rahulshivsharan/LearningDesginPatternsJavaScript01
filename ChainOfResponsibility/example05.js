var requestType = {
	"CODING" : "Coding new feature",
	"TESTING" : "Testing the coded feature",
	"DEPLOYMENT" : "Deployment of latest code in production server",
	"RELEASE" : "Releasing the new feature an informing the client",
	"SALES" : "Handle customer interaction an give a presentation of new feature to client"
}

var Employee = function(dsg,resp){
	this.senior = null;
	this.designation = dsg;
	this.responsibility = resp;
}

Employee.prototype = {
	handleRequest : function(reqType){
		if(this.responsibility === reqType){
			console.log(this.designation+" will do \""+requestType[reqType]+"\"");
		}else if(this.senior !== undefined || this.senior !== null){
			this.senior.handleRequest(reqType);
		}else{
			console.log("Invalid job responsibility ");
		}
	},
	setSenior : function(emp){
		this.senior = emp;
	}
}

var Client = function(){
	var softwareEngineer = new Employee("Software Engineer","CODING"),
		seniorSoftwareEngineer = new Employee("Sr. Software Engineer","DEPLOYMENT"),
		projectMgr = new Employee("Project Manager","RELEASE");

	softwareEngineer.setSenior(seniorSoftwareEngineer);
	seniorSoftwareEngineer.setSenior(projectMgr);

	this.srumCall = function(task){
		softwareEngineer.handleRequest(task);	
	}	 
}

Client.prototype.doRequest = function(req){
	this.srumCall(req);
};

var client = new Client();
client.doRequest("CODING");
client.doRequest("DEPLOYMENT");
client.doRequest("RELEASE");
