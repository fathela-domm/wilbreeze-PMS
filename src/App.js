import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { routes } from "./routes.module";
import { useStateValue } from "./Backend/Contexts/state-provider.module";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css';
import { adminRoutes } from "./Admin/routes";
import Page404 from "./Admin/pages/Page404";
import firebase from "./Backend/Firebase/firebase.config";
import { FirestoreService } from "./Backend/Firebase/FirebaseServices/cloud-firestore.module";
import React from "react";
import { getItem, removeOneItem } from "./Backend/local-storage-service.module";
import { authorizeUser } from "./Backend/Firebase/FirebaseServices/authorize-basic-user.module";

const user = getItem("user");
const firestore = new FirestoreService("/");

function App() {
  const [state, dispatch] = useStateValue();
  React.useLayoutEffect(() => {
    if (!user) {
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
          const { email, displayName, photoURL } = firebaseUser;
          const basicUser = {
            email: email || "",
            displayName: displayName || "",
            photoUrl: photoURL || "/static/images/avatars/avatar_12.png",
            isAdmin: false,
            isActive: true,
          }
          authorizeUser(dispatch, basicUser);
        }
      });
    }
    else {
      dispatch({
        type: "SET_USER",
        user: user,
      })
    }
  }, []);

  return (
    <div id="top-header" className="App">
      <div id="page-loader">
        <div className="loader-icon fa fa-spin colored-border"></div>
      </div>
      <Router>
        <Routes>
          {
            routes.map((route) => {
              return (
                <Route
                  key={Math.random()}
                  path={route.path}
                  element={route.element}
                />
              )
            })
          }
          <Route element={< Page404 />} path="*" />
          {
            state.user && state.user.isAdmin && (adminRoutes.map(route => <Route key={Math.random()} path={route.path} element={route.element} />))
          }
        </Routes>
      </Router>

      <div style={{ position: "fixed", bottom: "-30px", right: "0", zoom: ".9" }}>
        <WhatsAppWidget phoneNumber={state.whatsappnumber} message={`Hi \nHow can we help you? \nHelp us help you by contacting us today.`} />
      </div>
      <a style={{ position: "fixed", bottom: "0", left: "0%", width: "0%" }} className="scroll-to-top js-scroll-trigger" href="#top-header">
        <i className="fa fa-angle-up " style={{ color: "green" }}></i>
      </a>
    </div>
  );
}

export default App;
