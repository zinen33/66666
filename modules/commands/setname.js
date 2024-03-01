 module.exports.config = {
	name: "نيم",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "عمر",
	description: "قم بتغيير لقبك في مجموعتك أو الشخص الذي تضع علامة عليه",
	commandCategory: "خدمات",
	usages: "",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	const name = args.join(" ")
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
}
