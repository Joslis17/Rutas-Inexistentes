import { Link } from 'react-router-dom'
import './about.css'

function About() {
  return (
    <div>
      <h1>About</h1>
      <Link to='/home'>Home</Link>
      <Link to='/'>Pantalla Principal</Link>
    </div>
  )
}

export default About