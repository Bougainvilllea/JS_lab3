function Employee(name, department, numberPhone, salary) {
    this.name = name;
    this.department = department;
    this.numberPhone = numberPhone;
    this.salary = salary;

    this.displayEmployee = function() {
        document.write(`Name: ${this.name}`, "<br>");
        document.write(`Department: ${this.department}`, "<br>");
        document.write(`Number Phone: ${this.numberPhone}`, "<br>");
        document.write(`Salary: ${this.salary}`, "<br>");
    };
}

const employeeOne = new Employee("Jon Gosling", "IT", "+12456765223", "234.445$");
employeeOne.displayEmployee();