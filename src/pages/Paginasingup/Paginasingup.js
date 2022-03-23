import Vendedores from "../../components/Vendedores/Vendedores"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import Singup from "../../components/Singup/Singup"

const Paginasingup = () => {
    return (
        <>
            <Navbar />
            <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >SignUp</h1>
            <Singup />
            <Footer />
        </>)
}
export default Paginasingup