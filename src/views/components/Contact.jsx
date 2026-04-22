import ArrowRight from './icons/ArrowRight'
import submarcaImg from '../../assets/SUBMARCA PNG SF 2.png'

export default function Contact() {
  return (
    <section id="contato" className="contact-section">
      <div
        className="contact-bg"
        style={{
          backgroundImage:
            'linear-gradient(rgba(176,166,160,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(176,166,160,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />
      <div className="contact-container">
        <div className="contact-monogram">
          <img src={submarcaImg} alt="Ellen Pessoa" className="contact-logo-img" />
        </div>
        <span className="tagline contact-tagline">NÃO PERCA TEMPO</span>
        <h2 className="contact-title">Pronto para regularizar<br />seu diploma e exercer a medicina?</h2>
        <a href="#contato" className="btn-primary">
          Solicitar orientação
          <ArrowRight />
        </a>
      </div>
    </section>
  )
}
