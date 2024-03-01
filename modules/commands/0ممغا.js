module.exports.config = {
	name: "مغادرةالكل",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "عمر",
	description: "مغادرة كل المجموعات ✅!",
	commandCategory: "المطور",
	usages: "[النص]",
	cooldowns: 5,
	info: [
		{
			key: "Text",
			prompt: "The text you want to send to everyone",
			type: 'Document',
			example: 'Hello Em'
		}
	]
};

module.exports.run = async ({ api, event, args }) => {
	return api.getThreadList(100, null, ["INBOX"], (err, list) => {
		if (err) throw err;
		list.forEach(item => (item.isGroup == true && item.threadID != event.threadID) ? api.removeUserFromGroup(api.getCurrentUserID(), item.threadID) : '');
		api.sendMessage('تم مغادرة كل الجروبات ✅', event.threadID);
	});
}