import ArrowRight from './icons/ArrowRight'
import heroPhoto from '../../assets/HERO SECTIONG.png'

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <header className="hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${heroPhoto})` }}
        aria-hidden="true"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-container">
        <div className="hero-content">
          <span className="tagline hero-tagline">DIREITO MÉDICO & REVALIDAÇÃO DE DIPLOMAS</span>
          <h1 className="hero-title">
            Exerça a medicina no Brasil<br />com segurança jurídica
          </h1>
          <p className="hero-desc">
            Assessoria especializada em revalidação de diplomas médicos e Programa +Médicos do Brasil — do protocolo ao acompanhamento, com estratégia e cuidado em cada etapa
          </p>
          <div className="hero-actions">
            <a href="#contato" className="btn-primary">
              Realizar consulta
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="hero-label hero-label-estrategia" aria-hidden="true">
          <CheckIcon />REVALIDAÇÃO
        </div>
        <div className="hero-label hero-label-protecao" aria-hidden="true">
          <CheckIcon />+MÉDICOS
        </div>
      </div>
    </header>
  )
}
