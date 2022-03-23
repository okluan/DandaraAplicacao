import Formlogin from '../../components/Formlogin/Formlogin'
import Header from '../../components/Header/Header'
import NavbarSecundaria from '../../components/NavbarSecundaria/NavbarSecundaria'
import Navbar from '../../components/Navbar/Navbar'
import './Login.css'
import Produtos from "../../components/Produtos/Produtos"
import Footer from '../../components/Footer/Footer'

const Login = () => {
    return (
        <>


            <Navbar></Navbar>
            <Formlogin></Formlogin>
            <Footer />
        </>
    )

}

export default Login