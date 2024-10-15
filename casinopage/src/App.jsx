import './App.css'
import casinoLogo from './assets/logo.svg'

function App() {

  return (
    <>
    <header>
      <div className='logoC'>
        <img src={casinoLogo}/>
        <h2 className='nombre-empresa'>FortuneFlare</h2>
        </div>
      <nav>
        <a href="" className="nav-link">HomePage</a>
        <a href="" className="nav-link">Slots</a>
        <a href="" className="nav-link">Ruleta</a>
        <a href="" className="nav-link">BlackJack</a>
        <a href="" className="nav-link">Todos</a>
      </nav>
    </header>
    </>
  )
}

export default App
