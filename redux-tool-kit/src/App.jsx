import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Todos from './TodoRTK/Todos'
import Counter from './Counter RTK/Counter'
function App() {
  return(
    <div className="App">
      <h1>Redux Toolkit</h1>
      <Todos />
      {/* <Counter /> */}
    </div>
  )
}

export default App
