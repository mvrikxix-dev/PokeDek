import {v4 as uuid} from 'uuid'

function User(username, email, password) {
    this.id = uuid();
    this.username = username
    this.email = email
    this.password = password
    this.img = "img-url-pending"
    this.userStat = {
        backpack: [],
        charisma: 0
    }
}

export default User
