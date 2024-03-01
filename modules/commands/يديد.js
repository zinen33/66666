const axios = require('axios');
const fs = require('fs-extra');

module.exports.config = {
  name: "دمج",
  version: "1.2",
  hasPermssion: 0,
  credits: "عمر",
  description: "مالي خلق اكتب شرح",
  commandCategory: "العاب",
  usages: "مالي خلق اكتب شرح",
  cooldowns: 5,
  dependencies: {
    "axios": " ",
    "fs-extra": " "
  },

};



module.exports.run = async function ({ api, event, args, models, Users, Threads, Currencies, permission }) {


  const readStream = [];
  const emoji1 = args[0];
  const emoji2 = args[1];

  if (!emoji1 || !emoji2)
    return api.sendMessage("هيك دمج 🙂 😉\n\nلاتنسا فراغ بين الايموجيات", event.threadID);

  const generate1 = await generateEmojimix(emoji1, emoji2);
  const generate2 = await generateEmojimix(emoji2, emoji1);

  if (generate1)
    readStream.push(generate1);
  if (generate2)
    readStream.push(generate2);

  if (readStream.length == 0)
    return api.sendMessage(`مش ممكن دمج ذا ${emoji1} مع ذا ${emoji2}`, event.threadID);

  api.sendMessage({
    body: `تم دمجت ذا ${emoji1} مع ذا ${emoji2}`,
    attachment: readStream
  }, event.threadID);
};

async function generateEmojimix(emoji1, emoji2) {
  try {
    const { data: response } = await axios.get("https://goatbotserver.onrender.com/taoanhdep/emojimix", {
      params: {
        emoji1,
        emoji2
      },
      responseType: "stream"
    });
    response.path = `emojimix${Date.now()}.png`;
    return response;
  } catch (e) {
    return null;
  }
}