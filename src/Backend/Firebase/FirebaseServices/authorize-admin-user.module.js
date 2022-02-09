import { FirestoreService } from "./cloud-firestore.module";

const firestore = new FirestoreService("/");
export const makeBasicUserAdmin = (userObject) => {
    let data = [];
    firestore.getAll()
        .then(snapshot => {
            for (let id in snapshot.val()) {
                if (id == "users") {
                    Object.keys(snapshot.val()["users"])
                        .map(key => {
                            data.push({ ...snapshot.val()[id][key], id: key })
                        });
                }
            }
        })
        .then(snapshot => {
            data.map(element => {
                if (element.email == userObject.email) {
                    userObject.isAdmin = true;
                    firestore.update("users/" + element.id, { ...userObject })
                        .catch(err => console.error(err))
                }
            })
        })
        .catch(err => console.error(err))
}