module.exports.config = {
    name: `مقص`,
    version: `1.0.0`,
    hasPermssion: 0,
    credits: `عمر`,
    description: `لعبه حجر ورقه مقص \n كيفية الاستخدام : اسم الامر بعدين تختار لو ورقة لو حجر لو مقص وتراهن بمبلغ  ورق 50`,
    commandCategory: `العاب`,
    usages: `[مقص/حجر/ورق]`,
    cooldowns: 10
};
module.exports.run = async function({ api, event, args, Users, Currencies }) {
    const { threadID, messageID, senderID } = event;
    const money = (await Currencies.getData(senderID)).money;
    const fs = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];

    const listIMG = ['https://i.imgur.com/1uBAGlO.jpg', 'https://i.imgur.com/EOZx1tL.jpg', 'https://i.imgur.com/2WSbVaK.jpg'];
    const listItem = ['مقص', 'حجر', 'ورق'];

    var bot = listItem[Math.floor(Math.random() * listItem.length)];

    var user = args[0];
    var coins = args[1];
    if(!user) return api.sendMessage('[الاموال 💸] بيانات مفقودة , راهن بملغ اعلى من 50!', threadID, messageID);
    if(listItem.includes(user.toLowerCase()) == false) return api.sendMessage('*اسم الامر + حجر او ورق او مقص + مبلغ الرهان ', threadID, messageID);

    var fu = listItem.findIndex(i => i == user);
    var fb = listItem.findIndex(i => i == bot);
    var a = [fu, fb];
    
    if (args[1] < 50 || isNaN(args[1])) return api.sendMessage(`💸 مبلغ رهانك غير مناسب أو أقل من 50 دولارًا`, threadID, messageID);
    if (money < coins) return api.sendMessage(`💸 فلوسك  ${coins}$ ميكفن للعب`, threadID, messageID);

    var compare = function (choice1, choice2){
        var out = [`✌️`, `👊`, `✋`];
        var checkwin = []
        var msgWin = `\n 🎎 انت: ${out[fu]} 𝐕𝐒 🤖 البوت: ${out[fb]}\n[مبلغ الرهان 💸] تم اضافة: ${coins}$`
        var msgLose = `\n 🎎 انت اختاريت  : ${out[fu]} 𝐕𝐒 🤖 البوت اختار : ${out[fb]}\n[مبلغ الرهان  💸] تم خصم : ${coins}$ من اموالك`
        if(choice1 == choice2) {
            checkwin.push(`[النتيجة 🐸] - تعادل \n[𝐕𝐒] 🎎 انت: ${out[fu]}\n[𝐕𝐒] 🤖 البوت: ${out[fb]}`)
            checkwin.push(3)
            return checkwin
        }
        if(choice1 == 'حجر') {
            if(choice2 == 'مقص') {
                checkwin.push(`[النتيجة] - فوز ${msgWin}`)
                checkwin.push(0)
                return checkwin
            }
            if(choice2 == 'ورق') {
                checkwin.push(`[التيجة] - خسارة ${msgLose}`)
                checkwin.push(1)
                return checkwin
            }
        }
        if(choice1 == 'ورق') {
            if(choice2 == 'حجر') {
                checkwin.push(`[النتيجة] - فوز ${msgWin}`)
                checkwin.push(0)
                return checkwin
            }
            if(choice2 == 'مقص') {
                checkwin.push(`[النتيجة] - خسارة ${msgLose}`)
                checkwin.push(1)
                return checkwin
            }
        }
        if(choice1 == 'مقص') {
            if(choice2 == 'ورق') {
                checkwin.push(`[النتيجة] - فوز ${msgWin}`)
                checkwin.push(0)
                return checkwin
            }
            if(choice2 == 'حجر') {
                checkwin.push(`[النتيجة] - خسارة ${msgLose}`)
                checkwin.push(1)
                return checkwin
            }
        }
    };
    async function image(list) {
        var images = [];
        let download = (await axios.get(`${list[fb]}`, { responseType: "arraybuffer" } )).data; 
        let download_2 = (await axios.get(`${list[fu]}`, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync( __dirname + `/cache/avt${fb}.png`, Buffer.from(download, "utf-8"));
        fs.writeFileSync( __dirname + `/cache/avt${fu}.png`, Buffer.from(download_2, "utf-8"));
        images.push(fs.createReadStream(__dirname + `/cache/avt${fu}.png`));
        images.push(fs.createReadStream(__dirname + `/cache/avt${fb}.png`));
        return images
    }
    async function moneyU(type) {
        if(type == 3) return
        if(type == 0)  return Currencies.setData(senderID, options = {money: money + parseInt(coins)});
        if(type == 1) return Currencies.setData(senderID, options = {money: money - parseInt(coins)});
    }
    await moneyU(compare(user, bot)[1])
    var msg = {body: compare(user, bot)[0], attachment: await image(listIMG)}
    return api.sendMessage(msg, threadID, messageID);
}



