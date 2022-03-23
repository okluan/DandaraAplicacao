import React from "react"
import Header from "../../components/Header/Header"
import Apresentacao from "../../components/Apresentacao/Apresentacao"
import Navbar from "../../components/Navbar/Navbar"
import NavbarSecundaria from "../../components/NavbarSecundaria/NavbarSecundaria"
import Footer from "../../components/Footer/Footer"

const Home = () => {
    return (
        <>
            <Navbar></Navbar>
            <NavbarSecundaria />
            <Apresentacao />
            <Footer />
        </>
    )

}

export default Home