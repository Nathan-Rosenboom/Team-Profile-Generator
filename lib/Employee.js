// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
    getName(){
        name = `${this.name}`;
    }
    getId(){
        id = `${this.id}`;
    }
    getEmail(){
        email = `${this.email}`;
    }
    getRole(){
        role = "Employee";
    }
}
module.exports = Employee
