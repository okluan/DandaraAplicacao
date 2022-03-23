import React from "react";
import { Link } from "react-router-dom";
import api from "../../api"
import { useState, useEffect, useRef } from 'react'

const Novoproduto = () => {


    const [produtovendedor, setProdutovendedor] = useState([])
    const btn = useRef()


    useEffect(() => {
        api.get('/produtosvendedor').then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/produtosvendedor/${btn.target.value}`).then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }

    const nome = useRef()
    const preco = useRef()
    const foto = useRef()
    const vendedor = useRef()
    const descricao = useRef()


    function enviarDados(event) {

        event.preventDefault()
        api.post('/produtosvendedor/', {
            nome: nome.current.value,
            preco: preco.current.value,
            foto: foto.current.value,
            vendedor: vendedor.current.value,
            descricao: descricao.current.value,
        }).then(() => window.location.reload()).catch((err) => console.log(err))
    }


    return (
        <>


            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-sm-3">
                    </div>
                    <div class="col-sm-6">
                        <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Cadastrar Produto</h1>
                        <form onSubmit={enviarDados}>
                            <div class="my-2">
                                <label class="form-label">Nome</label>
                                <input type="text" class="form-control"
                                    ref={nome} placeholder="Nome" />
                            </div>

                            <div class="my-2">
                                <label class="form-label">Preco</label>
                                <input type="text" class="form-control"
                                    ref={preco} placeholder="12" />
                            </div>

                            <div class="my-2">
                                <label class="form-label">Foto</label>
                                <input type="text" class="form-control"
                                    ref={foto} />
                            </div>


                            <div class="my-2">
                                <label class="form-label">Vendedor</label>
                                <input type="text" class="form-control"
                                    ref={vendedor} placeholder="Luan" />
                            </div>


                            <div class="my-2">
                                <label class="form-label">Descrição</label>
                                <input type="text" class="form-control"
                                    ref={descricao} placeholder="Camisa Estampada" />
                            </div>



                            <div class="text-center">
                                <button type="submit" class="btn btnContato mb-5">

                                    <a >Enviar</a>

                                </button>
                            </div>

                        </form>
                    </div>
                    <div class="col-sm-3">
                    </div>
                </div>
            </div>


        </>
    )
}

export default Novoproduto