module.exports.config = {
	name: "باند",
	version: "2.0.5",
	hasPermssion: 1,
	credits: "عمر",
	description: "حضر أي عضو من العودة للمجموعة",
	commandCategory: "مسؤولي المجموعات",
	usages: "@/الكل/انا/قائمة/عرض/الغاء/ترسيت",
	cooldowns: 5,
	info: [
		{
			key: '[tag] or [reply message] "reason"',
			prompt: '1 more warning user',
			type: '',
			example: 'ban [tag] "reason for warning"'
  		},

		{
			key: 'listban',
			prompt: 'see the list of users banned from the group',
			type: '',
			example: 'ban listban'
  		},

		{
			key: 'uban',
			prompt: 'remove the user from the list of banned groups',
			type: '',
			example: 'ban unban [id of user to delete]'
  		},
		{
			key: 'view',
			prompt: '"tag" or "blank" or "view all", respectively used to see how many times the person tagged or yourself or a member of the box has been warned ',
			type: '',
			example: 'ban view [@tag] / warns view'
  		},

		{
			key: 'reset',
			prompt: 'Reset all data in your group',
			type: '',
			example: 'ban reset'
  		}

  		]
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
	let {messageID, threadID, senderID} = event;
	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('ارفع البوت أدمن لاستخدام هذا الأمر \n الرجاء الإضافة والمحاولة مرة أخرى!', threadID, messageID);
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
  		if(!mywarn) return api.sendMessage('🙂لم يتم تحذيرك من قبل', threadID, messageID);
  		var num = 1;
  		for(let reasonwarn of mywarn) {
  			msg += `reasonwarn\n`;
  		}
  		api.sendMessage(`🙃لقد تم تحذيرك من قبل والسبب : ${msg}`, threadID, messageID);
  	}
  	else if(Object.keys(event.mentions).length != 0) {
  		var message = "";
  		var mentions = Object.keys(event.mentions);
  		for(let id of mentions) {
  			var name = (await api.getUserInfo(id))[id].name;
  			var msg = "";
  			var so = 1;
  			var reasonarr = bans.warns[threadID][id];
  			if(typeof reasonarr != "انا") {
  				msg += " لم يتم التحذير من قبل\n"
  			} else {
  			for(let reason of reasonarr) {
  				msg += ""+reason+"\n";
  			}
  			}
  			message += "👀"+name+" :"+msg+"";
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
  		allwarn == "" ? api.sendMessage("🙂لم يتم تحذير أي شخص في المجموعة حتى الان", threadID, messageID) : api.sendMessage("هذة قائمة بالأعضاء الذين تم تحذيرهم في المجموعة:\n"+allwarn, threadID, messageID);
  	}
  }
  
  else if(args[0] == "الغاء") {
  	var id = parseInt(args[1]), mybox = bans.banned[threadID];
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('🙂!', threadID, messageID);
	
  	if(!id) return api.sendMessage("🙃تحتاج إلى إدخال معرف الشخص المراد إزالته من قائمة المحظورين في هذة المجموعة", threadID, messageID);
  	bans.banned;
  	if(!mybox.includes(id)) return api.sendMessage("🙂لم يتم حظر هذا الشخص من مجموعتك حتى الآن", threadID, messageID);
			api.sendMessage(`🙂تم أزالة  ${id} من قائمة المحضورين`, threadID, messageID);
			mybox.splice(mybox.indexOf(id), 1);
			delete bans.warns[threadID][id]
			fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  }
  
  else if(args[0] == "القائمة") {
  	var mybox = bans.banned[threadID];
  	var msg = "";
  	for(let iduser of mybox) {
  		var name = (await api.getUserInfo(iduser))[iduser].name;
  		msg += "╔الاسم: " + name + "\n╚الايدي: " + iduser + "\n";
  	}
  	msg == "" ? api.sendMessage("🙂لم يتم حضر أي شخص في هذة المجموعة حتى الان ", threadID, messageID) : api.sendMessage("🙃هذة قائمة بالأعضاء الذين تم حظرهم من المجموعة:\n"+msg, threadID, messageID);
  }
  else if(args[0] == "ترسيت") {
  	var info = await api.getThreadInfo(threadID);
	if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return api.sendMessage('🙃Right cunt border!', threadID, messageID);
  	
  	bans.warns[threadID] = {};
  	bans.banned[threadID] = [];
  	fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
  	api.sendMessage("تم ترسيت جميع البيانات لمجموعتك !", threadID, messageID);
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
			
			if(!reason) reason += "لم يتم أدخال السبب";
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

		api.sendMessage({body: `بلع ${arrayname.join(", ")} بسبب: ${reason}`, mentions: arraytag}, threadID, messageID);
		fs.writeFileSync(__dirname + `/cache/bans.json`, JSON.stringify(bans, null, 2));
}
  
};
