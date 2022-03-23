import Vendedoresprodutores from "../../components/Vendedoresprodutores/Vendedoresprodutores"
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"

const Produtores = () => {
    return (
        <>
            <Navbar />
            <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Produtores</h1>
            <Vendedoresprodutores />
            <Footer />
        </>)
}
export default Produtores