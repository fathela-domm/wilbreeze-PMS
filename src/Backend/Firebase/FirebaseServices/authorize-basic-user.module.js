import { getItem, setItem, removeOneItem } from "../../local-storage-service.module";
import { FirestoreService } from "./cloud-firestore.module";

const firestore = new FirestoreService("/");

export const createUser = (dispatch, userObject) => {
    firestore.create("users", userObject)
        .then(res => {
            setItem("user", JSON.stringify(userObject));
            dispatch({
                type: "SET_USER",
                user: userObject,
            });
        })
        .catch(err => console.error(err));
}

export const authorizeUser = (dispatch, userObject) => {
    let data;
    let documentSnapshot = [];
    firestore.getAll()
        .then(snapshot => {
            for (let id in snapshot.val()) {
                if (id == "users") {

                    Object.keys(snapshot.val()[id])
                        .map(key => {
                            documentSnapshot.push({ ...snapshot.val()[id][key], id: key });

                            if (snapshot.val()[id][key]["email"] == userObject["email"])
                                data = { ...snapshot.val()[id][key], id: key };
                        });
                }
            }

        })
        .then(snapshot => {

            if (data) {
                setItem("user", JSON.stringify(data));
                dispatch({
                    type: "SET_USER",
                    user: data,
                });
            } else {
                createUser(dispatch, userObject)
            }


            if (documentSnapshot.length === 0) {
                createUser(dispatch, userObject)
            }
        })
        .catch(err => console.error(err));
}