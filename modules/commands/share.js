module.exports.config = {
	name: 'جافا',
	version: '1.0.0',
	hasPermssion: 2,
	credits: 'عمر',
	description: 'مش دخلك 🐸🤝🏻',
	commandCategory: 'المطور',
	usages: ' ',
	cooldowns: 0
};

module.exports.run = async ({ args, api, event, Users }) => {
	const fs = require("fs-extra")
  const permission = ["100094409873389"]
    if (!permission.includes(event.senderID)) return api.sendMessage("ماعدك صلاحية  :>", event.threadID, event.messageID);
	const stringSimilarity = require('تشابه السلسلة');
	const file = args.join(" ");
	if(!file) return api.sendMessage('لا يمكن ترك اسم الملف فارغًا', event.threadID, event.messageID);
	if (!file.endsWith('.js')) return api.sendMessage('لا يمكن أن يكون امتداد الملف مختلفًا عن .js', event.threadID, event.messageID);
	if(event.type == "message_reply") {
		var uid = event.messageReply.senderID
		var name = (await Users.getData(uid)).name
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 1) var search = checker.bestMatch.target;
        	if(search == undefined) return api.sendMessage('🔎 لم يتم العثور على الملف' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 لم يتم العثور على الملف: ' + file + ' \n🔎الملفات المماثلة هي: ' + search + '.js, \n» اترك مشاعرك في هذه الرسالة لتعطيها.', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'user',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search,
	            uid: uid,
	            namee: name
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' ها انت', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, uid, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt'))).then(
            api.sendMessage('» تفقد رسائلك ' + name, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('»حدث خطأ أثناء إرسال الملف إلى' + name, event.threadID, event.messageID);
            }, event.messageID));
	}
	else {
		if(!fs.existsSync(__dirname+"/"+file)) { 
			var mdl = args.splice(1, args.length);
		  	mdl = fs.readdirSync(__dirname).filter((file) => file.endsWith(".js"))
		  	mdl = mdl.map(item => item.replace(/\.js/g, ""));
			var checker = stringSimilarity.findBestMatch(file, mdl)
		    if (checker.bestMatch.rating >= 0.5) var search = checker.bestMatch.target;
       		if(search == undefined) return api.sendMessage('🔎 Không tìm thấy file ' + args.join(" "), event.threadID, event.messageID); 
			return api.sendMessage('🔎 لم يتم العثور على الملف : ' + file + ' \n🔎 الملف مشابه لـ: ' + search + '.js, \n» اترك مشاعرك في هذه الرسالة لتعطيها .', event.threadID, (error, info) => {
	        global.client.handleReaction.push({
	        	type: 'thread',
	            name: this.config.name,
	            author: event.senderID,
	            messageID: info.messageID,
	            file: search
	        })}, event.messageID);
		}
		fs.copyFile(__dirname + '/'+file, __dirname + '/'+ file.replace(".js",".txt"));
		return api.sendMessage({
			body: '»  File ' + args.join(' ') + ' của bạn đây', 
			attachment: fs.createReadStream(__dirname + '/' + file.replace('.js', '.txt'))
		}, event.threadID, () => fs.unlinkSync(__dirname + '/' + file.replace('.js', '.txt')), event.messageID);
	}
}
module.exports.handleReaction = ({ Users, api, event, handleReaction,  }) => {
    var { file, author, type, uid, namee } = handleReaction;
    if (event.userID != handleReaction.author) return;
    const fs = require("fs-extra")
    var fileSend = file + '.js'
    switch (type) {
    	case "user": {
		    fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' ها انت', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, uid, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt'))).then(
            api.sendMessage('» تفقد رسائلك ' + namee, event.threadID, (error, info) => {
            	if(error) return api.sendMessage('» حدث خطأ أثناء إرسال الملف إلى ' + namee, event.threadID, event.messageID);
            }, event.messageID));;
		}
		case "thread": {
			fs.copyFile(__dirname + '/'+fileSend, __dirname + '/'+ fileSend.replace(".js",".txt"));
		    api.unsendMessage(handleReaction.messageID)
			return api.sendMessage({
				body: '» File ' + file + ' ها انت', 
				attachment: fs.createReadStream(__dirname + '/' + fileSend.replace('.js', '.txt'))
			}, event.threadID, () => fs.unlinkSync(__dirname + '/' + fileSend.replace('.js', '.txt')), event.messageID);
		}
	}
}
