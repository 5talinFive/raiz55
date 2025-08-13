export default function Home(){
  return (
    <>
      <h1>Jav Galeth</h1>
      <p>Docente de Informática y profesional TIC. Desarrollo asistentes con IA, integraciones con Google Sheets y frontends modernos.</p>
      <div style={{display:"flex",gap:12,marginTop:16}}>
        <a className="btn" href="/projects">Ver proyectos</a>
        <a className="btn outline" href="/CV.pdf" target="_blank" rel="noreferrer">Descargar CV</a>
      </div>
    </>
  );
}
