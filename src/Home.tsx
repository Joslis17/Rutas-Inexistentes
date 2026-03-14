import { Link } from 'react-router-dom'
import './home.css'

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <Link to='/about'>About</Link>
        <Link to='/'>Pantalla Principal</Link>
    </div>
  )
}

export default Home