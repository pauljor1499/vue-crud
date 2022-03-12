import { persons } from '../database/PersonList.js'
import { person } from "@/database/Person.js";
import { ref } from 'vue';

export class data_api {

    getPersonList() {
        return persons;
    }

    addPerson(add_firstname, add_lastname, add_email, add_role) {
        persons.push({
            firstName: add_firstname,
            lastName: add_lastname,
            email: add_email,
            role: add_role
        });
        alert('Person successfully added.');
        // this.location.back;
    }
}