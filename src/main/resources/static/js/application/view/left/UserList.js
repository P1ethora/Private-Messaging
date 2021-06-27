class UserList{

    #userList;

    constructor() {
        this.#userList = createNewElement('div', 'users-list');
    }

    view() {
return this.#userList;
    }

}