import { testimonials } from '../../models/testimonials'

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-lg">
          <span className="tagline section-tagline">PESSOAS QUE CONFIAM NO MEU TRABALHO</span>
          <h2 className="section-title">Depoimentos de quem já passou por aqui</h2>
        </div>
        <div className="testimonials-grid">
          {testimonials.map(t => (
            <div key={t.id}>
              <div className="testimonial-header">
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-source">{t.source}</div>
                </div>
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-stars">
                {'★'.repeat(t.stars)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
