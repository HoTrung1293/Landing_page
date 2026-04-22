import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import GioiThieu from './components/GioiThieu/GioiThieu'
import DonViLienQuan from './components/DonViLienQuan/DonViLienQuan'
import DuAn from './components/DuAn/DuAn'
import ThanhVien from './components/ThanhVien/ThanhVien'
import PhanHoi from './components/PhanHoi/PhanHoi'
import LienHe from './components/LienHe/LienHe'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <GioiThieu />
        <DonViLienQuan />
        <DuAn />
        <ThanhVien />
        <PhanHoi />
        <LienHe />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
