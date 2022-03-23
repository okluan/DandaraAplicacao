import React from "react";
import "../Apresentacao/Apresentacao"
import mulhernegra from "../Imagens/mulhernegra.jpg"
import mulherturbante from "../Imagens/mulherturbante.jpg"
import masculino1 from "../Imagens/masculino1.jpg"
import mariadosocorro from "../Imagens/mariadosocorro.jpg"
import masculino from "../Imagens/masculino.jpg"
import feminino from "../Imagens/feminino.jpg"
import "../Contato/Contato"
import Contato from "../Contato/Contato";

const Apresentacao = () => {
  return (


    <>

      <main class="container " >
        <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Seu produto na web</h1>


        <section class="row pb-5" >
          <div class="col-md-12 col-lg-6" >
            <img src={mulherturbante} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />

          </div>
          <div class="col-md-12 col-lg-6 pt-5 ps-5">
            <div class="container-fluid">
              <h1 class="display-5 fw-bold lh-1 mb-3">As vantagens do e-commerce</h1>
              <p class="lead">O comércio eletrônico surge como um importante aditivo ao modelo de negócio convencional, ajudando a impulsionar as vendas a alcançar um público diferente. É ainda considerado uma ferramenta de marketing na divulgação de marcas e dos produtos e serviços associados.</p>
            </div>
          </div>
        </section>






      </main>

      <main class="container pt-5">

        <div class="row align-items-md-stretch">
          <div class="col-md-4 p-3" >
            <div class="h-100 p-5 text-white rounded-3" style={{ backgroundColor: `black` }}>
              <h2>Visão</h2>
              <p>Reconhecimento de ser a pioneira, e o melhor portal para e-commerce de produtos afro.estar na mente dos consumidores como um portal para comercialização de produtos, que apresenta eficiencia, bom atendimento durante compra e pós-compra, ajudar a realizar sonhos e liberdade e empoderamento de pequenos e médios empreendedores.</p>

            </div>
          </div>
          <div class="col-md-4 p-3">
            <div class="h-100 p-5 text-white border rounded-3" style={{ backgroundColor: `black` }}>
              <h2>Missão</h2>
              <p>Oferecer soluções práticas e inovadoras para o comercio local, possuindo produtos para decoração vestuario e serviços, de alto padrão de qualidade, preço justo, e com excelencia no atendimento. Proporcionar a inclusão, bem estar e o desenvolvimento do comercio local e o empreendedorismo. Gerar lucro com que garanta a sustentabilidade do negocio para pequenos e medios produtores, e conviver de forma harmoniosa com a sociedade.</p>

            </div>
          </div>

          <div class="col-md-4 p-3">
            <div class="h-100 p-5 text-white border rounded-3" style={{ backgroundColor: `black` }}>
              <h2>Valores</h2>
              <p>   Integridade: a relação estar baseada em honestidade e lealdade.<br />
                Respeito: Participação de empreendedores para o sucesso do negocio.<br />
                Empatia: fundamentado com que agir nas nossas relações internadas e externas.<br />
                Empoderamento: dar voz e ouvidos à pessoas que não tenham possibilidade a vender seus produtos a canais maiores.</p>

            </div>
          </div>
        </div>

      </main>




      <h1 class="display-5 fw-bold center pt-5 pb-5" style={{ textAlign: 'center' }} >Produtores</h1>

      <div class="text-center">
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Independentemente da forma de pagamento, a grande vantagem de ter um e-commerce é proporcionar mais opções para o cliente efetuar a compra. Dessa forma, os benefícios são mútuos, já que as chances de venda aumentam e o consumidor pode comprar do jeito que preferir.</p>
        </div>
      </div>

      <div class="container " id="custom-cards">

        <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${masculino1})` }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Roupa africana</h2>
                <p class=""></p>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${mariadosocorro})` }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Turbantes</h2>

              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg" style={{ backgroundImage: `url(${feminino})` }}>
              <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Acessório</h2>

              </div>
            </div>
          </div>
        </div>
      </div>


      <h1 class="display-5 fw-bold center pt-3 pb-5" style={{ textAlign: 'center' }} >Consumo</h1>

      <div class="text-center">
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Nós usamos análise para contar a verdadeira história sobre o envolvimento do cliente na cultura negra. É bom quando as vendas sobem, mas por quê? A melhor propaganda é feita por clientes satisfeitos.</p>
        </div>
      </div>


      <main class="container pt-3">


        <section class="row pb-5">

          <div class="col-md-12 col-lg-6 pt-5">


            <div class="container-fluid pb-2">
              <h1 class="display-5 fw-bold lh-1 mb-3">Sobre nós</h1>
              <p class="lead">Nosso squad tem como meta trabalhar para uma ascensão social e difusção da cultura negra, para isso contamos com parceiros que atuam na área de vendas da cultura negra in loco, assim podemos  analizar e verificar quais as necessidades do projeto </p>
            </div>


          </div>

          <div class="col-md-12 col-lg-6 pt-5">

            <img src={masculino} class="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />

          </div>

        </section>

        <Contato />





      </main>

    </>
  )
}

export default Apresentacao