import { useState } from 'react'
import NavBar from './NavBar';
import Cards from '../Cards/Cards';


const Home = () => {
    const [user, setUser] = useState();
  return (
    <div className="App">
        <NavBar />
        Home
        <h2> Welcome to Stranger's Things!</h2>
        <Cards />
    </div>
  )
}

export default Home

















// Welcome to Stranger's Things!
// Logged in as pwallace
// VIEW PROFILE  (button)

// when click login will have message alert
// Check your passwords,
// Close, Check Passwords (button)