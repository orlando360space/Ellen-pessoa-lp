import logoImg from '../../assets/SUBMARCA PNG SF 2.png'

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <img src={logoImg} alt="Ellen Pessoa" className="navbar-logo-img" />
        <div>
          <span className="navbar-name">ELLEN PESSOA</span>
          <span className="navbar-subtitle">ADVOGADA DE REVALIDAÇÃO DE DIPLOMAS</span>
        </div>
      </a>

      <ul className="navbar-links">
        <li><a href="#etapas">Etapas</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#quem-sou">Quem sou eu?</a></li>
      </ul>

      <a href="#contato" className="navbar-cta">
        Contato
        <svg className="icon-sm" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.53 0-10 4.47-10 10 0 1.77.46 3.48 1.33 4.99L2 22l5.2-1.35A9.93 9.93 0 0 0 12.04 22c5.52 0 10-4.47 10-10s-4.47-10-10-10zm0 18.2c-1.64 0-3.24-.44-4.63-1.27l-.33-.2-3.08.8.82-3-.22-.34A8.17 8.17 0 0 1 3.83 12c0-4.5 3.7-8.2 8.2-8.2s8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2zm4.73-6.14c-.26-.13-1.53-.75-1.76-.84-.24-.09-.41-.13-.58.13-.17.26-.67.84-.82 1-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.3-.77-.68-1.29-1.52-1.44-1.78-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.06-.13-.58-1.4-.8-1.92-.21-.5-.42-.43-.58-.44l-.5-.01c-.17 0-.46.07-.7.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.55 1.07 2.73.13.17 1.85 2.82 4.48 3.95.63.27 1.12.43 1.5.55.63.2 1.2.17 1.66.11.5-.08 1.53-.63 1.75-1.23.21-.6.21-1.11.15-1.22-.06-.11-.24-.17-.5-.3z" />
        </svg>
      </a>
    </nav>
  )
}
