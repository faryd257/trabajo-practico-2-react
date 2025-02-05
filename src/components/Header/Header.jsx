
import { Link } from "react-router-dom"
import "./Header.css"
const Header = ()=>{
    return(
       <header>
<div className="logo">
<img src="./public/2.jpg" alt="logo" />
</div>
       
<nav><ul>
    
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Registro">Registro</Link></li> 
            </ul>
            </nav>
       </header>
      
    )
}

export{Header}