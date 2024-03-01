module.exports.config = {
    name: "تحويل",
    version: "1.1.1",
    hasPermssion: 0,
    credits: "عمر",
    description: "حول الفلوس - رد ع رسالة الشخص واكتب المبلغ",
    commandCategory: "الاموال",
    usages: "دفع [ رد ع رسالة الشخص واكتب المبلغ ]",
    cooldowns: 5,
     };

module.exports.run = async function ({ api, args, event, Currencies, Users }) {
let { threadID, messageID, senderID } = event;
 var info = await api.getUserInfo(event.senderID);
    var userName = info[event.senderID].name;
    var balance = args[0];
const fs = require('fs');
const axios = require('axios');
const moment = require("moment-timezone");
    var time = moment.tz("Asia/Baghdad").format("HH:mm");
    var day = moment.tz("Asia/Baghdad").format("DD/MM/YYYY");
var content = args.slice(1);
 const { loadImage, createCanvas } = require("canvas");
const data = ["334819875","334819873","334819969","334819439","334819666","364819282","352842956","334819999","372842941"];
    var sdt = data[Math.floor(Math.random() * data.length)] 
 if(!fs.existsSync(__dirname+'/cache/SplineSans-Medium.ttf')) { 
      let getfont = (await axios.get(`https://drive.google.com/u/0/uc?id=102B8O3_0vTn_zla13wzSzMa-vdTZOCmp&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans-Medium.ttf", Buffer.from(getfont, "utf-8"));
    };
    if(!fs.existsSync(__dirname+'/cache/SplineSans.ttf')) { 
      let getfont2 = (await axios.get(`https://drive.google.com/u/0/uc?id=1--V7DANKLsUx57zg8nLD4b5aiPfHcmwD&export=download`, { responseType: "arraybuffer" })).data;
       fs.writeFileSync(__dirname+"/cache/SplineSans.ttf", Buffer.from(getfont2, "utf-8"));
    };
    
    var codeGD = String(Math.floor(Math.random() * (90000000000 - 1)) + 10000000000)
   
if(event.type == "message_reply") { 
mention = event.messageReply.senderID
var name = (await Users.getData(mention)).name
if(!isNaN(args[0])) {
        const coins = (parseInt(args[0]*85))/100;
        let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('[ تحويل ] - حدث خطاء لكن تم اصلاحه 😼 ',threadID,messageID);
        if (coins > balance) return api.sendMessage('[الاموال] - المبلغ الذي تريد تحويله اكبر من ميزانيتك 💳',threadID,messageID);
        else {
          let path = __dirname + "/cache/comment.png";
    let bg = (await axios.get(`https://i.postimg.cc/kXcG0YNN/received-642116578073186.jpg`, {responseType: "arraybuffer" })).data;
    fs.writeFileSync(path, Buffer.from(bg, "utf-8"));
    let bgBase = await loadImage(path);
    let canvas = createCanvas(bgBase.width, bgBase.height);
    let ctx = canvas.getContext("2d");
    const Canvas = global.nodemodule["canvas"];
    ctx.drawImage(bgBase, 0, 0, canvas.width, canvas.height);
    Canvas.registerFont(__dirname+`/cache/SplineSans-Medium.ttf`, {
        family: "SplineSans-Medium"
    });
    Canvas.registerFont(__dirname+`/cache/SplineSans.ttf`, {
        family: "SplineSans"
    });
    ctx.font = "22px SplineSans-Medium";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "start";
    ctx.fillText('-' + args[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '$', 88, 1217);
    ctx.fillText('-' + args[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + '$', 320, 370);
    ctx.font = "25px SplineSans";
    ctx.fillText(`${content}`, 377, 430);
    ctx.font = "23px SplineSans-Medium";
    ctx.textAlign = "right";
    ctx.fillText(`${userName}`, 582, 230);
    ctx.fillStyle = "#000000";
    ctx.font = "24px SplineSans-Medium";
    ctx.fillText(`+84${sdt}`, 297, 265);
    ctx.font = "22px SplineSans";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "right";
    ctx.font = "19px SplineSans-Medium";
    ctx.fillText(' ', 547, 504);
    ctx.fillText(' ', 507, 436);
    ctx.fillText(`${time} - ${day}`, 300, 440);
    const imageBuffer = canvas.toBuffer();
    fs.writeFileSync(path, imageBuffer);
          return api.sendMessage(`[ تحويل ] - يرجى الانتضار حتى يقوم البوت بمعالجة المعاملة  💸`, event.threadID, async (err, info) => {
      await new Promise(resolve => setTimeout(resolve, 5 * 1000));
       await Currencies.increaseMoney(mention, parseInt(coins));
      Currencies.decreaseMoney(senderID, parseInt(coins));
      api.unsendMessage(info.messageID)
       var msg =  {body: `[ تحويل ] - تمت العملية بنجاح`, attachment: fs.createReadStream(path)
    }
   return api.sendMessage(msg,  threadID, async (error, info) => {
    fs.unlinkSync(path),
        messageID
      })
        })
      }
    } else return api.sendMessage('[ تحويل ] - حط المبلغ الذي تريد تحويله 💳',threadID,messageID); 
}
}