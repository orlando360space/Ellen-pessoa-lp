import ArrowRight from './icons/ArrowRight'

const CheckIcon = () => (
  <svg className="icon-sm" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

const XIcon = () => (
  <svg className="icon-sm" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const withItems = [
  'Reconhecimento oficial do diploma pelo MEC e CFM',
  'Exercício legal e seguro da medicina no Brasil',
  'Acesso a planos de saúde e hospitais credenciados',
  'Possibilidade de ingressar no Programa +Médicos do Brasil',
]

const withoutItems = [
  'Impedimento legal para exercer a medicina no país',
  'Risco de sanções administrativas e penais',
  'Impossibilidade de inscrição no CRM',
  'Exclusão de oportunidades em concursos e serviços públicos',
]

function ComparisonCard({ title, items, icon: Icon }) {
  return (
    <div className="comparison-card">
      <h3 className="comparison-title">{title}</h3>
      <ul className="comparison-list">
        {items.map((text, i) => (
          <li key={i} className="comparison-item">
            <span className="comparison-icon">
              <Icon />
            </span>
            <span>{text}</span>
          </li>
        ))}
      </ul>
      <hr className="hr-soft" />
      <a href="#contato" className="link-cta">
        Agendar um bate-papo
        <ArrowRight />
      </a>
    </div>
  )
}

export default function WhyRegister() {
  return (
    <section id="por-que" className="why-section">
      <div className="container">
        <div className="section-header">
          <span className="tagline section-tagline">EVITE OS RISCOS</span>
          <h2 className="why-title">Por que revalidar seu diploma médico?</h2>
          <p className="why-desc">
            A revalidação é o primeiro passo para exercer a medicina legalmente
            e construir uma carreira sólida no Brasil
          </p>
        </div>
        <div className="why-grid">
          <ComparisonCard title="Com revalidação" items={withItems} icon={CheckIcon} />
          <ComparisonCard title="Sem revalidação" items={withoutItems} icon={XIcon} />
        </div>
      </div>
    </section>
  )
}
