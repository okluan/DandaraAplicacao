import React from "react";
import "../Vendedoresprodutores/Vendedoresprodutores.css"



import api from "../../api"
import { useEffect, useRef, useState } from 'react'

const Vendedoresprodutores = () => {

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


                        </div>

                    </div>

                ))}
            </div>


        </>

    )
}

export default Vendedoresprodutores