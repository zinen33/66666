module.exports.config = {
    name: "فلم",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عبدالرحمن",
    description: "احصل على معلومات أي فلم او انمي",
    commandCategory: "افلام",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
        let juswa = args.join(" ");
        const res = await axios.get(`https://api.popcat.xyz/imdb?q=${juswa}`);
        console.log(res.data);
        var data = res.data;

        // ترجمة نص data.plot إلى اللغة العربية
        const translationResponsePlot = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=${data.plot}`);
        const translatedTextPlot = translationResponsePlot.data[0][0][0];

        // ترجمة نص data.genres إلى اللغة العربية
        const translationResponseGenres = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=${data.genres}`);
        const translatedTextGenres = translationResponseGenres.data[0][0][0];

        let callback = function() {
            return api.sendMessage({
                body: `-اسم الفلم: ${data.title}\n-سنة الانتاج: ${data.year}\n-الوقت : ${data.runtime}\n-التصنيف : ${translatedTextGenres}\n-المخرجين: ${data.director}\n-التقييم : ${data.rating}\n-ارباح البوكس اوفس : ${data.boxoffice}\n\n-القصة: ${translatedTextPlot}`,
                attachment: fs.createReadStream(__dirname + `/cache/poster.png`)
            }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/poster.png`), event.messageID);
        };
        return request(encodeURI(data.poster)).pipe(fs.createWriteStream(__dirname + `/cache/poster.png`)).on("close", callback);
    } catch (err) {
        console.log(err);
        return api.sendMessage(`اكتب اسم الفلم !`, event.threadID);
    }
}
