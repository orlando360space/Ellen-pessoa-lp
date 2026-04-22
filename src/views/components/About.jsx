import ArrowRight from './icons/ArrowRight'
import ellenPhoto from '../../assets/Ellen & Pessoa-22.jpg'

export default function About() {
  return (
    <section id="quem-sou" className="about-section">
      <div className="about-container">
        <div>
          <span className="tagline about-tagline">QUEM SOU EU?</span>
          <h2 className="about-title">Ellen Pessoa</h2>
          <div className="about-body">
            <p>
              Advogada especialista em Direito Médico, referência na área e autora de teses inovadoras que fortalecem
              a proteção jurídica dos profissionais da saúde. Com sólida formação jurídica e destaque como uma das
              melhores de sua turma, Ellen combina excelência acadêmica, visão estratégica e profundo comprometimento
              com cada cliente.
            </p>
            <p>
              Seu escritório atua na defesa de profissionais da saúde em todo o Brasil e no exterior, oferecendo
              suporte jurídico estratégico para médicos formados no exterior que buscam regularizar sua situação
              e exercer a medicina com segurança e autonomia.
            </p>
            <p>
              Ellen sabe que a principal dificuldade enfrentada por esses profissionais é a falta de informação clara
              e de amparo legal eficiente. Por isso, oferece mais do que orientação jurídica — oferece parceria real,
              estratégia personalizada e cuidado genuíno com cada história.
            </p>
            <p>
              Sua missão é proporcionar segurança jurídica para que os profissionais da saúde exerçam sua atividade
              com autonomia e tranquilidade, tanto no âmbito administrativo quanto no judicial.
            </p>
          </div>
          <div className="about-cta">
            <a href="#contato" className="link-cta">
              Entrar em contato
              <ArrowRight />
            </a>
          </div>
        </div>

        <div className="about-image">
          <img src={ellenPhoto} alt="Ellen Pessoa" className="about-photo" />
          <div className="about-signature">
            Ellen<span className="about-signature-last">Pessoa</span>
          </div>
          <div className="about-bar" />
        </div>
      </div>
    </section>
  )
}
