import Produtosmostruario from "../../components/Produtosmostruario/Produtosmostruario"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Mostruario = () => {
    return (
        <>
            <Navbar />
            <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Mostruário</h1>
            <Produtosmostruario />
            <Footer />
        </>)
}
export default Mostruario