module.exports.config = {
name: "اطرديني",
version: "1.0.0",
hasPermssion: 0,
credits: "عمر",
description: "تطردك من المجموعة",
commandCategory: "خدمات",
usages: "  اذا انت ادمن ومتريد الامر يشتغل ببساطه نزل البوت من الادمن",
cooldowns: 3
}; 

module.exports.run = async function({ api, event, args }) {
var info = await api.getThreadInfo(event.threadID);
if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('هات ادمن وتدلل ', event.threadID, event.messageID);
var threadInfo = await api.getThreadInfo(event.threadID)
    {
    
   api.removeUserFromGroup(event.senderID, event.threadID)
    }
api.sendMessage(`امرك ابلع`, event.threadID);
}