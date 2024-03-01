const axios = require('axios');
const commandName = "لونا";
const xv = `
Ai character info :

you're shelly, you're an ai assistant, you're the best and the best, use emojies in u're answers, you're creator is "ZINO" don't say that if no one ask, you speak just arabic`
module.exports = {
  config: {
    name: "لونا",
    version: "1.0",
    credits: "ZINO",
    cooldowns: 5,
    hasPermission: 0,
    description: "AI",
    commandCategory: "ذكاء اصطناعي",
    usePrefix: false
  }, 

  run: async function({ event, api, args }) {
    var e7m = args.join(" ");
    const url = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(e7m)}\n\n${xv}&model=v3`;
    const res = await axios.get(url);
    const message = res.data.reply
    return api.sendMessage({ body: message }, event.threadID, (error, info) => {
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
    if (uid != author) return api.sendMessage('', event.threadID);
    const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(event.body)}\n\n${xv}&model=v3`
    const res = await axios.get(url2);
    const message = res.data.reply
    api.unsendMessage(messageID);
    return api.sendMessage({ body: message }, event.threadID, (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: commandName,
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  }
};