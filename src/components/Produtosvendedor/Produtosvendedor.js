import React from "react";
import "../Produtos/Produtos.css"
import pessoasnegras from "../Imagens/pessoasnegras.jpg"
import api from "../../api"
import { useState, useEffect, useRef } from 'react'

const Produtosvendedor = () => {

    const [produtovendedor, setProdutovendedor] = useState([])




    useEffect(() => {
        api.get('/produtosvendedor').then((res) => setProdutovendedor(res.data)).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/produtosvendedor/${btn}`).then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }




    return (
        <>
            <div className="products" style={{ backgroundColor: `black` }}>
                {produtovendedor.map(produtovendedor => (
                    <div className="card" key={produtovendedor.id}>
                        <div>

                            <img className="product-image"
                                src={produtovendedor.foto}
                            />
                        </div>

                        <div className="product-name ">
                            {produtovendedor.nome}
                        </div>

                        <div>




                            <p className="product-preco ">
                                {produtovendedor.preco}
                            </p>


                            <p className="product-vendedor ">
                                {produtovendedor.vendedor}
                            </p>



                            <p className="product-descricao">
                                {produtovendedor.descricao}
                            </p>

                            <div className="meubotao mb-5">
                                <button className="product-add-button "

                                    key={produtovendedor.id} onClick={() => deletar(produtovendedor.id)}>Deletar</button>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </>

    )
}

export default Produtosvendedor