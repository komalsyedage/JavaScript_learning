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
map_Employees=[emp_anil,emp_radha,emp_Rushi,emp_Sonali ,emp_Monika,emp_Vinayak,emp_Mahesh ]
console.log("==============");
const map=new Map();
map.set(22,emp_anil);map.set(33,emp_radha)
map.set(55,emp_Rushi);map.set(66,emp_Sonali)
map.set(77,emp_Monika);map.set(88,emp_Vinayak)
map.set(99,emp_Mahesh )
map.forEach((key,value)=>{
    console.log(key,value);
})

