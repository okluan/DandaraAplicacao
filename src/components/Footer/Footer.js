import React from "react";



const Footer = () => {
  return (
    <>

      <div class="container-fluid pt-0">

        <footer class="text-center text-white" style={{ backgroundColor: `#3f51b5` }}>

          <div class="container">

            <section class="mt-5">

              <div class="row text-center d-flex justify-content-center pt-5">

                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a >Sobre nós</a>
                  </h6>
                </div>



                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a>Produtos</a>
                  </h6>
                </div>



                {/* <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a>Awards</a>
            </h6>
          </div> */}

                {/* 
          <div class="col-md-2">
            <h6 class="text-uppercase font-weight-bold">
              <a >Help</a>
            </h6>
          </div> */}



                <div class="col-md-2">
                  <h6 class="text-uppercase font-weight-bold">
                    <a>Contato</a>
                  </h6>
                </div>

              </div>

            </section>


            <hr class="my-5" />


            <section class="mb-3">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <p>
                    Projeto desenvolvido por Augusto,Bruno,Luan e Rafael, reservamos o direito de exploração comercial do mesmo
                  </p>
                </div>
              </div>
            </section>




          </div>


          <div
            class="text-center p-2">
            © 2022 Copyright:
            <a class="text-white" href="https://github.com/Bluizpro/DandaraPreta" target="_blank"
            > DandaraPreta</a
            >
          </div>

        </footer>

      </div>




    </>
  )
}

export default Footer