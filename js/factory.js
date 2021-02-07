console.warn('Factory design pattern')

function Developer(name) {
    this.name = name
    this.type = "Developer"
}

function Tester(name) {
    this.name = name
    this.type = "Tester"
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name)
            case 2: 
                return new Tester(name)
        }
    }
}

function say() {
    console.log(`Hi, I am ${this.name}, and I am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employees = []

employees.push(employeeFactory.create("Patrick", 1))
employees.push(employeeFactory.create("John", 2))
employees.push(employeeFactory.create("Dan", 1))
employees.push(employeeFactory.create("Taylor", 1))
employees.push(employeeFactory.create("Jack", 2))

console.log(employees)

employees.forEach(employee => {
    // With call(), an object can use a method belonging to another object
    say.call(employee)
})