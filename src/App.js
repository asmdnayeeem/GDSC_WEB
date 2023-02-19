import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Teams from "./components/Teams";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div >
      <BrowserRouter>
    <Navbar /> 
    <Teams />
    <Contact />
      </BrowserRouter>
    </div>
    
  );
}

export default App;
