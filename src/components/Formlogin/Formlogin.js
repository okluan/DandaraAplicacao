import React from "react";
import pessoasnegras from "../Imagens/pessoasnegras.jpg"
import { Link } from "react-router-dom";
import loginVend from "../Imagens/loginVend.jpg"
import loginAdm from "../Imagens/loginAdm.jpg"

const Formlogin = () => {
    return (
        <>
            <h1 class="display-5 fw-bold center mt-5 pt-3 pb-5" style={{ textAlign: 'center' }} >Faça seu Login</h1>

            <main class="container mb-5 pb-5">
                <section class="row ">
                    <div class="col-md-12 col-lg-6 pb-5">
                        <div class="divLogin">
                            <img src={loginVend} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            <div class="text-center pb-5">
                                <button type="submit" class="btn btnContato mb-6 mt-3">

                                    <Link to="/Vendedorlogin ">
                                        <a >Sou Vendedor </a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="divLogin">
                            <img src={loginAdm} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                            <div class="text-center pb-5">
                                <button type="submit" class="btn btnContato mb-6 mt-3">
                                    <Link to="/Admlogin">
                                        <a >Sou Administrador </a>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default Formlogin