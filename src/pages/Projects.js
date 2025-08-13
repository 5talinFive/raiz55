const data = [
  { id: "farum", title: "FARUM – Asistente de Marketing", desc: "Chatbot con Google Sheets para análisis de campañas.", repo:"https://github.com/...", demo:"https://..." },
  { id: "rasgael", title: "RASGAEL – Asistente Institucional", desc: "Responde sobre requisitos y calificaciones.", repo:"https://github.com/..." }
];
export default function Projects(){
  return (
    <>
      <h1>Proyectos</h1>
      <div className="grid">
        {data.map(p => (
          <article key={p.id} className="card">
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="row">
              {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Demo</a>}
              {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Código</a>}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
