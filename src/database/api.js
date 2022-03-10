import PersonList from '@database/PersonList.js'
import Person from '@database/Person.js'

export class data_api {

    getList() {
        return PersonList;
    }

}