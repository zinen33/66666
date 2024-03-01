module.exports.config = {
	name: "نقاط",
	version: "0.0.1",
	hasPermssion: 2,
	credits: "عمر",
	description: "زيادة المستوى",
	commandCategory: "المطور",
	usages: "نقاط [تاك]",
	cooldowns: 5,
	info: [
		{
			key: 'تاغ',
			prompt: 'شدخلك',
			type: 'ها',
			example: '@تاغ'
		}
	]
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users}) {
var mention = Object.keys(event.mentions)[0];
    var prefix = ";"
    var {body} = event;
    var permission = ["100094409873389"]
    if (!permission.includes(event.senderID)) return api.sendMessage("مش لك مكتوب للمطور ", event.threadID, event.messageID);
    var kong = 0;
    			var content = body.slice(prefix.length + 9, body.length);
			var sender = content.slice(0, content.lastIndexOf(" "));
			var expSet = content.substring(content.lastIndexOf(" ") + 1);
    		  if(args[0]=='رفع'){
    			 return api.sendMessage(`تم تغيير عدد نقاطك الى ${expSet} .`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(expSet)})}, event.messageID);
			}
			else if(args[0]=="del"){
if (args[1] == 'نقاطي'){
			var s = event.senderID;
			const expme =(await Currencies.getData(event.senderID)).exp;
			api.sendMessage(`✅ ${expme}.`, event.threadID, async() => {await Currencies.setData(event.senderID, {exp: parseInt(kong)})});
		}	
		else if (Object.keys(event.mentions).length == 1) {
var mention = Object.keys(event.mentions);
		const expdel = (await Currencies.getData(mention)).exp;
		api.sendMessage(`✅${event.mentions[mention].replace("@", "")}  ${expdel}.`, event.threadID, async() => {await Currencies.setData(mention, {exp: parseInt(kong)})});
		}
		
		else return	api.sendMessage("خطأ في بناء الجملة", event.threadID, event.messageID);
		}
			else if (Object.keys(event.mentions).length == 1) {
			return api.sendMessage({
				body: (`- تم تغيير عدد رسائل  ${event.mentions[mention].replace("@", "")} الى ${expSet} رسالة`),
				mentions: [{
					tag: event.mentions[mention].replace("@", ""),
					id: parseInt(mention)
				}]
			}, event.threadID, async () => {await Currencies.setData(mention, {exp: parseInt(expSet)})});
		}
		else if(args[0]=="UID"){
		var id = args[1];
		var cut = args[2];
		let nameeee = (await Users.getData(id)).name
		   return api.sendMessage(`- تم تغيير عدد نقاط ${nameeee} الى ${cut} رسالة`, event.threadID, async() => {await Currencies.setData(id, {exp: parseInt(cut)})}, event.messageID);

		}
else {
	api.sendMessage(" ", event.threadID, event.messageID)
	}
}