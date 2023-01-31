import './App.css';
import Testimonio  from './componentes/Testimonio';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'> 
      <h1> Esto es lo que dicen nuestros alumnos sobre <u>freeCodeCamp</u></h1>
      <Testimonio 
      nombre='Emma Bostian'
      pais='Suecia'
      img='emma'
      cargo='Ing. Software'
      empresa='Spotify'
      testimonio='Siempre he tenido problemas para aprender JavaScript. Tomé muchos cursos, pero el de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ing. de software en Spotify.' />

      <Testimonio 
      nombre='Shawn Wang'
      pais='Singapur'
      img='shawn'
      cargo='Ing. Software'
      empresa='Amazon'
      testimonio='Da miedo cambiar de carrera. Sólo gané la confianza de que podía programar trabajando a través de los cientos de hs de lecciones gratuitas en freeCodeCamp. En tan solo un año tuve un trabajo de seis cifras como ing. de software. freeCodeCamp cambió mi vida.'/>

      <Testimonio
       nombre='Sarah Chima'
       pais='Nigeria'
       img='sarah'
       cargo='Ing. Software'
       empresa='ChatDesk'
       testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrolladora de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.' />

      </div>

      <div className='footer'>
        <p> &copy;Sebastian Paternostro 2023 </p>
      </div>
    </div>
  );
}

export default App;

/*  nombre=''
      pais=''
      img=''
      cargo=''
      empresa=''
      testimonio=''
*/
