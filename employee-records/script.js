const employees = [] 


function Employee(name, jobTitle, salary){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = 'Full Time'
    this.printEmployeeForm = function(){
        let employee = {
            name: this.name,
            jobTitle: this.jobTitle,
            salary: this.salary,
            status: this.status
        }
        return employee
    }
}


//instantiate
let employeeOne = new Employee('Greg', 'Writer', '$100,000', status)
let employeeTwo = new Employee('Phil', 'Producer/Director', '$150,000', status)
let employeeThree = new Employee('Ashlee', 'Director of Photography', '$90,000', status)

employeeThree.status = 'Part Time.'

employees.push(employeeOne.printEmployeeForm(),
employeeTwo.printEmployeeForm(),
employeeThree.printEmployeeForm())
console.log(employees)
