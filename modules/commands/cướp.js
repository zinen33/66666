module.exports.config = {
	name: "سرقة",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "عمر",
	description: "سرقة باقي المستخدمين",
	commandCategory: "الاموال",
	usages: "ا",
	cooldowns: 500
};

module.exports.run = async function({ api, event, Users, Currencies }) {
	var alluser = global.data.allUserID
    let victim = alluser[Math.floor(Math.random() * alluser.length)];
    let nameVictim = (await Users.getData(victim)).name
    if (victim == api.getCurrentUserID() && event.senderID == victim) return api.sendMessage('لسوء الحظ ، لا يمكنك السرقة من هذا الشخص. حاول مرة اخرى.', event.threadID, event.messageID);
    var route = Math.floor(Math.random() * 2);
    if (route > 1 || route == 0) {
    const moneydb = (await Currencies.getData(victim)).money;
       var money = Math.floor(Math.random() * 10) + 1;
        if (moneydb <= 0 || moneydb == undefined) return api.sendMessage(`لقد سرقت  ${nameVictim} بس طلع فقير و محصلت شي منه`, event.threadID, event.messageID);
        else if (moneydb >= money) return api.sendMessage(`لقد سرقت ${money} دولار  من ${nameVictim}`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
        else if (moneydb < money) return api.sendMessage(`لقد سرقت كل اموال  ${nameVictim} \n 
  عدد الاموال المسروقه ${moneydb}`, event.threadID, async () => {
            await Currencies.increaseMoney(victim, parseInt("-"+money))
            await Currencies.increaseMoney(event.senderID, parseInt(money))
        }, event.messageID);
    }
    else if (route == 1) {
        var name = (await Users.getData(event.senderID)).name
        var moneyuser = (await Currencies.getData(event.senderID)).money
            if (moneyuser <= 0) return api.sendMessage("ليس لديك المال ، اعمل للحصول على بعض المال.", event.threadID, event.messageID);
            else if (moneyuser > 0) return api.sendMessage(`لقد تم القبض عليك وفقدت ${moneyuser} دولار.`, event.threadID, () => api.sendMessage({ body: `  مبروك ${nameVictim}!\n كمشت ${name} وحصلت ${Math.floor(moneyuser / 2)} دولار كمكافأة!`, mentions: [{ tag: nameVictim, id: victim }, { tag: name, id: event.senderID }] }, event.threadID, async () => {
                await Currencies.increaseMoney(event.senderID, parseInt("-"+ moneyuser))
                await Currencies.increaseMoney(victim, parseInt(Math.floor(moneyuser / 2))) 
            }), event.messageID);
        
    }
}