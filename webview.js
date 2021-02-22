const path = require('path');
const { remote } = require('electron');

const webContents = remote.getCurrentWebContents();
const { session } = webContents;

module.exports = (Franz) => {


  window.addEventListener('beforeunload', async () => {
    console.log(session)
  });


  const getMessages = function getMessages() {

    // get unread messages
    let count = 0;

    const x = document.querySelectorAll('.unread-num em.ng-binding')
    if (x.length > 0) {
      Franz.setBadge(x[0].innerHTML);
      return
    }

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);

  Franz.injectCSS(path.join(__dirname, 'style.css'));
};