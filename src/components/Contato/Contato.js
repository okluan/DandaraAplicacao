import React from "react";
import pessoasnegras from "../Imagens/pessoasnegras.jpg"

const Contato = () => {
    return (


        <div class="container">
            <div class="row align-items-center">
                <div class="col col-sm-3">
                </div>
                <div class="col-sm-6">
                    <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Contato</h1>
                    <form action="">
                        <div class="my-2">
                            <label class="form-label">Nome</label>
                            <input type="text" class="form-control" id="exampleFormControlInput1"
                                placeholder="Nome" />
                        </div>
                        <div class="my-2">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1"
                                placeholder="name@example.com" />
                        </div>


                        <div class="mb-3">
                            <label for="validationTextarea" class="form-label">Mensagem</label>
                            <textarea class="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>

                        </div>

                        <div class="text-center">
                            <button type="submit" class="btn btnContato mb-5">Enviar</button>
                        </div>

                    </form>
                </div>
                <div class="col-sm-3">
                </div>
            </div>
        </div>

    )
}

export default Contato