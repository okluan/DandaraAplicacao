import Formlogin from '../../components/Formlogin/Formlogin'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Vendedorlogin from '../../components/Vendedorlogin/Vendedorlogin'
import Admlogin from '../../components/Admlogin/Admlogin'
import Novoproduto from '../../components/Novoproduto/Novoproduto'
import Novovendedor from '../../components/Novovendedor/Novovendedor'
const Paginanovoproduto = () => {
    return (
        <>


            <Navbar></Navbar>
            <Novovendedor />
            <Novoproduto />

            <Footer />
        </>
    )

}

export default Paginanovoproduto