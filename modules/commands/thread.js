module.exports.config = {
	name: "مجموعه",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "عمر",
	description: "حضر او الغاء حضر عن المجموعات",
	commandCategory: "المطور",
	usages: "[نوبان/باند/بحث] [تايد]\n مجموعه لاست : لأضهار قائمة المجموعات المحضورة\n مجموعه باند : لحضر مجموعة \n مجموعه امرباند : لالغاء الحضر عن المجموعة  \n مجموعه امرنوبان : حتى تحضر امر عن مجموعة \n مجموعه معلومات : حتى تلغي حضر امر عن مجموعة  ",
	cooldowns: 5,
	dependencies: {
		"moment-timezone": ""
	}
};

module.exports.languages = {
	"vi": {
		"reason": "Lý do",
		"at": "vào lúc",
		"allCommand": "toàn bộ lệnh",
		"commandList": "những lệnh",
		"banSuccess": "[ Ban Thread ] Đã xử lý thành công yêu cầu cấm nhóm có ID %1",
		"unbanSuccess": "[ Unban Thread ] Đã xử lý thành công yêu cầu gỡ cấm nhóm có ID %1",
		"banCommandSuccess": "[ banCommand Thread ] Đã xử lý thành công yêu cầu cấm lệnh đối với nhóm có ID %1",
		"unbanCommandSuccess": "[ UnbanCommand Thread ] Đã xử lý thành công yêu cầu gỡ cấm %1 đối với nhóm có ID %2",
		"errorReponse": "%1 Không thể hoàn tất công việc bạn yêu cầu đối với nhóm có ID %2",
		"IDNotFound": "%1 ID bạn nhập không tồn tại trong cơ sở dữ liệu",
		"existBan": "[ Ban Thread ] ID %1 đã bị ban từ trước %2 %3",
		"notExistBan": "[ Unban Thread ] ID bạn nhập chưa từng bị cấm sử dụng bot",
		"missingCommandInput": "%1 Phần command cần cấm không được để trống!",
		"notExistBanCommand": "[ UnbanCommand Thread ] Hiện tại ID nhóm bạn nhập chưa từng bị cấm sử dụng lệnh",

		"returnBan": "[ Ban Thread ] Hiện tại bạn đang yêu cầu cấm nhóm:\n- ID nhóm cần cấm: %1%2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnban": "[ Unban Thread ] Hiện tại bạn đang yêu cầu gỡ cấm nhóm:\n- ID nhóm cần gỡ cấm: %1\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnBanCommand": "[ banCommand Thread ] Hiện tại bạn đang yêu cầu cấm sử dụng lệnh đối với nhóm:\n - ID nhóm cần cấm: %1\n- Các lệnh cần cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
		"returnUnbanCommand": "[ UnbanCommand Thread ] Hiện tại bạn đang yêu cầu gỡ cấm sử dụng lệnh đối với nhóm:\n - ID nhóm cần gỡ cấm lệnh: %1\n- Các lệnh cần gỡ cấm: %2\n\n❮ Reaction tin nhắn này để xác thực ❯",
	
		"returnResult": "Đây là kết quả phù hợp: \n",
		"returnNull": "Không tìm thấy kết quả dựa vào tìm kiếm của bạn!",
		"returnList": "[ Thread List ]\nHiện tại đang có %1 nhóm bị ban, dưới đây là %2 nhóm\n\n%3",
		"returnInfo": "[ Info Thread ] Đây là một sô thông tin về nhóm bạn cần tìm:\n- ID của nhóm: %1n- Có bị ban?: %2 %3 %4\n- Bị ban lệnh?: %5"
	},
	"en": {
		"reason": "السبب ",
		"at": "At",
		"allCommand": "All commands",
		"commandList": "Commands",
		"banSuccess": "[ Ban Thread ] الكروب المحظور له معرف %1",
		"unbanSuccess": "[ الغاء حضر ] تم الغاء الحضر عن المجموعة , الايدي : %1",
		"banCommandSuccess": "[ banCommand Thread ] تم حضر الامر عن الكروب , ايدي الكروب : %1",
		"unbanCommandSuccess": "[ unbanCommand Thread ] Unbanned %1 with thread has ID %2",
		"errorReponse": "%1 Can't do what you request with thread has ID %2",
		"IDNotFound": "%1 الايدي اللي دخلته مموجود بقاعدة البيانات",
		"existBan": "[ Ban Thread ] المجموعة  %1 تم حضرها من قبل %2 %3",
		"notExistBan": "هذه المجموعة غير محضورة",
		"missingCommandInput": "%1 يجب عليك ادحال الامر اللذي تريد حضره عن المجموعه  !",
		"notExistBanCommand": "[ UnbanCommand Thread ] هاي المجموعة ممحضورة قبل",

		"returnBan": "[ حضر مجموعة ] انت تطلب حضر المجموعة :\n-  ايدي المجموعة : %1%2\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
		"returnUnban": "[ الغاء حضر ] انت تطلب الغاء الحضر عن المجموعة :\n- ايدي المجموعة : %1\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
		"returnBanCommand": "[ banCommand Thread ] انت تطلب حضر أمر عن المجموعة :\n - ايدي المجموعة : %1\n- الامر : %2\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
		"returnUnbanCommand": "[ unbanCommand Thread ] انت تطلب فك حضر الامر عن المجموعة :\n - ايدي المجموعة : %1\n- الامر : %2\n\n❮ تفاعل على هذه الرسالة لآكمال الطلب ❯",
	
		"returnResult": "هذه هي النتيجة : \n",
		"returnNull": "There is no result with your input!",
		"returnList": "[ Thread List ]\There are %1 banned thread, here are %2\n\n%3",
		"returnInfo": "[ Info Thread ] Here are some information about your thread which you want to search:\n- Thread ID: %1n- Banned?: %2 %3 %4\n- Command banned?: %5"
	}
}

