// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, role, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
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
        role = "Manager";
    }
}
module.exports = Manager;
