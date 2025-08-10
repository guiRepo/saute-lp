// src/Confirmacao.jsx
import React from "react";
import "./Confirmacao.css";
import alertaIcon from "../../assets/icone_exclamacao.png"; // caminho da sua imagem

export default function Confirmacao() {
  return (
    <div className="container">
      <div className="card">
        <img src={alertaIcon} alt="Alerta" className="icon-img" />

        <h1 className="title">INSCRIÇÃO CONFIRMADA!</h1>

        <p className="text">
          Você agora está na lista de prioridade do SAUTE.
          Em breve, enviaremos os primeiros conteúdos no seu e-mail e WhatsApp.
        </p>

        <p className="text">
          📱 Para não perder nenhum material e garantir acesso antecipado às
          aulas gratuitas e à nova turma:
        </p>

        <a href="#" className="button">
          ENTRE NO GRUPO VIP DO WHATSAPP
        </a>

        <p className="text">
          Nos vemos em breve. Prepare-se para dar um salto na sua prática médica!
        </p>
      </div>
    </div>
  );
}
