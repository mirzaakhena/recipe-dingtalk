module.exports = (Franz) => {
  const getMessages = function getMessages() {
    // get unread messages
    const count = 1;

    // set Franz badge
    Franz.setBadge(count);
  };

  // check for new messages every second and update Franz badge
  Franz.loop(getMessages);
};