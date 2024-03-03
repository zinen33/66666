const axios = require('axios');
module.exports = {
  config: {
    name: "اكيناتور",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "DRIDI-RAYEN",
	description: "Ban or unblock users",
  usePrefix: true,
	commandCategory: "المطور",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
  },

  run: async function ({ event, api }) {
    const gry_server = "https://akenator-da7856313e76.herokuapp.com/game";




    const u = {
      user_id: event.senderID,
      answer: "0",
      region: "ar"

    };

    const res = await axios.post(gry_server, u);







    const bro = res.data.question;

    return api.sendMessage({ body: bro + "︙🧞" }, event.threadID , (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: 'اكيناتور',
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  },

  handleReply: async function ({ api, event, handleReply }) {
    const { author, messageID } = handleReply;
    if (event.senderID != author) return api.sendMessage('مش لك', event.threadID, event.messageID );
    let gry_server = "https://akenator-da7856313e76.herokuapp.com/game";
    let answer;

    switch (event.body) {
      case "نعم":
        answer = "0";
        break;
      case "لا":
        answer = "1";
        break;
      case "لا اعلم" :
        answer = "2";
        break;
      case "من الممكن":
        answer = "3";
        break;
        case "الضاهر لا":
        answer = "4";
        break;
        case "رجوع":
          gry_server = gry_server.replace("/game","/back");
          break;
      default:
        return api.sendMessage("الرجاء الرد ب\n\nنعم | لا | لا اعلم | من الممكن | الضاهر لا\n\nرجوع : رجوع خطوة وراء", event.threadID, event.messageID );
    }
    let u = {
      user_id: event.senderID,
      answer: answer, 
      region: "ar"
    };
    const res = await axios.post(gry_server, u);

if (res.data.result) {
  const name = res.data.result[0].name;
    const des = res.data.result[0].description;
    const imged = await axios.get(res.data.result[0].absolute_picture_path, {responseType: "stream"});
 return api.sendMessage({

    body: `اسم الشخصية: ${name}\n\nنبذة عن الشخصية: ${des}`,
    attachment: imged
  }, event.threadID, event.messageID )
}

    const replyMessage = res.data.question;

    return api.sendMessage({ body: replyMessage + "︙🧞"}, event.threadID, (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: 'اكيناتور',
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  },
};
