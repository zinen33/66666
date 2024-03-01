module.exports.config = {
	name: "اكشن",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "عمر",
	description: "يقترحلك افلام عشوائية",
	commandCategory: "افلام",
	usages: "ا",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = ["Tenet • 2020","Gods of Egypt • 2016","Man of Steel • 2013 ","Batman v Superman: Dawn of Justice • 2016 ","Wathmen • 2009"," Kiill Bill: Vol.1 • 2003 ","Kill Bill: Vol.2 • 2004 ","Die Hard • 1988","Jumanji: Welcome to the Jungle • 2017","Ronin • 1998","Mortal Kombat • 2021","V for Vintenda • 2005","Gemini Man • 2019","Suicide Squad • 2016","The Gentleman • 2019","Mad Max: Fury Road 2015","Heat • 1995","Inception • 2010","The Matrix • 1999", "Memento • 2000","Prisoners •2013","Catch me if you can  • 2002","Child 44 • 2015","The Tourist  • 2010","The Revenant • 2015","Asuran ","Harakiri ","Seven Samurai","Gladiator","Léon: The Professional ","Terminator 2 ","Fury","No country for old men"," Moonfall • 2022 "," The Adam project • 2022 "," Blacklight • 2022 "," Last looks • 2022","  Old gard • 2020 ","No Time To Die • 2022 "," The contract • 2006 ","  Saving private ryan  • 1998 ","  Terminator  2 • 1991 ","  The Rescue • 2021 "," DUNE • 2022 ","Casino royal • 2006 "," District 9 •  2009 "," Skyfall • 2012 ","  Hot fuzz • 2007 "," Dunkirk • 2017 ","  The Raid • 2011","Dark city • 1998 "," Kick-Ass • 2010","  Lone survivor • 2013"," 24 : Redemption • 2008"," Gost dog • 1999 "," Undisputed 1-2-3 ","  John wick 1-2-3","  Nobody • 2021 "," Little boy • 2015"," Taken • 2008"," The bourne identity  •2002","V for vendetta • 2005"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` [🥀] شوف فيلم   :

${tle}`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};