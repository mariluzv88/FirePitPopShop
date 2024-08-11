import React from 'react'
import {Route,Routes} from 'react-router-dom'
import './style.css';
import Main from './tabs/Main'

function App() {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Main />}/>
     
      
       </Routes>
    </div>


  )
    
  
}

export default App;
