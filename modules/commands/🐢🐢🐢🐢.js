module.exports.config = {
  name: "keen",
  version: '1.0.0',
  commandCategory: ' النظام ',
  hasPermission: 3,
  cooldowns: 5
};

module.exports.handleEvent = async function ({ api }) {
  api.markAsReadAll((err) => {
    if (err) {
    }
  });
};

module.exports.run = async function ({}) {
}