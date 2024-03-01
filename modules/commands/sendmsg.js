module.exports.config = {
	name: "ارسل",
	version: "0.0.2",
	hasPermssion: 2,
	credits: "عمر",
	description: "ارسال رسالة الى المستخدمين او الكروبات عن طريق حساب البوت ",
	commandCategory: "المطور",
	usages: "رسالة [للمستخدم]/[للكروب] ايدي + الرسالة",
    cooldowns: 5,
};

module.exports.run = async function({ api, event, args, utils }) {
    const moment = require("moment-timezone");
    const permission = ["100094409873389"]
  if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية  :>", event.threadID, event.messageID);
    var gio = moment.tz("Asia/Baghdad").format("HH:mm:ss D/MM/YYYY");
    var msg = args.splice(2).join(" ");
    if (args[0]=='للمستخدم') {
        return api.sendMessage(`رسالة من المطور !\nالوقت : ${gio}\n\nالرسالة : ` + msg, args[1]).then(
            api.sendMessage('تم إرسال الرسالة للعضو ' + args[1] + ' بنجاح', event.threadID, event.messageID));
    } else {
            if (args[0]=='للكروب') { return api.sendMessage(`رسالة من المطور !\nالوقت : ${gio}\n\nالرسالة : ` + msg, args[1]).then(
            api.sendMessage('تم أرسل الرسالة إلى المجموعة ' + args[1] + ' بنجاح', event.threadID, event.messageID))
            }
                else return utils.throwError("sendmsg", event.threadID, event.messageID);
        }
    }
