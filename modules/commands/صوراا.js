const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
    name: "صور",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "صور من بنترست",
    commandCategory: "خدمات",
    usePrefix: false,
    usages: "[نص]",
    cooldowns: 3,
};

module.exports.run = async function({ api, event, args }) {
    const keySearch = args.join(" ");
   

    const pinterestResponse = await axios.get(`https://api-all-1.arjhilbard.repl.co/pinterest?search=${encodeURIComponent(keySearch)}`);
    const data = pinterestResponse.data.data;

    const imgData = [];

    for (let i = 0; i < 9; i++) {
        const path = __dirname + `/cache/jj${i + 1}.jpg`;
        const imageResponse = await axios.get(data[i], { responseType: 'arraybuffer' });
        fs.writeFileSync(path, Buffer.from(imageResponse.data, 'binary'));
        imgData.push(fs.createReadStream(path));
    }

    api.sendMessage({
        attachment: imgData,
        body: '[⚜️] هذه عمليات البحث ذات الصلة  '
    }, event.threadID, (err, info) => {
        if (err) console.error(err);
        for (let i = 0; i < 9; i++) {
            fs.unlinkSync(__dirname + `/cache/jj${i + 1}.jpg`);
        }
    });
};
