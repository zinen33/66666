module.exports.config = {
	name: "اكتبي",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "عمر",
	description: " يكتب الي تريدة",
	commandCategory: "خدمات",
	usages: "ا",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("- اكتب رسالة", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
