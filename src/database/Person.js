export class PersonList {
    //attributes
    person_firstname;
    person_middlename;
    person_lastname;
    person_age;

    constructor(firstname, middlename, lastname, age) {
        this.person_firstname = firstname;
        this.person_middlename = middlename;
        this.person_lastname = lastname;
        this.person_age = age;
    }
}