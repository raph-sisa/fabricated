import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import EmailCapture from './components/EmailCapture'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg-dark">
      <Hero />
      <HowItWorks />
      <EmailCapture />
      <Footer />
    </div>
  )
}
