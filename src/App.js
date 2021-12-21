import logo from './logo.svg';
import './App.css';
//import '/Componenrs.css';

function Navigation(){
  return(
    <div id='customNav'>
          <ul className='nav justify-content-end'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current="page" href="#">Quienes Somos</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Portafolio</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Nuestra trayectoria</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href="#">Contactenos</a>
            </li>
          </ul>
     </div>
  );
}

function canvast() {
  return(
    
  );
}

function myApp() {
  return (
    <div className="App">
      <>    
        <Navigation></Navigation>
      </>
   </div>
  );
}

export default myApp;
