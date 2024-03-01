const allou_server = "https://games.proarcoder.repl.co/QSR";
const axios = require('axios');
const commandName = "مغامره";
module.exports = {
  config: {
    name: "مغامره",
    version: "1.0",
    credits: "لوفي وريان تشان",
    cooldowns: 5,
    hasPermission: 0,
    description: "مغامرة في منزل العائلة آدمز",
    commandCategory: "العاب",
    usePrefix: true
  },

  run: async function({ event, api }) {
    const uid = event.senderID;
    const res = await axios.get(allou_server, {
      params: {
        playerID: uid
      }
    });
    return api.sendMessage({ body: res.data.message }, event.threadID, (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: commandName,
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  },

  handleReply: async function({ api, event, handleReply }) {
    const { messageID, author } = handleReply;
    const uid = event.senderID;
    if (uid != author) return api.sendMessage('أنت لست لاعب القصة', event.threadID);
    const ans = { "1": "A", "2": "B", "3": "C" };
    const answer = ans[event.body];
    const res = await axios.get(allou_server, {
      params: {
        playerID: uid,
        playerAnswer: answer
      }
    });
    api.unsendMessage(messageID);
    return api.sendMessage({ body: res.data.message }, event.threadID, (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: commandName, // Use a different name here
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  }
};