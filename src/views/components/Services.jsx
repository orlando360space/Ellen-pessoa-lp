import { services } from '../../models/services'
import ArrowRight from './icons/ArrowRight'

const icons = {
  briefcase: (
    <svg className="icon-lg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  document: (
    <svg className="icon-lg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  scale: (
    <svg className="icon-lg" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
}

export default function Services() {
  return (
    <section id="servicos" className="services-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline section-tagline">ESCOLHA SEU ATENDIMENTO</span>
          <h2 className="section-title">Outros serviços que ofereço</h2>
        </div>
        <div className="services-grid">
          {services.map(service => (
            <article key={service.id} className="service-card">
              <div className="service-icon">
                {icons[service.icon]}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              <a href="#contato" className="link-cta">
                Entrar em contato
                <ArrowRight />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
