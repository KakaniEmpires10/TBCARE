import { CssBaseline, Divider } from '@mui/material'
import AppTheme from './SharedTheme/AppTheme'
import Navbar from './components/NavBar'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Footer from './components/Footer'
import Faq from './pages/Faq'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Edukasi from './pages/Edukasi'
import Materi from './pages/Materi'
import TbDewasa from './pages/TbDewasa'
import TbAnak from './pages/TbAnak'
import PmoTuberkulosis from './pages/PmoTuberkulosis'

function App(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profil' element={<Profile />} />
        <Route path='/materi' element={<Materi />} />
        <Route path='/materi/tuberkulosis_dewasa' element={<TbDewasa />} />
        <Route path='/materi/tuberkulosis_anak' element={<TbAnak />} />
        <Route path='/materi/pmo_tuberkulosis' element={<PmoTuberkulosis />} />
        <Route path='/edukasi' element={<Edukasi />} />
        <Route path='/FAQ' element={<Faq />} />
        <Route path='/kontak' element={<Contact />} />
      </Routes>
      <Divider />
      <Footer />
    </AppTheme>
  )
}

export default App
