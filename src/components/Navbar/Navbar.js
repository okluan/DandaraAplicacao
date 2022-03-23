import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <div className=" container-fluid" style={{ backgroundColor: `#d3cad6` }}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <div className="nav">
                                <div className="navLeft">
                                    <h3>Dandara.</h3>
                                </div>
                                <div className="navRight">
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/Mostruario">
                                                <a >Mostruario</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/Produtores">
                                                <a >Produtores</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/Blog">
                                                <a >Blog</a>
                                            </Link>
                                        </li>


                                        <li>
                                            <Link to="/Login">
                                                <a >Login</a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link to="/Singup">
                                                <a >SignUp</a>
                                            </Link>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )

}

export default Navbar