import './Pages.css';

function Inicio() {
  return (
    <main className="principal">
      <section>
        <h2>Introducción</h2>
        <p>
          La pandemia del COVID-19 nos obligó a detenernos y mirar de frente una realidad que jamás imaginamos. De un día a otro, 
          la vida cambió: colegios cerrados, hospitales llenos y familias separadas por la distancia. 
          Sin embargo, también surgieron actos de valentía, unión y esperanza que demostraron la fuerza del espíritu humano. 
          El siguiente video nos recuerda ese capítulo que dejó huellas profundas en cada uno de nosotros.
        </p>
      </section>
      <video controls width="100%">
        <source src="videos/Casos Covid en Ecuador  Visión 360.mp4" type="video/mp4" />
        <source src="videos/Casos Covid en Ecuador  Visión 360.webm" type="video/webm" />
        Tu navegador no soporta el video.
      </video>
    </main>
  );
}

export default Inicio;