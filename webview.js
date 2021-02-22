const path = require('path');

module.exports = (Franz) => {

  // #layout-container #layout-main #body

  let checkIsRun = false;
  checkHeightAction = () => {
    checkIsRun = true;
    let checkHeight = setInterval(() => {
      let menuPanel = document.getElementById('menu-pannel')
      if (!menuPanel) {
        return
      }
      menuPanel.parentElement.setAttribute('style', 'height:' + (window.outerHeight - 60) + 'px');
      clearInterval(checkHeight);
      checkIsRun = false
    }, 1000)
  }

  checkHeightAction();

  window.addEventListener('resize', () => {
    if (!checkIsRun) {
      checkHeightAction();
    }
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