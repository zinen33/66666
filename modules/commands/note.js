module.exports.config = {
	name: "ثبتي",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "عمر",
	description: "ثبت رسائل بالبوت - ميزة مقاربة لتثبيت الرسائل بالتلي",
	commandCategory: "مسؤولي المجموعات",
	usages: "[اضف/حذف/الكل] [نص]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "pin", "notes.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = ({ event, api, args, permssion }) => {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "pin", "notes.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "اضف": {
            if (permssion == 0) return api.sendMessage("- بس الادمن يكدر يثبت رسائل هيه مو هيته!", threadID, messageID);
            if (content.length == 0) return api.sendMessage("- متكدر تعوفه هيج فارغ !", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage('- تم تثبيت الرسالة بنجاح !', threadID, messageID);
            break;
        }
        case "list":
        case"الكل": {
            var msg = "", index = 0;
            for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
            if (msg.length == 0) return api.sendMessage("- ماكو رسائل مثبته بالمجموعة !", threadID, messageID);
            api.sendMessage(`- قائمة الرسائل المثبتة :\n\n${msg}`, threadID, messageID);
            break;
        }
        case "حذف":
        case "remove":
        case "delete": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("- ادعبل , بس الادمن يكدر يمسح الرسائل المثبته !", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("- ماكو رسائل مثبته بالمجموعة !", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage(`- تم حذف الرسالة المثبتة بنجاح ! \n رقم الرسالة المثبتة  ${content}`, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("[Note] Bạn không đủ quyền hạn để có thể sử dụng xóa ghi chú chỉ có quản trị viên mới được dùng!", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage("[Note] Nhóm của bạn chưa có danh sách ghi chú để có thể xóa!", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage(`[Note] Đã xóa thành công toàn bộ ghi chú của nhóm!`, threadID, messageID);
                break;
            }
        }
        default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += `${index+=1}/ ${item}\n`;
                return api.sendMessage(`- قائمة الرسائل المثبتة :\n\n${msg}`, threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }

    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
}