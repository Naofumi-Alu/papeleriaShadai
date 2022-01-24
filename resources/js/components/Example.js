//Modulos para live reload diferentes cualqueira de los dos podria servir

import {hot} from 'react-hot-loader'
import {setConfig} from 'react-hot-loader';


import React from 'react';
import ReactDOM from 'react-dom';


import imageIcon1 from'../../image/vendedor.png';
import contactUs from '../../image/charla-small.png';
import compra from '../../image/bolsa-de-la-compra-small.png';
import inventario from '../../image/inventario-small.png';
import '../../sass/app.scss';


function Navigation(){
    return(
      <>
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
      </>
    );
  }
  
  function CardSection(props) {
  
  
  
    return(
      <div className='mainSection' style={{border: props.cssBorderColor}}>
          <div  className='imageContent'>
            <div className="card mb-3">
              <img className='imagesCard' src= {image1} />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
      </div>
    );
  }
  
  function PrimarySection(params) {
  
    return(
        <div className='mainSection' style={{background: params.cssBorderColor }}>
          <>
            <img className="imageMainSection"src={params.image} alt="" />
              <div className='contentText'>
                  <div className="contenedorContentTitle">
                    <div className="titleText"> {params.content}</div>
                  </div>
                  <br></br>
                  <div className="bodyText">{params.contentBody}
              </div>
            </div>
          </>
        </div>);
  }
  
  function SecondSection(params) {
    return( 
    <>
    <div className='mainSection' style={{background: params.cssBorderColor , }}>
      <div className='contentText'>
        <div className="contenedorContentTitle">
          <div className="titleText"> {params.content}</div>
        </div>
        <br></br>
        <div className="bodyText">{params.contentBody}
        </div>
      </div>
      <img className="imageMainSection"src={params.image} alt="" />
    </div> 
    </>);
  }

  function ThirdSection(params) {

    return(
      
        <div className="sectionPortafolio">
          <div className="portafolio">
            <div className="itemPortafolio col-sm-4 md-4">
              <div className='figure'>
                <img className='itemPortafolio-img'src={params.image} alt="iconSell" />
              </div>
              
              <div className="itemPortafolio-Body">
                 Compras Online
              </div>
            </div>

            <div className="itemPortafolio col-sm-4 md-4">
              <div className='figure'>
                <img className='itemPortafolio-img'src={params.image2}  alt="" />
              </div>
              
              <div className="itemPortafolio-Body">
                Contacto
              </div>
            </div>

            <div className="itemPortafolio col-sm-4 md-4">
              <div className='figure'>
                <img className='itemPortafolio-img'src={params.image3} alt="" />
              </div>
              
              <div className="itemPortafolio-Body">
                Productos
              </div>
            </div>
          </div>
            
          <div className="footerSectionPortafolio">

          </div>
        </div>
      
    );
    
  }

  function FourthSection(params) {

    return(
      <div className="allBody">
        this is the four section 
      </div>
    );
    
  }
  
  function Example() {
    return (
      <div className="App">
  
            <Navigation></Navigation>
            <div className='firstSection'>
              <PrimarySection section='1'cssBorderColor='#0052D4'  image='https://image.freepik.com/foto-gratis/platos-desechables-ecologicos-hechos-papel-sobre-fondo-naranja_169016-2163.jpg' content='Productos Desechables' contentBody='Facilidad de compra para cualquier tipo de producto desechable para comestibles y porta comidas'></PrimarySection>
  
              <SecondSection section='2'cssBorderColor='#0072ff' image='https://image.freepik.com/foto-gratis/platos-desechables-ecologicos-hechos-papel-sobre-superficie-naranja_169016-1784.jpg'  content='Compras en linea' contentBody='Compra desde cualquier parte, entregas inmediatas'></SecondSection>
            
              <ThirdSection section='3' image={compra} image2={contactUs} image3={inventario}></ThirdSection>

              <FourthSection></FourthSection>
            </div>
          
     </div>
    );
  }
  
  export default hot(module)(Example);
 
/*
if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
*/
ReactDOM.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>,
  document.getElementById('example')
);

setConfig({
  reloadLifeCycleHooks:true
});









