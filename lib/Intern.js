// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern {
    constructor(name, id, email, role, school){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
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
        role = "Intern";
    }
    getSchool(){
        school = `${this.school}`;
    }
}
module.exports = Intern;