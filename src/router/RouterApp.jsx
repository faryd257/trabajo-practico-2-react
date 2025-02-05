import {Home} from "../Pages/Home/Home.jsx"
import {Login} from "../Pages/Login/Login.jsx";
import { Productos } from "../Pages/Productos/Productos.jsx"
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import { Registro } from "../Pages/Registro/Registro.jsx"
import{NotFound}  from "../Pages/NotFound/NotFound.jsx"
const RouterApp = ()=>{
    return(

        <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Productos" element={<Productos />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Registro" element={<Registro />} />
            <Route path="*" element={<NotFound />} />
            </Routes>
            </Router>


    )
}

export{RouterApp}