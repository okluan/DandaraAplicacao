import React from "react";
import "../Vendedoresvendedor/Vendedoresvendedor.css"

import pessoasnegras from "../Imagens/pessoasnegras.jpg"

import api from "../../api"
import { useEffect, useRef, useState } from 'react'

const Vendedoresvendedor = () => {

    const [vendedorvendedor, setVendedorvendedor] = useState([])




    useEffect(() => {
        api.get('/vendedoresvendedor').then((res) => setVendedorvendedor(res.data)).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/vendedoresvendedor/${btn}`).then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }


    return (
        <>
            <div className="products " style={{ backgroundColor: `black` }}>
                {vendedorvendedor.map(vendedorvendedor => (
                    <div className="card" key={vendedorvendedor.id}>
                        <div>

                            <img className="product-image"
                                src={vendedorvendedor.foto}
                            />
                        </div>

                        <div className="product-name ">
                            {vendedorvendedor.nome}
                        </div>

                        <div>




                            <p className="product-telefone ">
                                {vendedorvendedor.telefone}
                            </p>


                            <p className="product-email ">
                                {vendedorvendedor.email}
                            </p>





                            <p className="product-descricao pb-1">
                                {vendedorvendedor.descricao}
                            </p>


                            <div className="meubotao">
                                <button className="product-add-button"

                                    key={vendedorvendedor.id} onClick={() => deletar(vendedorvendedor.id)}>Deletar</button>
                            </div>
                        </div>

                    </div>

                ))}
            </div>


        </>

    )
}

export default Vendedoresvendedor