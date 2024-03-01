module.exports.config = {
	name: "نصيحة",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "عمر",
	description: "أعطيك نصيحة واحدة بشكل عشوائي",
	commandCategory: "ترفية",
	usages: " ",
	cooldowns: 0,
	dependencies: {"srod-v2": "","request": ""}
};

module.exports.run = async ({ event, api, args }) => {
  
  const request = global.nodemodule["request"];
  const srod = global.nodemodule["srod-v2"];
  const Data = (await srod.GetAdvice()).embed.description;
  
  return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=${Data}`), (err, response, body) => {
		if (err) return api.sendMessage("حدث خطاء!", event.threadID, event.messageID);
		var retrieve = JSON.parse(body);
		var text = '';
		retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
    api.sendMessage(Data+'\n'+text, event.threadID, event.messageID)
  });
}