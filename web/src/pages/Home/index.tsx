import React from "react";
import { FiLogIn } from "react-icons/fi";
import {Link} from "react-router-dom";

import logo from "../../assets/logo.svg";
import "./styles.css";
const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="ecoleta"></img>
        </header>

        <main>
          <h1>Seu marketplace de residuos.</h1>
          <p>Cadastre um ponto de coleta com itens coletáveis para ajudar o meio ambiente.</p>

          <Link to="/create-point">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastra um ponto de coleta</strong>
          </Link>
        </main>
      </div>
    </div>
  );
};

export default Home;
