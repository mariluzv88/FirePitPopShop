import { StrictMode } from "react";
import  ReactDOM  from "react-dom";
import "./style.css"
import App from './App' 
import { BrowserRouter as Router} from "react-router-dom"


ReactDOM.render(
    <StrictMode>
       
       <Router basename={process.env.PUBLIC_URL} >
        <App/>
     </Router>
     
     </StrictMode>,
    document.getElementById('root')
)
// 
