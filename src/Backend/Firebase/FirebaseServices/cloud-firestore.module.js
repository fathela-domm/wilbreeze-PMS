import firebase from "../firebase.config";

export class FirestoreService {
    constructor(firebaseCollection) {
        this.db = firebase.database().ref("/");
        this.getAll.bind(this);
        this.create.bind(this);
        this.update.bind(this);
        this.delete.bind(this);
    }

    getAll() {
        return this.db.once("value");
    }


    create(path, dataToInsert) {
        return this.db.child(path).push(dataToInsert);
    }

    update(path, updateData) {
        return this.db.child(path).update(updateData);
    }


    delete(path) {
        return this.db.child(path).remove();
    }
}