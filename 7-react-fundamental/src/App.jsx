import { useState } from 'react'
import Navbar from './components/Navbar';
import Account from './components/Account';
import Button from './components/Button';

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
    <Navbar></Navbar>
    <Account></Account>
    <Button></Button>
   
    
    </>
  )
}

export default App;