module.exports.handleReaction = async ({ event, api, Threads, handleReaction, getText }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	const moment = require("moment-timezone");
	const { threadID } = event;
	const { messageID, type, targetID, reason, commandNeedBan } = handleReaction;

	const time = moment.tz("Asia/Baghdad").format("HH:MM:ss L");
	global.client.handleReaction.splice(global.client.handleReaction.findIndex(item => item.messageID == messageID), 1);

	switch (type) {
		case "ban": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.banned = true;
				data.reason = reason || null;
				data.dateAdded = time;
				await Threads.setData(targetID, { data });
				global.data.threadBanned.set(targetID, { reason: data.reason, dateAdded: data.dateAdded });
				return api.sendMessage(getText("banSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ Ban Thread ]", targetID), threadID) };
		}

		case "unban": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.banned = false;
				data.reason = null;
				data.dateAdded = null;
				await Threads.setData(targetID, { data });
				global.data.threadBanned.delete(targetID);
				return api.sendMessage(getText("unbanSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch { return api.sendMessage(getText("errorReponse", "[ unBan Thread ]", targetID), threadID) };
		}

		case "banCommand": {
			try {	
				let data = (await Threads.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned || [], ...commandNeedBan];
				await Threads.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				return api.sendMessage(getText("banCommandSuccess", targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ banCommand Thread ]", targetID), threadID) };
		}
		
		case "unbanCommand": {
			try {
				let data = (await Threads.getData(targetID)).data || {};
				data.commandBanned = [...data.commandBanned.filter(item => !commandNeedBan.includes(item))];
				await Threads.setData(targetID, { data });
				global.data.commandBanned.set(targetID, data.commandBanned);
				if(data.commandBanned.length == 0) global.data.commandBanned.delete(targetID)
				return api.sendMessage(getText("unbanCommandSuccess", ((data.commandBanned.length == 0) ? getText("allCommand") : `${getText("commandList")}: ${commandNeedBan.join(", ")}`), targetID), threadID, () => {
					return api.unsendMessage(messageID);
				});
			} catch (e) { return api.sendMessage(getText("errorReponse", "[ unbanCommand Thread ]", targetID), threadID) };
		}
		default:
			break;
	}
}

module.exports.run = async ({ event, api, args, Threads, getText }) => { 
	const { threadID, messageID } = event;
	var targetID = String(args[1]);
	var reason = (args.slice(2, args.length)).join(" ") || null;

	if (isNaN(targetID)) {
		targetID = String(event.threadID);
		reason = (args.slice(1, args.length)).join(" ") || null;
	}

	switch (args[0]) {
		case "باند":
		case "-b": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Ban Thread ]"), threadID, messageID);
			if (global.data.threadBanned.has(targetID)) {
				const { reason, dateAdded } = global.data.threadBanned.get(targetID) || {};
				return api.sendMessage(getText("existBan", targetID, ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")}: ${dateAdded}` : "")), threadID, messageID);
			}
			return api.sendMessage(getText("returnBan", targetID, ((reason) ? `\n- ${getText("reason")}: ${reason}` : "")), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "ban",
					targetID,
					reason,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "نوبان":
		case "-ub": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Unban Thread ]"), threadID, messageID);
			if (!global.data.threadBanned.has(targetID)) return api.sendMessage(getText("notExistBan"), threadID, messageID);
			return api.sendMessage(getText("returnUnban", targetID), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unban",
					targetID,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "امرباند":
		case "-bc": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ BanCommand Thread ]"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", '[ BanCommand Thread ]'), threadID, messageID);
			if (reason == "all") {
				var allCommandName = [];
				const commandValues = global.client.commands.keys();
				for (const cmd of commandValues) allCommandName.push(cmd);
				reason = allCommandName.join(" ");
			}
			const commandNeedBan = reason.split(" ");
			return api.sendMessage(getText("returnBanCommand", targetID, ((commandNeedBan.length == global.client.commands.size) ? getText("allCommand") : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "banCommand",
					targetID,
					commandNeedBan,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "امرنوبان":
		case "-ubc": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ UnbanCommand Thread ]"), threadID, messageID);
			if (!global.data.commandBanned.has(targetID)) return api.sendMessage(getText("notExistBanCommand"), threadID, messageID);
			if (reason == null || reason.length == 0) return api.sendMessage(getText("missingCommandInput", "[ UnbanCommand Thread ]"), threadID, messageID);
			if (reason == "all") {
				reason = (global.data.commandBanned.get(targetID)).join(" ");
			}
			const commandNeedBan = reason.split(" ");
			return api.sendMessage(getText("returnUnbanCommand", targetID, ((commandNeedBan.length == global.data.commandBanned.get(targetID).length) ? "toàn bộ lệnh" : commandNeedBan.join(", "))), threadID, (error, info) => {
				global.client.handleReaction.push({
					type: "unbanCommand",
					targetID,
					commandNeedBan,
					name: this.config.name,
					messageID: info.messageID,
					author: event.senderID,
					
				});
			}, messageID);
		}

		case "بحث":
		case "-s": {
			const contentJoin = reason || "";
			const getThreads =  (await Threads.getAll(['threadID', 'threadInfo'])).filter(item => !!item.threadInfo);
			var matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if ((i.threadInfo.threadName || "").toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.threadInfo.threadName,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(getText("returnResult", a), threadID) : api.sendMessage(getText("returnNull"), threadID, messageID);
			break;
		}

		case "لاست":
		case "-l": {
			var listBan = [], i = 0;
			const threadData = global.data.threadBanned.keys();
			for (; ;) {
				if (i > global.data.threadBanned.size) break;
				let idThread = String(threadData.next().value);
				if (typeof idThread == "undefined") {
					const nameThread = (await Threads.getData(idThread)).threadInfo.threadName || "unknown";
					listBan.push(`${i+=1}/ ${idThread} - ${nameThread}`)
				}
				if (i == global.data.threadBanned.size || i == (parseInt(reason) || 10)) break;
			}
			return api.sendMessage(getText("returnList",(global.data.threadBanned.size || 0), listBan.length, listBan.join("\n")), threadID, messageID);
		}

		case "معلومات":
		case "-i": {
			if (!global.data.allThreadID.includes(targetID)) return api.sendMessage(getText("IDNotFound", "[ Info Thread ]"), threadID, messageID);
			if (global.data.commandBanned.has(targetID)) { var commandBanned = global.data.commandBanned.get(targetID) || [] };
			if (global.data.threadBanned.has(targetID)) { var { reason, dateAdded } = global.data.threadBanned.get(targetID) || {} };
			return api.sendMessage(getText("returnInfo", targetID, ((!dateAdded) ? "YES" : "NO"), ((reason) ? `${getText("reason")}: "${reason}"` : ""), ((dateAdded) ? `${getText("at")}: ${dateAdded}` : ""), ((commandBanned) ? `YES: ${commandBanned.join(", ")}` : "NO")), threadID, messageID);
		}
	}
}