import './Pages.css';

function Mortandad() {
  return (
    <main className="principal">
      <h2>Estadísticas de Fallecimientos</h2>
      <p>
        La mortandad causada por la pandemia del coronavirus representa una de las consecuencias más dolorosas de la crisis sanitaria global.
        Detrás de cada cifra se encuentra una vida, una historia y una familia marcada por la pérdida. Las estadísticas reflejan la magnitud 
        del impacto, pero no alcanzan a expresar el vacío que dejó la partida de millones de personas alrededor del mundo.
        Esta realidad obligó a la humanidad a reflexionar sobre la fragilidad de la vida y la importancia de la prevención, la ciencia y la 
        solidaridad. Los datos de mortalidad no solo permiten analizar la gravedad de la emergencia sanitaria, sino que también invitan a aprender 
        de lo ocurrido, honrar a quienes ya no están y fortalecer el compromiso colectivo de proteger la vida ante futuras amenazas epidemiológicas.
      </p>
      <section>
        <video controls width="100%">
          <source src="https://media.githubusercontent.com/media/DanieliGP/Covid19.P.D/main/videos/mortandad.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </section>
    </main>
  );
}

export default Mortandad;