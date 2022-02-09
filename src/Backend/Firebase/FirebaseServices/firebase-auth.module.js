import firebase from "../firebase.config";

class User {

    constructor(authData) {
        this.displayName = authData["displayName"]
        this.email = authData["email"]
        this.photoURL = authData["photoURL"]
        this.role = {
            user: true,
        }
    }
}