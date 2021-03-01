import logo from './logo.svg';
import './App.css';
import Fondo from './components/Fondo/Fondo';
import BrandHeader from './components/BrandHeader/BrandHeader';
import Cards from './components/Cards/Cards';
import CardHolder from './components/Cards/CardHolder';
import Login from './components/Login/Login';
import imagen1 from './imgs/imagen1.jpg';


function App() {
  
  return (

    <body bgcolor="#A78BFA">

   
      
    <section>
      <BrandHeader></BrandHeader>
      <section>
        <br></br>
        <Login></Login>
      </section>
      <CardHolder>
        <Cards></Cards>
        <div><img class="card-image" src={imagen1}/></div>
      </CardHolder>
      <Fondo></Fondo>
    </section>
    </body>

  );
}



export default App;
