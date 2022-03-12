export class person {
    //attributes
    person_firstname;
    person_lastname;
    person_email;
    person_role;

    constructor(firstname, lastname, email, role) {
        this.person_firstname = firstname;
        this.person_lastname = lastname;
        this.person_email = email;
        this.person_role = role;
    }
}