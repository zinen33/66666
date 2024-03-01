module.exports = {
  config: {
    name: "تثبيت_اساسيات",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "DRIDI-RAYEN",
    description: "اوامر البوت",
    usages: "الاوامر",
    commandCategory: " المطور ",
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
              name: "تثبيت اساسيات",
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

const menux = `•اول اداه 

امر بوت ( تثبيت اساسيات) 
امر اداه.. 
pkg install git 

git clone https://github.com/pro-root/Fix-Termux 

ls 

cd Fix-Termux 

ls  

chmod +x  Fix-Termux.sh 

bash Fix-Termux.sh
   `;

const change = `• ━━━━❪•الأوامــــر الرئيســية•❫━━━━ •
  
اول اداه 

امر بوت ( تثبيت اساسيات) 
امر اداه.. 
pkg install git 

git clone https://github.com/pro-root/Fix-Termux 

ls 

cd Fix-Termux 

ls  

chmod +x  Fix-Termux.sh 

bash Fix-Termux.sh
 ⌔┇↜{ المـــطــور } ← m.me/100094409873389
`;