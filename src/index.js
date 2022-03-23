import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mostruario from './pages/Mostruario/Mostruario'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Produtores from './pages/Produtores/Produtores';
import Paginasingup from './pages/Paginasingup/Paginasingup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Paginavendedorlogin from './pages/Paginavendedorlogin/Paginavendedorlogin';
import Paginaadmlogin from './pages/Paginaadmlogin/Paginaadmlogin'
import Blog from './pages/Blog/Blog';
import Paginanovoproduto from './pages/Paginanovoproduto/Paginanovoproduto'
import PaginanovoprodutoAdm from './pages/PaginanovoprodutoAdm/PaginanovoprodutoAdm'
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/PaginanovoprodutoAdm" element={<PaginanovoprodutoAdm />}></Route>
        <Route path="/Paginanovoproduto" element={<Paginanovoproduto />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/Admlogin" element={<Paginaadmlogin />}></Route>
        <Route path="/Vendedorlogin" element={<Paginavendedorlogin />}></Route>
        <Route path="/Singup" element={<Paginasingup />}></Route>
        <Route path="/Produtores" element={<Produtores />}></Route>
        <Route path="/Mostruario" element={<Mostruario />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


