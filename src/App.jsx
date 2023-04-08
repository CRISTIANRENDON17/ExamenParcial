import Navbar from './Modules/Navbar/Navbar.jsx';
import Style from './App.module.css';
import './styles/index.css';

function App() {
  return (
    <div className={Style.container}>
      <div className={Style.Navbar}>
        <Navbar></Navbar>
        <hr />
      </div>

    </div>
  )
}

export default App
