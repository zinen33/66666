module.exports.config = {
  name: "توب",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "عمر",
  description: "توب النجوم",
  usePrefix: true,
  commandCategory: "الخدمات",
  usages: "ا",
  cooldowns: 5
};


module.exports.run = async ({ event, api, args, Currencies, Users }) => {
    const { threadID, messageID } = event;

    let option = parseInt(10);

    let data, msg = "";

    let i = 0;

    try {
        data = await Currencies.getAll(["userID", "money"]);
    } catch (e) {
        console.log(e);
    }

    data.sort((a, b) => {
        if (a.money > b.money) return -1;
        if (a.money < b.money) return 1;
    });

    if (data.length < option) option = data.length;

    const idBot = global.data.botID;
    data = data.filter(item => item.userID != idBot);

    for (const dataUser of data) {
        if (i === option) break;

        const nameUser = (await Users.getData(dataUser.userID)).name;

        const arq = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
        msg += `${arq[i]}️. 『${nameUser}』: 
         ⌯↫عدد النجوم¦✗¦←${dataUser.money}🌟\n`;
       i += 1;
    }
    


    return api.sendMessage(`🎖️| توب أفضل 10 لاعبين في البوت\n${msg}
    `, threadID, messageID);
};
