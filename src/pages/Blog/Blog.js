import React from "react"
import Header from "../../components/Header/Header"
import Apresentacao from "../../components/Apresentacao/Apresentacao"
import Navbar from "../../components/Navbar/Navbar"
import NavbarSecundaria from "../../components/NavbarSecundaria/NavbarSecundaria"
import Footer from "../../components/Footer/Footer"
import Conteudoblog from "../../components/Conteudoblog/Conteudoblog"

const Blog = () => {
    return (
        <>
            <Navbar></Navbar>

            <Conteudoblog />
            <Footer />
        </>
    )

}
export default Blog