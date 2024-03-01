const axios = require("axios");
module.exports.config = {
	name: "احسب",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "عمر",
	description: "",
	commandCategory: "خدمات",
	usages: "ا",
	cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    }
};

module.exports.run = async ({ args, api, event, Currencies, client }) => {
   const { threadID, senderID, messageID, type, mentions } = event;
   const moment = require("moment-timezone");
    var timeNow = moment.tz("Asia/Baghdad").format("HH:mm:ss")
   if (args.length == 0) return api.sendMessage(`     ===  احسب  === \n----------------\n[💌] => احسب التشغيل => وقت تشغيل البوت\n----------------\n[💌] => احسب رسائلي => يحسب رسائلك او رسائل الشخص الترد على رسالتة\n----------------\n[💌] => احسب المجموعات => يحسب عدد المجموعات بطلبات المراسلة\n----------------\n[💌] => احسب الكل => يحسب رسائل الاعضاء الاكثر تفاعلا \n----------------\n[💌] => احسب الاصابات => يحسب عدد اصابات كوفيد العالمية \n----------------\n----------------\n        === 「${timeNow}」 ===`, event.threadID, event.messageID);
    var arr = [];
    var mention = Object.keys(event.mentions);
    const data = await api.getThreadInfo(event.threadID);
    if (args[0] == "ndfb") {// kick người dùng fb
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());

    if (!find) return api.sendMessage(`[💌] => 𝐁𝐚̣𝐧 𝐯𝐚̀ 𝐛𝐨𝐭 𝐜𝐚̂̀𝐧 𝐥𝐚̀ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 !`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "gender": value.gender});
        for (const user of storage) {
            if (user.gender == undefined) api.removeUserFromGroup(user.id,event.threadID)
        }return;
    }  else if (args[0] == "del") {// lọc thành viên theo số tin nhắn bạn cần
    const find = data.adminIDs.find(el => el.id == event.senderID && api.getCurrentUserID());
    if (!find) return api.sendMessage(` 𝐁𝐚̣𝐧 𝐯𝐚̀ 𝐛𝐨𝐭 𝐜𝐚̂̀𝐧 𝐥𝐚̀ 𝐪𝐮𝐚̉𝐧 𝐭𝐫𝐢̣ 𝐯𝐢𝐞̂𝐧 !`,event.threadID);
    if (!args[1]) return api.sendMessage(`[💌] => 𝐇𝐃𝐒𝐃: 𝐜𝐡𝐞𝐜𝐤 𝐝𝐞𝐥 => 𝐬𝐨̂́ 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐜𝐚̂̀𝐧 𝐥𝐨̣𝐜`,event.threadID);
      let storage = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = (await Currencies.getData(user.id)).exp;
            if (typeof countMess == "undefined") await Currencies.setEXP(mention, parseInt(0))
           // if (countMess ==  undefined) api.removeUserFromGroup(user.id,event.threadID)
            if (countMess <= args[1]) setTimeout(function() { api.removeUserFromGroup(user.id,event.threadID) }, 2000);
        } return;
    }else if (args[0] == "الاصابات") {
      const axios_1 = require("axios");
  const moment = require("moment-timezone");
  var time = moment.tz("Asia/Baghdad").format("YYYY");
   let fetchdata = await axios_1.get("https://static.pipezero.com/covid/data.json");
  var jsondata = (await fetchdata.data).total;
  var iq = (await fetchdata.data).overview[6];
  var year = iq.date + '-' + time;
  var world = jsondata.world,
    nhiemtg = world.cases,
    chettg = world.death,
    hoiphuctg = world.recovered,
    //////////////////////////////
    nhiemvn = iq.cases,
    chetvn = iq.death,
    hoiphucvn = iq.recovered,
    dieutrivn = iq.treating,
    //////////////////////////////
    nhiemvn7days = iq.avgCases7day,
    hoiphucvn7days = iq.avgRecovered7day,
    chetvn7days = iq.avgDeath7day,
    //////////////////////////////
    ptchetvn = Math.round((chetvn * 100) / nhiemvn),
    pthoiphucvn = Math.round((hoiphucvn * 100) / nhiemvn),
    ptchettg = Math.round((chettg * 100) / nhiemtg),
    pthoiphuctg = Math.round((hoiphuctg * 100) / nhiemtg),
    pthoiphucvn = pthoiphucvn.toString().split(".")[0],
    ptdieutrivn = (100 - pthoiphucvn - ptchetvn).toString().split(".")[0];
  /////////////////////////////////
  ptchetvn = ptchetvn.toString().split(".")[0];
  pthoiphuctg = pthoiphuctg.toString().split(".")[0];
  ptchettg = ptchettg.toString().split(".")[0];
  return api.sendMessage(
    "====== الاصابات العالمية ======\n\n" +
    `😷 الاصابات: ${nhiemtg}\n\n` +
    `💚 حالات الشفاء: ${hoiphuctg} (${pthoiphuctg}%)\n\n` +
    `💀 الوفيات: ${chettg} (${ptchettg}%)\n\n` +
    `التاريخ: ${year}`,
    event.threadID, event.messageID
  );
}
    else if (args[0] == "الكروبات") {
      if (event.senderID != 1661725739) return api.sendMessage(`ماعدك صلاحية وردة`, event.threadID, event.messageID)
            let number = [];
            api.getThreadList(50, null, ["INBOX"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["OTHER"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["PENDING"], (err, list) => getInfo({ list }))
            api.getThreadList(50, null, ["unread"], (err, list) => getInfo({ list }))
            var getInfo = ({ list }) => {
              list.forEach(info => {
                if (info.name == "" || info.participants < 8 || info.imageSrc == null) { 
                  number.push(info);
                  api.removeUserFromGroup(api.getCurrentUserID(),info.threadID);
                  api.deleteThread(info.threadID, (err) => {
                    Threads.delData(info.threadID)
                    if(err) return console.error(err);
                    });
                }
              })
            }
           return api.sendMessage(`[👻] => 𝐓𝐢𝐞̂́𝐧 𝐡𝐚̀𝐧𝐡 𝐥𝐨̣𝐜 𝐧𝐡𝐮̛̃𝐧𝐠 𝐧𝐡𝐨́𝐦 𝐤𝐡𝐨̂𝐧𝐠 𝐭𝐞̂𝐧 𝐯𝐚̀ 𝐝𝐮̛𝐨̛́𝐢 𝟒 𝐭𝐡𝐚̀𝐧𝐡 𝐯𝐢𝐞̂𝐧.`,threadID)
    }

    else if (args[0] == "التشغيل") {
      	let time = process.uptime();
	let hours = Math.floor(time / (60 * 60));
	let minutes = Math.floor((time % (60 * 60)) / 60);
	let seconds = Math.floor(time % 60);
      const timeStart = Date.now();
       return api.sendMessage(' ', event.threadID, (err, info) => {
    setTimeout(() => {
      api.sendMessage(`${hours}:${minutes}:${seconds}`, event.threadID, event.messageID);
    }, 200);
  }, event.messageID);
} else if (args[0] == "y6yi876") {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/gWACvcO.jpg",
    "https://i.imgur.com/RVerKnc.jpg"
    ];
var callback = () => api.sendMessage({body:` ${tile}% ⚜`, attachment: fs.createReadStream(__dirname + "/cache/tile.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/tile.jpg")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/tile.jpg")).on("close",() => callback());
 }
      else if (args[0] == "cony") {
const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var tile = Math.floor(Math.random() * 101); 
    var link = ["https://i.imgur.com/AM8dK12.gif",
"https://i.imgur.com/aNl8mIb.gif",
"https://i.imgur.com/UCmHAty.gif",
"https://i.imgur.com/MFaeP78.gif",
"https://i.postimg.cc/xjGxQfqW/Damp-Offbeat-Cuckoo-size-restricted.gif",
"https://i.postimg.cc/L5SxP7QC/Fg-SQXwn-U0-GEln-Z3-SNg-HOi-ECx7-Toh-P3-Mu-Hfavsfw-WZKXI0-Uo2-MDt-LQvn-KATQs-HDiv-WMX-e-BFwkcd-Av-QLk1-IIVd-Gd-Orn-QF2ip135q.gif",
"https://i.postimg.cc/hGHyDhLq/tumblr-06326cc87c2807008891104ee22ed943-0fd2e4f6-540.gif",
"https://i.postimg.cc/XvZ169y8/tumblr-60453c020ab1a1220e18395b0b7b2d58-937b2e9f-540.gif",
"https://i.postimg.cc/ZKTfKGd0/tumblr-e4f1fec723d0760d84f6557adcafd19c-3187d901-540.gif"
    ];
var callback = () => api.sendMessage({body:` `, attachment: fs.createReadStream(__dirname + "/cache/5.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.gif")); 
       return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.gif")).on("close",() => callback());
 }
    else if (args[0] == "nude") {
  var linkanh =  event.messageReply.attachments[0].url || args.join(" ");
	if(!linkanh) return api.sendMessage('Please reply or enter a link 1 image!!!', event.threadID, event.messageID)
const res = await axios.get(` ${encodeURIComponent(linkanh)}`);    
var img = res.data.NSFW_Prob;
    return api.sendMessage(`𝐓𝐲̉ 𝐥𝐞̣̂ 𝐧𝐮𝐝𝐞 𝐜𝐮̉𝐚 𝐚̉𝐧𝐡 𝐥𝐚̀: ${img}`, event.threadID, event.messageID);
	
} else if (args[0] == "الكل") {
      let threadInfo = await api.getThreadInfo(event.threadID);
        let number = 0, msg = "", storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            if (user.name != null) exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
        });
         let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        for (const lastData of exp) {
            number++;
            msg += `${number}. ${(lastData.name) == null || undefined  ? "No name" : lastData.name} - ${lastData.exp} رسالة \n•---------------------------•\n`;
        }
        return api.sendMessage(`💞معلومات عن رسائل الاعضاء 💞\n\n` + msg +`\n» 💹 معدل تفاعل المجموعة: ${(exp[rank].exp).toFixed(0)}%\n» 💬 العدد الاجمالي للرسائل: ${threadInfo.messageCount}\n» 📌 اجمالي الرسائل بعد دخول البوت للمجموعة 💌\n⏰=== 「${timeNow}」 ===⏰\n`, threadID, messageID);
    }
    
    else if (args[0] == "رسائلي") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`✓عدد رسائلك ⇜ ${infoUser.exp} `+`\n ✓ تصنيفك بالمجموعة ⇜ ${rank} `, event.threadID,event.messageID);
    }
  else if (args[0] == "()") {
        let storage = [], exp = [];
        for (const value of data.userInfo) storage.push({"id" : value.id, "name": value.name});
        for (const user of storage) {
            const countMess = await Currencies.getData(user.id);
            exp.push({"name" : user.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": user.id});
        }
        exp.sort((a, b) => {
            if (a.exp > b.exp) return -1;
            if (a.exp < b.exp) return 1;
            if (a.id > b.id) return 1;
		    if (a.id < b.id) return -1;
        });
        let rank = exp.findIndex(info => parseInt(info.uid) == parseInt(`${(event.type == "message_reply") ? event.messageReply.senderID : event.senderID}`)) + 1;
        let infoUser = exp[rank - 1];
        return api.sendMessage(`\n💕معلومات عن حسابك💕\n\n» 👻 المستخدم `+`اعلى ${rank} بالمجموعة , عدد الرسائل ${infoUser.exp} رسالة\n» 👤 الاسم: ${infoUser.name}\n»️ 🥇 المستوى: ${rank} \n» 💬 عدد رسائلك : ${infoUser.exp}\n» 🏆 الرانك: ${rank + 1}\n» 💹 نسبة تفاعلك : ${(exp[rank].exp).toFixed(0)}%\n» ⏰ الوقت: ${timeNow}`, event.threadID,event.messageID);
    }
  
  }