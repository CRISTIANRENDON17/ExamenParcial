import Navbar from './Modules/Navbar/Navbar.jsx';
import Style from './App.module.css';
import './styles/index.css';
import GlobalCart from './Modules/Cart/GlobalCart.jsx';
import Footer from './Modules/Footer/Footer.jsx';
import { useState } from 'react';
function App() {


  const [Vista, setVista] = useState(true);

  console.log(Vista);
  return (
    <div className={Style.container}>
      <div className={Style.Navbar}>
        <Navbar Vista = {Vista} setVista ={setVista}/>
        <hr />
      </div>
      <div className={ Vista === true ? Style.GlobalCartTrue : Style.GlobalCartFalse}>
          <GlobalCart/>
      </div>
      <div className={Style.Footer}>
        <Footer/>
      </div>

    </div>
  )
}

export default App
