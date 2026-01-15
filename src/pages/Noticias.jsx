import './Pages.css';

function Noticias() {
  return (
    <main className="principal">
      <h2>Últimas Noticias</h2>
      <p>
        Durante la pandemia del COVID-19, el mundo se enfrentó a una realidad inesperada que transformó la vida cotidiana de millones de personas. 
        Cada noticia revelaba nuevos desafíos, desde el aumento de contagios hasta las medidas urgentes adoptadas para proteger la salud pública. 
        La información se volvió esencial para comprender lo que ocurría y para enfrentar el miedo, la incertidumbre y los cambios constantes que 
        trajo consigo esta crisis sanitaria.
        Las noticias no solo mostraron cifras y estadísticas, sino también historias de esfuerzo, resiliencia y solidaridad. Sistemas de salud puestos a prueba,
        comunidades adaptándose a nuevas normas y avances científicos que ofrecieron esperanza marcaron una etapa que quedará registrada en la historia. Informarse 
        fue una forma de cuidarse,y entender lo que sucedía permitió a la sociedad avanzar con mayor conciencia y responsabilidad frente a la pandemia.
      </p>
      <video controls width="100%">
        <source src="https://media.githubusercontent.com/media/DanieliGP/Covid19.P.D/main/videos/covid.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
    </main>
  );
}

export default Noticias;