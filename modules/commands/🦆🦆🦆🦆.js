module.exports = {
  config: {
    name: "استخراج_ايديات",
    version: "1.0.0",
    ذ: 0,
    credits: "DRIDI-RAYEN",
    description: "اوامر البوت",
    usages: "الاوامر",
    commandCategory: " الخدمات ",
    cooldowns: 5,
  },
  run: async ({ api, event }) => {
    try {
      const fs = require("fs-extra");
      api.sendMessage(
        {
          body: menux,
          attachment: fs.createReadStream(__dirname + "/tmp/img.jpeg"),
        },
        event.threadID,
        (err, info) => {
          setTimeout(() => {
            api.editMessage(info.messageID, change);
            global.client.handleReply.push({
              name: "الاوامر",
              messageID: info.messageID,
              type: "changeMenuChange",
            });
          }, 15000);
        },
        event.messageID,
      );
    } catch (error) {
      console.log(error);
    }
  },
  handleReply: async ({ api, event, handleReply }) => {
    const { type, messageID } = handleReply;
    const body = event.body.trim().toLowerCase();
    if (type === "changeMenuChange") {
      if (body === "رجوع") {
        api.editMessage(messageID, menux);
        setTimeout(() => {
          api.editMessage(messageID, change);
        }, 10000);
      }
    }
  },
};

const menux = `•ثاني اداه 
امر بوت ( اداه استخراج ايديات 


امر اداه 

rm -rf FILE
git clone --depth=1 https://github.❤com/Hannan-404/FILE
cd FILE
python FILE.py`;