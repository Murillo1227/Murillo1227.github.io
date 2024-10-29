document.addEventListener('DOMContentLoaded', function() {
  const infoDisplay = document.getElementById('infoDisplay');
  const userName = localStorage.getItem('userName');
  const userEmail = localStorage.getItem('userEmail');

  // Verifica si hay datos guardados
  if (userName && userEmail) {
    infoDisplay.innerHTML = `<p><strong>Nombre:</strong> ${userName}</p>
                                 <p><strong>Correo Electrónico:</strong> ${userEmail}</p>`;
  } else {
    infoDisplay.textContent = 'No hay información guardada.';
  }

  // Funcionalidad para borrar datos
  document.getElementById('clearData').addEventListener('click', function() {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    infoDisplay.textContent = 'Información borrada.';
  });
});