export default function Contact(){
  return (
    <>
      <h1>Contacto</h1>
      <form action="https://formspree.io/f/TU_ID" method="POST" className="form">
        <label>Nombre<input name="name" required/></label>
        <label>Email<input type="email" name="email" required/></label>
        <label>Mensaje<textarea name="message" rows="5" required/></label>
        <button>Enviar</button>
      </form>
    </>
  );
}
