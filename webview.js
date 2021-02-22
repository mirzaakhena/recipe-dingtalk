module.exports = (Franz) => {
  const getMessages = function getMessages() {

    // get unread messages
    // TODO will find out later
    const count = 0;

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};