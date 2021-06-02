const { ipcRenderer } = require('electron');

const notification = document.getElementById('notification');
const message = document.getElementById('message');
const restartButton = document.getElementById('restart-button');

ipcRenderer.on('update_available', () => {
  ipcRenderer.removeAllListeners('update_available');
  message.innerText = 'Une nouvelle version du logiciel est disponible, téléchargement en court...';
  notification.classList.remove('hidden');
});
ipcRenderer.on('update_downloaded', () => {
  ipcRenderer.removeAllListeners('update_downloaded');
  message.innerText = "Mise à jour téléchargée, elle sera installée au redémarrage de l'application. Redémarrer maintenant?";
  restartButton.classList.remove('hidden');
  notification.classList.remove('hidden');
});

function closeNotification() {
    notification.classList.add('hidden');
  }
  function restartApp() {
    ipcRenderer.send('restart_app');
  }

const closeButton = document.getElementById("close-button");
closeButton.addEventListener('click',()=>{
    closeNotification();
})

const  restartButton = document.getElementById("restart-button");
restartButton.addEventListener('click',()=>{
    restartButton();
})