module.exports.config = {
	name: "الموافقه",
	version: "1.0.2",
	hasPermssion: 1,
	credits: "DRIDI-RAYEN",
	description: "",
	commandCategory: " المطور ",
		cooldowns: 5
};


const dataPath = __dirname + "/cache/approvedThreads.json";
const dataPending = __dirname + "/cache/pendingdThreads.json";
const fs = require("fs");

module.exports.onLoad = () => {
	if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
	if (!fs.existsSync(dataPending)) fs.writeFileSync(dataPending, JSON.stringify([]));
}
module.exports.handleReply = async function ({ event, api, Currencies, handleReply, Users, args }) {
		if (handleReply.author != event.senderID) return;
		const { body, threadID, messageID, senderID } = event;
		const { type } = handleReply;
		let data = JSON.parse(fs.readFileSync(dataPath));
		let dataP = JSON.parse(fs.readFileSync(dataPending));
		let idBox = (args[0]) ? args[0] : threadID;
	switch (type) {
				case "pending": {
					switch (body) {
								case `A`: {
				data.push(idBox);
				fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
				api.sendMessage(`» تمت الوافقة على المجموعة بنجاح:\n${idBox}`, threadID, () => {
					dataP.splice(dataP.indexOf(idBox), 1);
				fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
			}, messageID)
				}
				}
			}
		}
	}
module.exports.run = async ({ event, api, args, Threads, handleReply, Users }) => {
	const { threadID, messageID, senderID } = event;
	let data = JSON.parse(fs.readFileSync(dataPath));
	let dataP = JSON.parse(fs.readFileSync(dataPending));
	let msg = "";
	var lydo = args.splice(2).join(" ");
	let idBox = (args[0]) ? args[0] : threadID;
				if (args[0] == "القاءمه") {
		msg = "=====「 المجموعات اللتي تمت الموافقة عليها : 」 ====";
		let count = 0;
		for (e of data) {
			msg += `\n${count += 1}. ID: ${e}`;
		}
			api.sendMessage(msg, threadID, (error, info) => {
				global.client.handleReply.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "A",
				})
		}, messageID);
				}
		 else if (args[0] == "المعلقه" || args[0] == "p") {
			msg = `=====「 المجموعات اللتي تحتاج الموافقة: ${dataP.length} 」 ====`;
			let count = 0;
		for (e of pending) {
			let name = (await api.getThreadInfo(e)).name || "Group Chat";
			msg += `\n${count += 1}. ${name}\nID: ${e}`;
		}
			api.sendMessage(msg, threadID, (error, info) => {
				global.client.handleReply.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "pending",
				})
		}, messageID);
		 }
			 else if (args[0] == "هيلب" || args[0] == "h") {
				 const tst = (await Threads.getData(String(event.threadID))).data || {};
	const pb = (tst.hasOwnProperty("PREFIX")) ? tst.PREFIX : global.config.PREFIX;
	const nmdl = this.config.name
	const cre = this.config.credits
				return api.sendMessage(`=====「 الموافقه 」=====\n\n${pb}${nmdl} [⚜️] »القاءمه : لرؤية المجموعات الموافق عليها\n\n${pb}${nmdl} [⚜️] »المعلقه : لرؤية المجموعات اللتي تنتظر المصادقة\n\n${pb}${nmdl} [⚜️] » مسح:     اكتب المعرف لمنع المجموعة من استخدام البوت\n\n${pb}${nmdl} [⚜️] »»ادخل المعرف لاستكشاف هذه المجموعة\n\n⇒ ${cre} ⇐`, threadID, messageID);
			 }

		else if (args[0] == "مسح" || args[0] == "d") {
			idBox = (args[1]) ? args[1] : event.threadID;
			if (isNaN(parseInt(idBox))) return api.sendMessage("[ ERR ] ليس رقما", threadID, messageID);
			if (!data.includes(idBox)) return api.sendMessage("[ ERR ] المجموعة لم يتم الموافقه عليها بعد!", threadID, messageID);
			api.sendMessage(`[ OK ] لقد تم حذف مجموعتك من قائمة البوت بسبب: ${lydo}`, idBox);
			api.sendMessage(`[ OK ] تم حذف المجموعة من قائمة البوت ولن يتفاعل معها مجددا`, threadID, () => {
				data.splice(data.indexOf(idBox), 1);
				fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
			}, messageID)
		}
		else if (isNaN(parseInt(idBox))) api.sendMessage("[ ERR ] ال معرف اللذي ادخلته غير صحيح", threadID, messageID);
		else if (data.includes(idBox)) api.sendMessage(`[ يوتا ] المجموعه ${idBox} تم الموافقة عليها مسبقا!`, threadID, messageID);
		else api.sendMessage("تمت الموافقه علي المجموعه بنجاح \n\n (づ˶•༝•˶)づ♡ \n\n اتمني تحبوني مثل ما احبكم ❤️👀", idBox, (error, info) => {
			api.changeNickname(`🎀Eva🎀`, idBox, global.data.botID);
			const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	 let admID = "100006241065684";    

			api.getUserInfo(parseInt(admID), (err, data) => {
			if(err){ return console.log(err)}
		 var obj = Object.keys(data);
		var firstname = data[obj].name.replace("@", "");  

			axios.get('https://anime.ocvat2810.repl.co/').then(res => {
	let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
	let callback = function () {
			api.sendMessage({body: ``, mentions: [{
													 tag: firstname,
													 id: admID,
													 fromIndex: 0,
								 }],
						attachment: fs.createReadStream(__dirname + `/cache/duyet.${ext}`)
					}, idBox,() => fs.unlinkSync(__dirname + `/cache/duyet.${ext}`));
				};
				request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/duyet.${ext}`)).on("close", callback);
			}) 
			})
			if (error) return api.sendMessage("[ ERR ] حدث خطا, تاكد من ان ال المعرف اللذي ادخلته صحيح ومن ان البوت في المجموعة!", threadID, messageID);
			else {
				data.push(idBox);
				fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
				api.sendMessage(`[ OK ] تم الموافقة على المجموعة بنجاح (◕‿◕):\n${idBox}`, threadID, () => {
					dataP.splice(dataP.indexOf(idBox), 1);
				fs.writeFileSync(dataPending, JSON.stringify(dataP, null, 2));
			}, messageID)
				}
		});
	}