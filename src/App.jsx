import './App.css'
import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { History } from './components/history/History'
import { Scores } from './components/scores/Scores'

function App() {
  return ( 
    <>
    <Header />
    <Scores />
    <History />
    <Footer />
     </>
  )
}

export default App
