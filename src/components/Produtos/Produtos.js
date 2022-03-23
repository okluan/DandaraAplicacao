import React from "react";
import "../Produtos/Produtos.css"
import pessoasnegras from "../Imagens/pessoasnegras.jpg"
import api from "../../api"
import { useState, useEffect, useRef } from 'react'

const Produtos = () => {

    const [produto, setProduto] = useState([])




    useEffect(() => {
        api.get('/produtos').then((res) => setProduto(res.data)).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/produtos/${btn}`).then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }




    return (
        <>
            <div className="products " style={{ backgroundColor: `blue` }}>
                {produto.map(produto => (
                    <div className="card" key={produto.id}>
                        <div>

                            <img className="product-image"
                                src={produto.foto}
                            />
                        </div>

                        <div className="product-name ">
                            {produto.nome}
                        </div>

                        <div>




                            <p className="product-preco ">
                                {produto.preco}
                            </p>


                            <p className="product-vendedor ">
                                {produto.vendedor}
                            </p>



                            <p className="product-descricao">
                                {produto.descricao}
                            </p>

                            <div className="meubotao mb-5">
                                <button className="product-add-button "

                                    key={produto.id} onClick={() => deletar(produto.id)}>Deletar</button>
                            </div>
                        </div>

                    </div>

                ))}
            </div>
        </>

    )
}

export default Produtos