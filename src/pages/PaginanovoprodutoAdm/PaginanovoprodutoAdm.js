import Formlogin from '../../components/Formlogin/Formlogin'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Vendedorlogin from '../../components/Vendedorlogin/Vendedorlogin'
import Admlogin from '../../components/Admlogin/Admlogin'
import NovoprodutoAdm from '../../components/NovoprodutoAdm/NovoprodutoAdm'
import NovovendedorAdm from '../../components/NovovendedorAdm/NovovendedorAdm'
import Vendedores from '../../components/Vendedores/Vendedores'
import Produtos from '../../components/Produtos/Produtos'
import Vendedoresvendedor from '../../components/Vendedoresvendedor/Vendedoresvendedor'
import Produtosvendedor from '../../components/Produtosvendedor/Produtosvendedor'

const PaginanovoprodutoAdm = () => {
    return (
        <>


            <Navbar></Navbar>

            <div className='container align-items-center pt-5'>
                <div class="row align-items-center">
                    <div class="col"> <h1 class=" align-items-center">Seção Vendedor</h1></div>
                </div>




            </div>

            <Vendedoresvendedor />
            <NovovendedorAdm />
            <Vendedores />

            <div className='container align-items-center pt-5'>
                <div class="row align-items-center">
                    <div class="col"> <h1 class=" align-items-center">Seção Produto</h1></div>
                </div>
            </div>
            <Produtosvendedor />
            <NovoprodutoAdm />
            <Produtos />

            <Footer />
        </>
    )

}

export default PaginanovoprodutoAdm