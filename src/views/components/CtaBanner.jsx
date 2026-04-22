import logoImg from '../../assets/LOGOTIPO SF 2.png'

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          <img src={logoImg} alt="Ellen Pessoa" className="cta-logo-img" />
          <div className="cta-content">
            <span className="tagline cta-tagline">NÃO PERCA TEMPO</span>
            <h3 className="cta-title">
              Cada dia sem revalidação é um dia longe do seu direito de exercer a medicina
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
