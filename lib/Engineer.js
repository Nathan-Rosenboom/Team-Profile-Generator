// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer {
    constructor(name, id, email, role, github){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
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
        role = "Engineer";
    }
    getGithub(){
        github = `${this.github}`;
    }
}
module.exports = Engineer;