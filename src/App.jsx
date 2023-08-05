import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import TicketPage from  './pages/TicketPage'
import GrandThemePage from './pages/GrandThemePage'
import SponsorshipPage from './pages/SponsorshipPage'
import WhatisTEDX from './pages/WhatisTEDX'
import SpeakerPage from './pages/SpeakerPage'
import MerchandisePage from './pages/MerchandisePage'
import MeetTheTeamPage from './pages/MeetTheTeamPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element= {<Homepage />}></Route>
          <Route path='/ticket' element= {<TicketPage />}></Route>
          <Route path='/grandtheme' element= {<GrandThemePage />}></Route>
          <Route path='/sponsorship' element= {<SponsorshipPage />}></Route>
          <Route path='/whatistedx' element= {<WhatisTEDX />}></Route>
          <Route path='/speaker' element= {<SpeakerPage />}></Route>
          <Route path='/merchandise' element= {<MerchandisePage />}></Route>
          <Route path='/meettheteam' element= {<MeetTheTeamPage />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
