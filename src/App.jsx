import Navbar from './Modules/Navbar/Navbar.jsx';
import Style from './App.module.css';
import './styles/index.css';
import GlobalCart from './Modules/Cart/GlobalCart.jsx';
import Footer from './Modules/Footer/Footer.jsx';

function App() {
  return (
    <div className={Style.container}>
      <div className={Style.Navbar}>
        <Navbar></Navbar>
        <hr />
      </div>
      <div className={Style.CartGlobal}>
          <GlobalCart/>
      </div>
      <div className={Style.Footer}>
        <Footer/>
      </div>

    </div>
  )
}

export default App
