/*
@credit Trankhuong
@chỉnh sửa credit cái con cặc
*/
const fs = require("fs");
module.exports.config = {
    name: "كهف",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "عمر",
	  description: "تشتغل بكهف بأحدى الدول وتحصل فلوس",
	  commandCategory: "الاموال",
    cooldowns: 2000000000,
    envConfig: {
        cooldown: 2000000000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.languages = {
    "vi": {
        "cooldown": "⚡️Bạn đã làm việc rồi, quay lại sau: %1 phút %2 giây."      
    },
    "en": {
        "cooldown": " تعال ورا: %1 دقيقة و %2 ثانية."
    }
}
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/`;
    if (!fs.existsSync(dirMaterial + "cache")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cave.jpg")) request("https://i.postimg.cc/N0D5CTrg/Picsart-22-07-11-15-11-59-573.png").pipe(fs.createWriteStream(dirMaterial + "cave.jpg"));
}
module.exports.handleReply = async ({ 
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != e.senderID) 
return api.sendMessage("- اكعد راحة هذا مو شغلك!", e.threadID, e.messageID)

var a = Math.floor(Math.random() * 5000) + 900; 
var b = Math.floor(Math.random() * 5000) + 800; 
var c = Math.floor(Math.random() * 5000) + 700; 
var x = Math.floor(Math.random() * 5000) + 600; 
var y = Math.floor(Math.random() * 5000) + 500; 
var f = Math.floor(Math.random() * 5000) + 400; 

  var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            var t = Date.parse("") - Date.parse(new Date()),
            m = Math.floor( (t/00/60) % 60 ),
            h = Math.floor( (t/(00*60*60)) % 24 ),
            d = Math.floor( t/(00*60*60*24) ); 
           
            switch(e.body) {
                case "1": msg = `اشتغلت بالكهوف بدوله فيتنام وحصلت  ${a}$`;
                await Currencies.increaseMoney(e.senderID, parseInt(a)); 
                break;             
                case "2": msg = `اشتغلت بالكهوف بدوله الصين وحصلت  ${b}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(b)); 
                break;
                case "3": msg = `اشتغلت بالكهوف بدوله اليابان وحصلت ${c}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(c)); 
                break;
                case "4": msg = `اشتغلت بالكهوف بدوله تايلاند وحصلت ${x}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(x)); 
                break;
                case "5": msg = `اشتغلت بالكهوف بالولايات المتحدة الامريكية وحصلت ${y}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(y)); 
                break;
                case "6": msg = `اشتغلت بالكهوف بدوله كمبوديا وحصلت ${f}$`; 
                await Currencies.increaseMoney(e.senderID, parseInt(f)); 
                break;
                default: break;
            };
            const choose = parseInt(e.body);
            if (isNaN(e.body)) 
            return api.sendMessage("⚡بيا بلد تريد تشتغل بالكهوف ؟ ", e.threadID, e.messageID);
             if (choose > 6 || choose < 1) 
            return api.sendMessage("⚡عليك الأختيار بين الرقم 1 أو 6!", e.threadID, e.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "...") {
                msg = "...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  
    event:e, 
    api, 
    handleReply, 
    Currencies }) => {
    const { threadID, messageID, senderID } = e;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    var   t = Date.parse("") - Date.parse(new Date()),
    d = Math.floor( t/(10*60*00) ),
    h = Math.floor( (t/(10*60*00)) % 00 ),
    m = Math.floor( (t/10/60) % 00 );

    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            hours = Math.floor((time / (10* 60 ))/00),
            minutes = Math.floor(time / 10),
            seconds = ((time % 30) / 00).toFixed(0); 
        return api.sendMessage(`⚡𝑩𝒂̣𝒏 𝒗𝒖̛̀𝒂 𝒍𝒂̀𝒎 𝒄𝒂𝒗𝒆 𝒙𝒐𝒏𝒈 𝒏𝒈𝒉𝒊̉ 𝒏𝒈𝒐̛𝒊 𝒅𝒖̛𝒐̛̃𝒏𝒈 𝒔𝒖̛́𝒄 đ𝒊!`, e.threadID, e.messageID);
    }
    else {    
        var msg = {
            body: "========== 𝑪𝒂𝑽𝒆 =========="+`\n`+
                "\n1 ≻ فيتنام" +
                "\n2 ≻ الصين" +
                "\n3 ≻ اليابان" +
                "\n4 ≻ تايلاند" +
                "\n5 ≻ الولاايات المتحدة الامريكية" +
                "\n6 ≻ كمبوديا" +
                `\n\n📌رد على الرسالة برقم حتى تشتغل باحدى الدول !`,
                attachment: fs.createReadStream(__dirname + `/cache/cave.jpg`)}
                return api.sendMessage(msg,e.threadID,  (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: e.senderID,
            messageID: info.messageID
          })  
        })
    }
}