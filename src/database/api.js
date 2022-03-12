import { persons } from '../database/PersonList.js'
import { person } from "@/database/Person.js";
import { ref } from 'vue';

export class data_api {

    new_person = {};

    getPersonList() {
        return persons;
    }

    addPerson(add_name, add_lastname, add_email, add_role) {
        persons.push({ firstName: add_name, lastName: add_lastname, email: add_email, role: add_role })
        alert('Employee successfully added.');
        // this.location.back;
    }
}