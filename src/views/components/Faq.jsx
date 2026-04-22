import { faqItems } from '../../models/faq'
import { useFaq } from '../../controllers/useFaq'

export default function Faq() {
  const { openId, toggle } = useFaq()

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div>
          <span className="tagline faq-tagline">FAQ</span>
          <h2 className="faq-intro-title">
            Ficou com<br />alguma dúvida?
          </h2>
          <p className="faq-intro-desc">
            Confira as perguntas mais frequentes<br />e tire suas dúvidas.
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map(item => (
            <div key={item.id} className="faq-item">
              <button onClick={() => toggle(item.id)} className="faq-btn">
                <span className="faq-question">{item.question}</span>
                <span
                  className="faq-chevron"
                  style={{ transform: openId === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}
                >
                  ⌄
                </span>
              </button>
              {openId === item.id && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
