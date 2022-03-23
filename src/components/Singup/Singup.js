import React from "react";

import pessoasnegras from "../Imagens/pessoasnegras.jpg"
import loginClien from "../Imagens/loginClien.jpg"

const Singup = () => {
    return (
        <>

            <main class="container " >


                <section class="row pb-5" >
                    <div class="col-md-12 col-lg-6 pb-5" >
                        <img src={loginClien} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />

                    </div>
                    <div class="col-md-12 col-lg-6  ps-5">
                        <div class="container-fluid">
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




                                <div class="text-center">
                                    <button type="submit" class="btn btnContato mb-5">Enviar</button>
                                </div>

                            </form>

                        </div>
                    </div>
                </section>






            </main>

        </>
    )
}

export default Singup