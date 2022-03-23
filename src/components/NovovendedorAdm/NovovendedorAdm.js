import React from "react";
import { Link } from "react-router-dom";
import api from "../../api"
import { useEffect, useRef, useState } from 'react'


const NovovendedorAdm = () => {

    const [vendedor, setVendedor] = useState([])
    const btn = useRef()



    useEffect(() => {
        api.get('/vendedores').then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }, [])

    function deletar(btn) {
        api.delete(`/vendedores/${btn.target.value}`).then((res) => console.log(res.data)).catch((erro) => console.log(erro))
    }

    const nome = useRef()
    const telefone = useRef()
    const foto = useRef()
    const email = useRef()
    const descricao = useRef()



    function enviarDados(event) {

        event.preventDefault()
        api.post('/vendedores/', {
            nome: nome.current.value,
            foto: foto.current.value,
            telefone: telefone.current.value,
            email: email.current.value,
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
                        <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Cadastro Vendedor</h1>
                        <form onSubmit={enviarDados}>
                            <div class="my-2">
                                <label class="form-label">Nome</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    ref={nome} placeholder="Nome" />
                            </div>

                            <div class="my-2">
                                <label class="form-label">Foto </label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    ref={foto} />
                            </div>

                            <div class="my-2">
                                <label class="form-label">Telefone</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    ref={telefone} placeholder="4002-8922" />
                            </div>


                            <div class="my-2">
                                <label class="form-label">Email</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    ref={email} placeholder="name@example.com" />
                            </div>

                            <div class="my-2">
                                <label class="form-label">Descrição</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    ref={descricao} />
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

export default NovovendedorAdm