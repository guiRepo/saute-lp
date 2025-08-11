import React, { useState } from "react";
import "./Home.css";
import medicoHolograma from "../../assets/carrossel_medico.png"
import lucasBittencourt from "../../assets/carrossel_lucas.png"
import alertaIcon from "../../assets/icone_exclamacao.png";
import heroImage from "../../assets/lucas_header.png";

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    // outros campos que seu formulário tenha
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
    <section className="hero-section">
      <img src={heroImage} alt="Lucas Saute" className="hero-image" />
    </section>
    <div className="landing-container">

      {/* BLOCO 1 - Formulário */}
      <section className="bloco bloco-form">
        <h1 className="title-bloco-form">
          DOMINE A TESTOSTERONA,{" "}
          <span className="blue">TRANSFORME SUA CLÍNICA</span> E SE TORNE
          REFERÊNCIA EM SAÚDE MASCULINA NO BRASIL.
        </h1>
        <p>
          <span className="blue-bold">Inscreva-se gratuitamente</span> para
          receber os primeiros conteúdos do SAUTE — o curso que está formando a
          nova geração de{" "}
          <span className="blue-light">
            médicos que atuam com autoridade e segurança no tratamento hormonal
            masculino.
          </span>
        </p>
        <div className="badge">
          Curso presencial | Vagas limitadas | Encontros com Dr. Lucas
          Bittencourt
        </div>
        <form onSubmit={handleSubmit} className="formulario">
          <p className="form-title">
            Preencha para receber tudo direto no seu WhatsApp e e-mail:
          </p>
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome completo"
            required
          />
          <label>E-mail:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu melhor e-mail"
            required
          />
          <label>Telefone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Telefone com WhatsApp"
            required
          />
          <div className="container-button">
            <button type="submit" className="btn-green">
              QUERO RECEBER OS CONTEÚDOS GRATUITOS
            </button>
          </div>
        </form>
      </section>

      {/* BLOCO 2 - Consultório */}
      <section className="bloco bloco-consultorio">
        <img src={medicoHolograma} alt="Médico com holograma" />
        <h2 className="title-bloco-form">
          VOCÊ JÁ SENTIU QUE{" "}
          <span className="blue">A FACULDADE NÃO TE PREPAROU</span> PARA O
          CONSULTÓRIO REAL?
        </h2>
        <p>
          <strong>O SAUTE</strong> — Saúde Masculina, Andrologia, Urologia,
          Testosterona e Experiência — é o{" "}
          <span className="blue-bold">primeiro curso no Brasil</span> a unir
          ciência, prática clínica e raciocínio aplicado em uma experiência
          imersiva{" "}
          <span className="blue-light">
            para médicos que desejam dominar a saúde hormonal do homem
          </span>
          . Aqui, você aprende a conduzir casos reais com critério, segurança e
          autoridade — do diagnóstico à prescrição.
        </p>
      </section>

      {/* BLOCO 3 - Instrutor */}
      <section className="bloco bloco-instrutor">
        <img src={lucasBittencourt} alt="Dr. Lucas Bittencourt" />
        <p>
          Criado e conduzido por{" "}
          <span className="blue-bold">Dr. Lucas Bittencourt</span>, cirurgião
          geral, urologista e andrologista com prática avançada em terapias
          hormonais e saúde masculina, o SAUTE já impactou dezenas de médicos
          que hoje atuam com confiança e resultados reais.
        </p>
        <p className="blue-light bold">
          Mais que teoria. Uma experiência transformadora com foco em prática,
          autoridade e resultado.
        </p>
      </section>

      {/* BLOCO 4 - Final */}
      <section className="bloco bloco-final">
        <div className="icon-bloco">
          <img src={alertaIcon} alt="Alerta" className="icone-alerta" />
        </div>
        <h2>O SAUTE NÃO É PARA TODOS.</h2>
        <p className="subtittle-bloco-final">
          É para médicos que desejam ir além da teoria rasa e se tornar
          referência clínica no atendimento ao homem moderno — com domínio
          técnico, segurança na prescrição hormonal e prática aplicada à
          realidade do consultório.
        </p>
        <p className="subtittle-bloco-final">
          A nova turma do SAUTE está em formação e as vagas presenciais são
          limitadas.
        </p>
        <h3>AO SE CADASTRAR, VOCÊ ACESSA:</h3>
        <ul>
          <li>✅ Condições exclusivas de inscrição</li>
          <li>✅ Detalhes sobre a estrutura do curso</li>
          <li>✅ Etapas presenciais e imersivas do SAUTE</li>
          <li>✅ Aulas bônus gratuitas com o Dr. Lucas</li>
        </ul>
        <p className="subtittle-bloco-final">
          Uma oportunidade real de transformar sua carreira na saúde masculina.
        </p>
        <p className="subtittle-bloco-final">
          Garanta sua prioridade. A seleção de cada turma é estratégica… e as
          vagas, limitadas.
        </p>
        <div className="container-button">
          <button type="submit" className="btn-green">
            QUERO RECEBER OS CONTEÚDOS GRATUITOS
          </button>
        </div>
      </section>
    </div>
    </>
  );
}
