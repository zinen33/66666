const fs = require("fs");
const request = require("request");
const { join } = require("path");

module.exports.config = {
  name: "شخصيتي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "لو كنت شخصية انمي شو هتكون",
  commandCategory: "صور",
  usages: "ا",
  cooldowns: 0,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, Users, Threads, Currencies }) => {
  try {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
     const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    var link = [

       "https://i.imgur.com/RRnddBS.jpg",
       "https://i.imgur.com/4av6OnG.jpg",
       "https://i.imgur.com/bID48JU.jpg",
       "https://i.imgur.com/Kkc5CZs.jpg",
       "https://i.imgur.com/T9WwPxL.jpg",
       "https://i.imgur.com/R7trNF3.jpg",
       "https://i.imgur.com/pp3L51v.jpg",
       "https://i.imgur.com/nmTpfIV.jpg",
       "https://i.imgur.com/G7Cmlm5.jpg",
       "https://i.imgur.com/gyk1KTE.jpg",
       "https://i.imgur.com/0C40VMA.jpg",
       "https://i.imgur.com/b0YCfBO.jpg",
       "https://i.imgur.com/EF63R6y.jpg",
       "https://i.imgur.com/uaBmGDh.jpg",
       "https://i.imgur.com/J68g1dP.jpg",
       "https://i.imgur.com/co4wnOI.jpg",
       "https://i.imgur.com/rcXzlbD.jpg",
       "https://i.imgur.com/4K2Lx2E.jpg",
       "https://i.imgur.com/d9KlCjt.jpg",
       "https://i.imgur.com/KriNOKQ.jpg",
       "https://i.imgur.com/phrVQXt.jpg",
       "https://i.imgur.com/5j3cTq5.jpg",
       "https://i.imgur.com/Ot3QVTg.jpg",
       "https://i.imgur.com/QHZN13e.jpg",
       "https://i.imgur.com/SdO0pM9.jpg",
       "https://i.imgur.com/ci4PEdV.jpg",
       "https://i.imgur.com/wJ8Xf7y.jpg",
       "https://i.imgur.com/tWAcRGP.jpg",
       "https://i.imgur.com/BAydztZ.jpg",
       "https://i.imgur.com/vMNBrY3.jpg",
       "https://i.imgur.com/h2bGRek.jpg",
      "https://i.imgur.com/Sg3Ai4Y.jpg",
       "https://i.imgur.com/KFdJypu.jpg",
       "https://i.imgur.com/PChQ6Ea.jpg",
       "https://i.imgur.com/pekp4LZ.jpg",
       "https://i.imgur.com/uKmiejK.jpg",
       "https://i.imgur.com/pXUtKtB.jpg",
       "https://i.imgur.com/Foi1zGB.jpg",
       "https://i.imgur.com/iQ3DWx5.jpg",
       "https://i.imgur.com/r8yrFRw.jpg",
       "https://i.imgur.com/4PqzyWP.jpg",

    ];

    var max = Math.floor(Math.random() * 6);
    var min = Math.floor(Math.random() * 2);

    var data = await Currencies.getData(event.senderID);
    var money = data.money;

    if (money < 500) {
      return api.sendMessage("ادفع 500 دولار", event.threadID, event.messageID);
    } else {
      Currencies.setData(event.senderID, { money: money - 500 });
      var randomLink = link[Math.floor(Math.random() * link.length)];

      const callback = () => {
        api.sendMessage({
          body: `لو كان ${userName} شخصية انمي سيكون`,
          attachment: fs.createReadStream(__dirname + "/cache/1.jpg")
        }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));
      };

      return request(encodeURI(randomLink + (max - min))).pipe(fs.createWriteStream(__dirname + "/cache/1.jpg")).on("close", callback);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage(`حدث خطأ: ${error.message}`, event.threadID, event.messageID);
  }
};
