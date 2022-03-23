import React from "react";
import "../Vendedores/Vendedores.css"

import pessoasnegras from "../Imagens/pessoasnegras.jpg"

import api from "../../api"
import { useEffect, useRef, useState } from 'react'

const Vendedores = () => {

    const [vendedor, setVendedor] = useState([])




    useEffect(() => {
        api.get('/vendedores').then((res) => setVendedor(res.data)).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/vendedores/${btn}`).then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }


    return (
        <>
            <div className="products " style={{ backgroundColor: `blue` }}>
                {vendedor.map(vendedor => (
                    <div className="card" key={vendedor.id}>
                        <div>

                            <img className="product-image"
                                src={vendedor.foto}
                            />
                        </div>

                        <div className="product-name ">
                            {vendedor.nome}
                        </div>

                        <div>




                            <p className="product-telefone ">
                                {vendedor.telefone}
                            </p>


                            <p className="product-email ">
                                {vendedor.email}
                            </p>





                            <p className="product-descricao pb-1">
                                {vendedor.descricao}
                            </p>


                            <div className="meubotao">
                                <button className="product-add-button"

                                    key={vendedor.id} onClick={() => deletar(vendedor.id)}>Deletar</button>
                            </div>
                        </div>

                    </div>

                ))}
            </div>


        </>

    )
}

export default Vendedores