// Employee Management


let employee = {

    empId : 201,
    empName : "Amit",
    department : "IT",
    salary : 40000

};

// 1. Display employee details.
console.log(employee);

// 2.Increase salary by 10%.
employee.salary = employee.salary + (employee.salary * 10/100);

//3. Add a property `experience`.
employee.experience = "5 Years";

// 4. Delete the `department` property.
delete employee.department;

//5.  Create a method `showDetails()` to display employee information.
employee.showDetails = function(){

    console.log(this);

};

employee.showDetails();