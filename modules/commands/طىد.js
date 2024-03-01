module.exports.config = {
	name: "طرد",
	version: "2.0.5",
	hasPermssion: 0,
	credits: "DRIDI-RAYEN",
	description: "ازالة الاعضاء من المجموعة ☑️✨",
  usePrefix: true,
	commandCategory: "〘 ادمن_جروب 〙",
	usages: "/حضر (رد على رسالة شخصاو اعمل له اشارة)",
	cooldowns: 5,
	info: [
		{
			key: '[تاغ] او [رد على الرسالة] "السبب"',
			prompt: 'تحذير مستخدم اخر⚠️',
			type: '',
			example: 'طرد [تاغ] "سبب التحذير"'
  		},

		{
			key: 'قائمة_الحضر',
			prompt: 'قائمة الأعضاء المحضورة👤⛔',
			type: '',
			example: 'طرد قائمة_الحضر'
  		},

		{
			key: 'فك',
			prompt: 'ازالة العضو👤  من قائمة📜الحضر⛔',
			type: '',
			example: 'حضر فك [ايدي المستخدم لفك الحضر او حضره⛔]'
  		},
		{
			key: 'عرض',
			prompt: '"تاغ" او "فارغ" او "عرض_الكل", يُستخدم على التوالي لمعرفة عدد المرات التي تم فيها تحذير الشخص الذي وضع علامة باسمك أو نفسك أو أحد أعضاء المربع ',
			type: '',
			example: 'حضر عرض [@تاغ] /يحذر الراي'
  		},

		{
			key: 'ريست',
			prompt: 'Reset all data in your group',
			type: '',
			example: 'حضر ريست'
  		}

  		]
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('عذرا لا يمكنني ازالة العضو😥\nاحتاج أن اكون مسوؤلة⏳', threadID, messageID);
	var fs = require("fs-extra");
	
	if (!fs.existsSync(__dirname + `/cache/bans.json`)) {
			const dataaa = {warns: {}, banned: {}};
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(dataaa));
					}
  var bans = JSON.parse(fs.readFileSync(__dirname + `/cache/bans.json`)); //read file contents
  /*
  {warns: {}, banned: {tid: []}};
  */
  if(!bans.warns.hasOwnProperty(threadID)) {
			bans.warns[threadID] = {}; 
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	
  }

  
  if(args[0] == "عرض") {
  	if(!args[1]) {
  		var msg = "";
  		var mywarn = bans.warns[threadID][senderID];
  		if(!mywarn) return api.sendMessage('☑️لم يتم تحذير قط', threadID, messageID);
  		var num = 1;
  		for(let reasonwarn of mywarn) {
  			msg += `reasonwarn\n`;
  		}
  		api.sendMessage(`❎لقد تم تحذيرك : ${msg}`, threadID, messageID);
  	}
  	else if(Object.keys(event.mentions).length != 0) {
  		var message = "";
  		var mentions = Object.keys(event.mentions);
  		for(let id of mentions) {
  			var name = (await api.getUserInfo(id))[id].name;
  			var msg = "";
  			var so = 1;
  			var reasonarr = bans.warns[threadID][id];
  			if(typeof reasonarr != "object") {
  				msg += " Never been warned\n"
  			} else {
  			for(let reason of reasonarr) {
  				msg += ""+reason+"\n";
  			}
  			}
  			message += "⭐️"+name+" :"+msg+"";
  		}
  		api.sendMessage(message, threadID, messageID);
  	}
  	
  	else if(args[1] == "الكل") {
  		var dtwbox = bans.warns[threadID];
  		var allwarn = "";
  		for(let idtvw in dtwbox) {
  			var name = (await api.getUserInfo(idtvw))[idtvw].name, msg = "", solan = 1;
  			for(let reasonwtv of dtwbox[idtvw]) {
  				msg += `${reasonwtv}`
  			}
  			allwarn += `${name} : ${msg}\n`;
  		}
  		allwarn == "" ? api.sendMessage("✅لم يتم تحذير اي شخص في مجموعتك بعد", threadID, messageID) : api.sendMessage("قائمة📜 الاعضاء👤 اللتي تم تحذيرها⚠️:\n"+allwarn, threadID, messageID);
  	}
  }
  
  else if(args[0] == "فك") {
  	var id = parseInt(args[1]), mybox = bans.banned[threadID];
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Right cunt border!', threadID, messageID);
	
  	if(!id) return api.sendMessage("❎يجب ادخال ايدي العضو لأتمكن من ازالته من قائمة الحضر", threadID, messageID);
  	bans.banned;
  	if(!mybox.includes(id)) return api.sendMessage("✅هذا العضو غير محضور من المجموعة", threadID, messageID);
			api.sendMessage(`✅تمت ازالة المستخدم👤${id} من قائمة📜الحضر⛔بالمجموعة`, threadID, messageID);
			mybox.splice(mybox.indexOf(id), 1);
			delete bans.warns[threadID][id]
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  }
  
  else if(args[0] == "ليست_بان") {
  	var mybox = bans.banned[threadID];
  	var msg = "";
  	for(let iduser of mybox) {
  		var name = (await api.getUserInfo(iduser))[iduser].name;
  		msg += "╔Name: " + name + "\n╚ID: " + iduser + "\n";
  	}
  	msg == "" ? api.sendMessage("✅لا توجد اعضاء محضورة في هذه المجموتة", threadID, messageID) : api.sendMessage("❎الاعضاء اللتي تم حضرها⛔:\n"+msg, threadID, messageID);
  }
  else if(args[0] == "ريست") {
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('❎Right cunt border!', threadID, messageID);
  	
  	bans.warns[threadID] = {};
  	bans.banned[threadID] = [];
  	fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	api.sendMessage("Reset all data in your group", threadID, messageID);
  }
  	 //◆━━━━━━━━━◆WARN◆━━━━━━━━━◆\\
  	 else{ 
  	 	   if (event.type != "message_reply" && Object.keys(event.mentions).length == 0)	return utils.throwError(this.config.name, threadID, messageID);
   
       //◆━━━━━━◆get iduser and reason<<<<<<<<\\
       var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('Right cunt border!', threadID, messageID);
  var reason = "";
		  if (event.type == "message_reply") {
		  	var iduser = [];
		  	iduser.push(event.messageReply.senderID);
		  	reason = (args.join(" ")).trim();
		  }
		  
		  else if (Object.keys(event.mentions).length != 0) {
		  	var iduser = Object.keys(event.mentions);
		  	var stringname = "";
		  	var nametaglength = (Object.values(event.mentions)).length;
		  	var namearr = Object.values(event.mentions);
		  	for(let i = 0; i < nametaglength; i++) {
		  		stringname += (Object.values(event.mentions))[i];
		  	}
		  	var message = args.join(" ");
		  	//var reason = (message.slice(stringname.length + nametaglength -1)).trim();
		  	for(let valuemention of namearr) {
		  		console.log(namearr);
		  		console.log(message);
		  		vitrivalue = message.indexOf(valuemention);
		  		console.log(vitrivalue);
		  		message = message.replace(valuemention,"");
		  	}
		 	var reason = message.replace(/\s+/g, ' ');
		  }
		  var arraytag = [];
		  var arrayname = [];
		  //Check xem đã bị cảnh cáo lần nào chưa
		for(let iid of iduser) {
			var id = parseInt(iid);
			var nametag = (await api.getUserInfo(id))[id].name;
			arraytag.push({id: id, tag: nametag});
			
			if(!reason) reason += "No reason was given";
			/*if(!bans.warns.hasOwnProperty(threadID)) {
			bans.warns[threadID] = {}; 
			}*/
			var dtwmybox = bans.warns[threadID];
			if(!dtwmybox.hasOwnProperty(id)) { 
			dtwmybox[id] = [];
			}
			var solan = (bans.warns[threadID][id]).length;
			arrayname.push(nametag);
			var pushreason = bans.warns[threadID][id];
			pushreason.push(reason);
			if(!bans.banned[threadID]) {
				bans.banned[threadID] = [];
			}
			if((bans.warns[threadID][id]).length > 0) {
				
				api.removeUserFromGroup(parseInt(id), threadID)
				var banned = bans.banned[threadID];
				    banned.push(parseInt(id));
				fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
			}
		
		}//for

		api.sendMessage({body: `ابلع بانكاي💃${arrayname.join(", ")} هوياع🏌🏽‍♀️ والسبب هوا:: ${reason}`, mentions: arraytag}, threadID, messageID);
		fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
}
  
};
