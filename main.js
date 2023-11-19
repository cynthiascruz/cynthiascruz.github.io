let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #fb4993;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #ff87ab;">Estudiante de Multimedia y Animación, actualmente freelancer como editora de video y desarrolladora web</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
