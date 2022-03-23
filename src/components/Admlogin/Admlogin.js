import React from "react";
import { Link } from "react-router-dom";

const Admlogin = () => {
    return (
        <>
            <div class="container">
                <div class="row align-items-center">
                    <div class="col col-sm-3">
                    </div>
                    <div class="col-sm-6">
                        <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Login Administrador</h1>
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
                                <button type="submit" class="btn btnContato mb-5">
                                    <Link to="/PaginanovoprodutoAdm">
                                        <a >Entrar</a>
                                    </Link>
                                </button>
                            </div>

                        </form>
                    </div>
                    <div class="col-sm-3">
                    </div>
                </div>
            </div>


        </>)
}

export default Admlogin