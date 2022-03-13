import { persons } from '../database/PersonList.js'
import { person } from "@/database/Person.js";
import { ref } from 'vue';
import Router from "../router";

export class data_api {

    getPersonList() {
        return persons;
    }

    addPerson(person) {
        persons.push({
            FIRSTNAME: person.FIRSTNAME,
            LASTNAME: person.LASTNAME,
            EMAIL: person.EMAIL,
            ROLE: person.ROLE
        });
        alert('Person successfully added.');
        return persons;
        // Router.push({ name: "ViewList" });
        // Router.push({ name: "Home" });
        // this.location.back;
    }
}