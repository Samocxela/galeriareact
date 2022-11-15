
import './App.css';
import './assets/css/estilo.css';
import './components/Header';
import Header from './components/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './components/Card';
import Footer from './components/Footer';
import zapatilla1 from './assets/img/zapatilla1.jpg';
import zapatilla2 from './assets/img/zapatilla2.png';
import zapatilla3 from './assets/img/zapatilla3.jpg';


const imagenes = [{
                  "id":1,
                  "img":zapatilla1,
                  "title":"JORDAN",
                  "descripcion":`El Air Jordan 1 es una de las zapatillas 
                                más vendidas de Nike en relación con la practica 
                                del baloncesto, desde sus orígenes siempre ha destacado 
                                    por su gran versatilidad sobre la pista de basket.`
                  },
                  {
                    "id":2,
                    "img":zapatilla2,
                    "title":"CONVERSE",
                    "descripcion":`Converse es una compañía estadounidense de ropa 
                                  y calzado fundada durante la década de 1900. 
                                  Desde 2003 es subsidiaria de Nike.`
                  },
                  { 
                    "id":3,
                    "img":zapatilla3,
                    "title":"REEBOK",
                    "descripcion":`Reebok es una empresa estadounidense de zapatillas, 
                                    ropa, y accesorios deportivos, subsidiaria del grupo 
                                    Authentic Brands Group.`
                  }];

function App() {
  

  return (
    
    <div className="App">
      <Header titulo='GALERIA DE IMAGENES REACT'/>
      <div className="container">
        {imagenes.map(imagen=><Card key={imagen.id} img={imagen.img} titulo={imagen.title} description={imagen.descripcion}/>)}
  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
