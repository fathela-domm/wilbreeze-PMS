import React from 'react'
import { Link } from 'react-router-dom';
import { getItem, removeOneItem } from "../Backend/local-storage-service.module";
import firebase from "../Backend/Firebase/firebase.config";
import { useStateValue } from "../Backend/Contexts/state-provider.module";

export function NavbarComponent(props) {
    const user = getItem("user")
    const [state, dispatch] = useStateValue()
    return (
        <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
            <Link className="navbar-brand" to="/">
                <h3>{state.company}</h3>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fa fa-bars"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <Link to="/" className="nav-link js-scroll-trigger">
                        Home
                    </Link>
                    {
                        state.user && state.user.isAdmin &&
                        <li className="nav-item ">
                            <Link to="/admin/properties" className="nav-link js-scroll-trigger">
                                Admin
                            </Link>
                        </li>
                    }
                    <li className="nav-item ">
                        <Link to="/about" className="nav-link js-scroll-trigger">
                            About
                        </Link>
                    </li>
                    <li className="nav-item ">
                        <Link to="/services" className="nav-link js-scroll-trigger">
                            Services
                        </Link>
                    </li>

                    <li className="nav-item ">
                        <Link to="/properties" className="nav-link js-scroll-trigger">
                            Properties
                        </Link>
                    </li>

                    <li className="nav-item ">
                        <Link to="/contact" className="nav-link">
                            Contact
                        </Link>
                    </li>
                    {
                        !state.user ? (
                            <li className="nav-item ">
                                <Link to="/login" className="nav-link">
                                    Login
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item ">
                                <div onClick={async () => {
                                    await firebase.auth().signOut()
                                        .then((res) => {
                                            removeOneItem("user");
                                            dispatch({
                                                type: "SET_USER",
                                                user: null
                                            });
                                            window.location.replace("/");
                                        })
                                        .catch(e => console.error(e))
                                }
                                } style={{ cursor: "pointer" }} className='nav-link'>
                                    Logout
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
        </nav>
    )
}
