module.exports.config = {
	name: "القوانين",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "عمر",
	description: "تعديل القوانين",
	commandCategory: "مسؤولي المجموعات",
	usages: "[اضف/حذف/قائمة] [رقم القانون]",
	cooldowns: 5,
	dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "rules.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = ({ event, api, args, permssion }) => {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "rules.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, listRule: [] };

    switch (args[0]) {
        case "اضف": {
            if (permssion == 0) return api.sendMessage(" ", threadID, messageID);
            if (content.length == 0) return api.sendMessage(" لا تترك مكان فارغ أدخل قانون", threadID, messageID);
            if (content.indexOf("\n") != -1) {
                const contentSplit = content.split("\n");
                for (const item of contentSplit) thisThread.listRule.push(item);
            }
            else {
                thisThread.listRule.push(content);
            }
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(' إضافة قانون جديد !', threadID, messageID);
            break;
        }
        case "قائمة":
        case"all": {
            var msg = "", index = 0;
            for (const item of thisThread.listRule) msg += ${index+=1}/ ${item}\n;
            if (msg.length == 0) return api.sendMessage(" المجموعة لا تملك قائمة قوانين .!", threadID, messageID);
            api.sendMessage(=== قواعد المجموعة ===\n\n${msg}, threadID, messageID);
            break;
        }
        case "rm":
        case "مسح":
        case "حذف": {
            if (!isNaN(content) && content > 0) {
                if (permssion == 0) return api.sendMessage("قمنقلع ذا مش لك روح شفلك شي ثاني", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage(" هذه المجموعة لا تملك قوانين!", threadID, messageID);
                thisThread.listRule.splice(content - 1, 1);
                api.sendMessage( تم حذف القانون بنجاح : ${content}, threadID, messageID);
                break;
            }
            else if (content == "all") {
                if (permssion == 0) return api.sendMessage("كل هوا 🙂👍🏻", threadID, messageID);
                if (thisThread.listRule.length == 0) return api.sendMessage(" المجموعة لا تملك ولا قانون يمكن حذفه !", threadID, messageID);
                thisThread.listRule = [];
                api.sendMessage( المجموعة لا تملك ولا قانون يمكن حذفه , threadID, messageID);
                break;
            }
        }
        default: {
            if (thisThread.listRule.length != 0) {
                var msg = "", index = 0;
                for (const item of thisThread.listRule) msg += ${index+=1}/ ${item}\n;
                return api.sendMessage(=== قائمة قوانين المجموعة ===\n\n${msg} \n[هي القوانين مخالفه طرد 😊], threadID, messageID);
            }
            else return global.utils.throwError(this.config.name, threadID, messageID);
        }
    }

    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
                                           }