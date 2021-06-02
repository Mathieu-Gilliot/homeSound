const { ipcRenderer } = require('electron');

const notification = document.getElementById('notification');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');
const closeButton = document.getElementById("close-button");
const loader = document.getElementById("loader");
ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  message.innerText = 'Une nouvelle version du logiciel est disponible, téléchargement en court...';
  notification.classList.remove('hidden');
  loader.classList.remove('hidden');
});
ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  message.innerText = "Mise à jour téléchargée, elle sera installée au redémarrage de l'application. Redémarrer maintenant?";
  restartButton.classList.remove('hidden');
  notification.classList.remove('hidden');
  loader.classList.add('hidden');
});

function closeNotification() {
    notification.classList.add('hidden');
  }
  function restartApp() {
    ipcRenderer.send('restart_app');
  }


closeButton.addEventListener('click',()=>{
    closeNotification();
})

restartButton.addEventListener('click',()=>{
    restartApp();
})