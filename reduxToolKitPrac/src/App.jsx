import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'
import Img from './assets/red.png'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{fontSize:'40px', color:"navy",fontWeight:'150px'}}>TODOS APP USING REDUX</h1>
      <img style={{height:"150px",marginLeft:"40%",marginTop:"30px",marginBottom:"20px"}} src={Img} alt="image" />

      <Addtodo/>
      <Todos/>
      
    </>
  )
}

export default App
