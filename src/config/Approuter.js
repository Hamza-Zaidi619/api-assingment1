import{BrowserRouter,Route,Link,Routes} from "react-router-dom"
import About from "../screen/About"
import Contact from "../screen/Contact"
import Hamza from "../screen/Hamza"
import Home from "../screen/Home"
import Services from "../screen/Services"

function Approuter(){
return(
    <>
    <BrowserRouter>
    <nav>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Hamza">Hamza</Link>
      <Link to="/Home">Home</Link>
      <Link to="/Services">Services</Link>
    </nav>

    <Routes>
    <Route path="About" element={<About/>} />
    <Route path="Contact" element={<Contact/>} />
    <Route path="Hamza" element={<Hamza/>} />
    <Route path="Home" element={<Home/>} />
    <Route path="Services" element={<Services/>} />
    </Routes>
    </BrowserRouter>
    </>
)

}
export default Approuter