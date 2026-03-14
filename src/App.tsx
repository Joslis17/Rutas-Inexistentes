import './App.css'
import { Link } from 'react-router-dom'  

function App() {
  return (
    <div>
      <h1>Pantalla Principal</h1>
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
     
    </div>
  )
}

export default App