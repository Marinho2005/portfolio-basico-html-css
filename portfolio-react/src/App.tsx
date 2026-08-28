import React from 'react'

export default function App() {
  const onContact = () => {
    window.location.href = 'mailto:seuemail@email.com'
  }

  return (
    <>
      <header className="header">
        <nav className="nav">
          <a href="#" className="logo">Victor Marinho Borges</a>
          <div className="menu">
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="small-title">Olá, eu sou</p>
            <h1>Victor Marinho</h1>
            <p className="description">
              Desenvolvedor apaixonado por tecnologia,
              programação e criação de projetos.
            </p>
          </div>

          <div className="hero-image">
            <img src="/assets/foto.png" alt="Foto de perfil" />
          </div>
        </section>

        <section id="sobre" className="section">
          <h2>Sobre mim</h2>
          <p>
            Sou estudante e desenvolvedor interessado em
            tecnologia, desenvolvimento web e programação.
          </p>
        </section>

        <section id="projetos" className="section">
          <h2>Projetos</h2>
          <div className="projects">
            <article className="project">
              <h3> Lampada Inteligente</h3>
              <p>Projeto de iluminação inteligente com controle por aplicativo.</p>
            </article>
            <article className="project">
              <h3>ChessDuel</h3>
              <p>Plataforma de xadrez online utilizando Elixir e Vue.js</p>
              <br />
              <p>(Em desenvolvimento)</p>
            </article>
            <article className="project">
              <h3>Sistema de Monitoramento Ambiental</h3>
              <p>Sistema que checa a condição do ambiente em ambientes controlados com sensores e Esp32.</p>
            </article>
          </div>
        </section>

        <section id="contato" className="section contact">
          <h2>Contato</h2>
          <p>Entre em contato comigo para conversar sobre projetos.</p>
          <button id="contactButton" className="button" onClick={onContact}>Entrar em contato</button>
        </section>
      </main>

      <footer>
        <p>© 2026 - Victor Marinho</p>
      </footer>
    </>
  )
}
