
// and employee module which is common
var employeeModule = (function(){
	var name = "",
		address = "",
		salary = 0,		
		module = {};

	module.calculateSalary = function(unitOfWork,employeeType){
		var totalPay = 0, perDayWage = 0;
		
		if(employeeType === "CONTRACTUAL"){
			totalPay = unitOfWork * salary;
		}

		if(employeeType === "FULLTIME"){ // full time employee also get benifits
			perDayWage = salary/30;
			totalPay = (perDayWage * unitOfWork) + (perDayWage * 8); // 8 days of leaves per month
			totalPay += 2300; // monthly allowance for a fulltime employee 
		}

		return totalPay;
	}

	module.setSalary = function(_salary){
		salary = _salary;
	}

	module.getName = function(){
		return name;
	}

	module.setName = function(_name){
		name = _name;
	}

	module.getAddress = function(){
		return address;
	}

	module.setAddress = function(addr){
		address = addr;
	}

	module.init = init;

	return module;

	function init(){
		name = "Rahul";
		salary = 2500;
		address = "India";
	}	
})();


// a contractual employee module
var contractualEmployeeModule = (function(emp){
	var noOfHr = 0, payableSalary = 0; // number of hours employee worked
	var module = {};

	// number of hours an contractual employee worked 
	module.setNoOfHrWorked = function(_noOfHr){
		noOfHr = _noOfHr;
	}

	module.getTotalSalary = function(){
		payableSalary = emp.calculateSalary(noOfHr,"CONTRACTUAL");
		return payableSalary;
	}

	// salary rate for per hour work
	module.setHourlyRate = function(rate){
		emp.setSalary(rate);
	}

	module.setAddress = function(_address){
		emp.setAddress(_address);
	}

	module.setName = function(_name){
		emp.setName(_name);
	}

	module.init = function(){
		emp.init();
	}

	module.getTotalInfo = function(){
		var str = "";
		str += "Name \""+emp.getName() + "\" " +
				"living in \""+ emp.getAddress() +"\""+
				" is contractual employee has earned "+this.getTotalSalary();


		return str;
	}

	return module;

})(employeeModule);

// a fulltime employee module
var fulltimeEmployeeModule = (function(emp){
	var noOfDays = 0, payableSalary = 0; // number of hours employee worked
	var module = {};

	// number of hours an employee worked in a month 
	module.setNoOfDaysWorked = function(_noOfDays){
		noOfDays = _noOfDays;
	}

	// calculating total monthly salary
	// a fulltime employee gets
	module.getTotalSalary = function(){
		payableSalary = emp.calculateSalary(noOfDays,"FULLTIME");
		return payableSalary;
	}

	// total monthly salary an fulltime employee
	// should earn
	module.setMonthlySalary = function(salary){
		emp.setSalary(salary);
	}

	module.setAddress = function(_address){
		emp.setAddress(_address);
	}

	module.setName = function(_name){
		emp.setName(_name);
	}

	module.init = function(){
		emp.init();
	}

	module.getTotalInfo = function(){
		var str = "";
		str += "Name \""+emp.getName() + "\" " +
				"living in \""+ emp.getAddress() +"\""+
				" is a fulltime employee has earned "+this.getTotalSalary();


		return str;
	}

	return module;

})(employeeModule);


contractualEmployeeModule.setName("John William");
contractualEmployeeModule.setAddress("New York");
contractualEmployeeModule.setHourlyRate(12);
contractualEmployeeModule.setNoOfHrWorked(123);
console.log(contractualEmployeeModule.getTotalInfo());

fulltimeEmployeeModule.setName("Jack Harrison");
fulltimeEmployeeModule.setAddress("Sedney");
fulltimeEmployeeModule.setMonthlySalary(2300);
fulltimeEmployeeModule.setNoOfDaysWorked(25);
console.log(fulltimeEmployeeModule.getTotalInfo());