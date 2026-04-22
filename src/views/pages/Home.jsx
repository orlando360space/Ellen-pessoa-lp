import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyRegister from '../components/WhyRegister'
import Steps from '../components/Steps'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import CtaBanner from '../components/CtaBanner'
import About from '../components/About'
import Faq from '../components/Faq'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <div className="hero-wrapper">
        <Navbar />
        <Hero />
      </div>
      <WhyRegister />

      <Steps />
      <Services />
      <Testimonials />
      <CtaBanner />
      <About />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}
