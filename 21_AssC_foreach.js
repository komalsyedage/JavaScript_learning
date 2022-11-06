class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS")
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro")
const emp_Rushi = new Employee(55, "Rushi", "Finance", 47000, "TCS");
const emp_Sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_Monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_Vinayak = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_Mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");
array_Employess=[emp_anil,emp_radha,emp_Rushi,emp_Sonali ,emp_Monika,emp_Vinayak,emp_Mahesh ]
console.log("==============Work in TCS company==================");
array_Employess.forEach(Employee => {
  if (Employee.emp_company=="TCS") {
    console.log(`Name:${Employee.emp_name}   company: ${Employee.emp_company} `);
  }
 });
 console.log("==============Salary greater>=50000 All Details=======");
 array_Employess.forEach(Employee => {  
 if (Employee.emp_salary>=50000) {
    console.log(`salary:${Employee.emp_salary}   Name:${Employee.emp_name}  id:${Employee.emp_id}  company: ${Employee.emp_company}  department:${Employee.emp_dept} `);
  }
 });
 console.log("============== Addition All Employees Salary =======");
 array_Employess.forEach(Employee => { 
   console.log(emp_anil.emp_salary+emp_radha.emp_salary+emp_Rushi.emp_salary+
    emp_Sonali.emp_salary+emp_Monika.emp_salary+ emp_Vinayak.emp_salary+emp_Mahesh.emp_salary);

 });
 console.log("==============Average Salary of Employees=======");
 array_Employess.forEach(Employee => {  
 var add=emp_anil.emp_salary+emp_radha.emp_salary+emp_Rushi.emp_salary+
 emp_Sonali.emp_salary+emp_Monika.emp_salary+ emp_Vinayak.emp_salary+emp_Mahesh.emp_salary
 console.log(add/7);

 });
 console.log("==============Dept=IT & HR and salary greater then 70,000=======");
 array_Employess.forEach(Employee => {  
 if (Employee.emp_dept=="HR"||Employee.emp_dept=="IT"&& Employee.emp_salary>=75000) {
    console.log(`salary:${Employee.emp_salary}   Name:${Employee.emp_name}  id:${Employee.emp_id}   company: ${Employee.emp_company}department:${Employee.emp_dept} `);
  }
 });


    
    