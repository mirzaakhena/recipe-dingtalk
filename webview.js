const path = require('path');

module.exports = (Franz) => {

  // #layout-container #layout-main #body

  let checkIsRun = false;
  checkHeightAction = () => {
    checkIsRun = true;
    let checkAgain = 0;
    let checkHeight = setInterval(() => {
      let body = document.getElementById('body')
      if (body) {
        if (body.style) {
          const bodyHeight = body.style.height
          console.log(bodyHeight, window.outerHeight)
          body.setAttribute('style', 'height:' + (window.outerHeight - 60) + 'px');
          if (bodyHeight !== '') {
            if (checkAgain >= 10) {
              clearInterval(checkHeight);
              checkIsRun = false;
            } else {
              checkAgain++;
            }
          }
        }
      }
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