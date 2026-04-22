import { registrationSteps, registrationBenefits } from '../../models/steps'
import damaImg from '../../assets/Dama da justica.jpg'

export default function Steps() {
  return (
    <section id="etapas" className="steps-section">
      <div className="steps-container">
        <div className="steps-image">
          <img src={damaImg} alt="Dama da Justiça" className="steps-photo" />
          <div className="steps-stat">
            <div className="steps-stat-number">+5 mil</div>
            <div className="steps-stat-text">médicos formados no exterior aguardam revalidação no Brasil.</div>
          </div>
          <div className="steps-bar" />
        </div>

        <div>
          <span className="tagline section-tagline">SIMPLES E 100% ONLINE</span>
          <h2 className="steps-title">
            Etapas da revalidação<br />de diploma médico
          </h2>
          <div className="steps-grid">
            {registrationSteps.map(step => (
              <div key={step.id} className="step-card">
                <div className="step-number">
                  {step.id}<span className="step-number-dot">.</span>
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="steps-footer">
            <ul className="steps-benefits">
              {registrationBenefits.map((benefit, i) => (
                <li key={i} className="steps-benefit-item">
                  <svg className="icon-sm" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m0 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
