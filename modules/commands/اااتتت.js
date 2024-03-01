module.exports.config = {
	name: "ردود",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "عمر",
	description: "اضافه رد او حذف",
	commandCategory: "مسؤولي المجموعات",
    usages: "[الكل/حذف/]",
	cooldowns: 5,
	dependencies: {
		"fs-extra": "",
        "path": ""
	}
}

module.exports.languages = {

    "en": {
        "misingKeyword": "「ردود」لاتحط فراغ او صوره",
        "shortcutExist": "「ردود」الرد موجود اصلا 🙂👍🏻",
        "requestResponse": "「ردود」رد على هاذه الرساله بلجواب الذي تريد 🙃✨",
        "addSuccess": "「ردود」تمت إضافة اختصار جديد، وهذه هي النتيجة:\n- ايدي:%1\n- الاختصار: %2\n- الجواب: %3",
        "listShortcutNull": "「ردود」المجموعه مابيها ختصارات",
        "removeSuccess": "「ردود」تم حذف الاختصار",
        "returnListShortcut": "「ردود」قائمة اختصارات المجموعة:\n [الاختصار] => [الجواب تبعه]\n\n%1",
        "requestKeyword": "「ردود」رد على هاذه الرساله بل كلمه التي تريد اضافه رد لها ✨"
    }
}

module.exports.onLoad = function () {
    try {
        const { existsSync, writeFileSync, readFileSync } = global.nodemodule["fs-extra"];
        const { resolve } = global.nodemodule["path"];
        const path = resolve(__dirname, "cache", "shortcutdata.json");
        if (!global.moduleData.shortcut) global.moduleData.shortcut = new Map();
        if (!existsSync(path)) writeFileSync(path, JSON.stringify([]), "utf-8");
        const data = JSON.parse(readFileSync(path, "utf-8"));
        if (typeof global.moduleData.shortcut == "undefined") global.moduleData.shortcut = new Map();
        for (const threadData of data) global.moduleData.shortcut.set(threadData.threadID, threadData.shortcuts);
    } catch (e) { console.log(e) }
    return;
}

module.exports.handleEvent = async function ({ event, api }) {
    const { threadID, messageID, body } = event;
    if (!global.moduleData.shortcut) global.moduleData.shortcut = new Map();
    if (!global.moduleData.shortcut.has(threadID)) return;
    const data = global.moduleData.shortcut.get(threadID);

    if (data.some(item => item.input == body)) {
        const dataThread = data.find(item => item.input == body);
        return api.sendMessage(dataThread.output, threadID, messageID);
    }
}

module.exports.handleReply = async function ({ event, api, handleReply, getText }) {
    if (handleReply.author != event.senderID) return;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, senderID, body } = event;
    const name = this.config.name;

    const path = resolve(__dirname, "cache", "shortcutdata.json");

    switch (handleReply.type) {
        case "requireInput": {
            if (body.length == 0) return api.sendMessage(getText("misingKeyword"), threadID, messageID);
            const data = global.moduleData.shortcut.get(threadID) || [];
            if (data.some(item => item.input == body)) return api.sendMessage(getText("shortcutExist"), threadID, messageID);
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage(getText("requestResponse"), threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "final",
                    name,
                    author: senderID,
                    messageID: info.messageID,
                    input: body
                });
            }, messageID);
        }
        case "final": {
            const id = global.utils.randomString(10);
            const readData = readFileSync(path, "utf-8");
            var data = JSON.parse(readData);
            var dataThread = data.find(item => item.threadID == threadID) || { threadID, shortcuts: [] };
            var dataGlobal = global.moduleData.shortcut.get(threadID) || [];
            const object = { id, input: handleReply.input, output: body || "empty" };

            dataThread.shortcuts.push(object);
            dataGlobal.push(object);

            if (!data.some(item => item.threadID == threadID)) data.push(dataThread);
            else {
                const index = data.indexOf(data.find(item => item.threadID == threadID));
                data[index] = dataThread;
            }

            global.moduleData.shortcut.set(threadID, dataGlobal);
            writeFileSync(path, JSON.stringify(data, null, 4), "utf-8");

            return api.sendMessage(getText("addSuccess", id, handleReply.input, body||"empty"), threadID, messageID);
        }
    }
}

module.exports.run = function ({ event, api, args, getText }) {
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { resolve } = global.nodemodule["path"];
    const { threadID, messageID, senderID } = event;
    const name = this.config.name;

    const path = resolve(__dirname, "cache", "shortcutdata.json");

    switch (args[0]) {
        case "remove":
        case "حذف":
        case "del":
        case "-d": {
            const readData = readFileSync(path, "utf-8");
            var data = JSON.parse(readData);
            const indexData = data.findIndex(item => item.threadID == threadID);
            if (indexData == -1) return api.sendMessage(getText("listShortcutNull"), threadID, messageID);
            var dataThread = data.find(item => item.threadID == threadID) || { threadID, shortcuts: [] };
            var dataGlobal = global.moduleData.shortcut.get(threadID) || [];
            var indexNeedRemove;

            if (dataThread.shortcuts.length == 0) return api.sendMessage(getText("listShortcutNull"), threadID, messageID);

            if (isNaN(args[1])) indexNeedRemove = args[1];
            else indexNeedRemove = dataThread.shortcuts.findIndex(item => item.input == (args.slice(1, args.length)).join(" ") || item.id == (args.slice(1, args.length)).join(" "));
            
            dataThread.shortcuts.splice(indexNeedRemove, 1);
            dataGlobal.splice(indexNeedRemove, 1);

            global.moduleData.shortcut.set(threadID, dataGlobal);
            data[indexData] = dataThread;
            writeFileSync(path, JSON.stringify(data, null, 4), "utf-8");

            return api.sendMessage(getText("removeSuccess"), threadID, messageID);
        }

        case "list":
        case "الكل":
        case "-a": {
            const data = global.moduleData.shortcut.get(threadID) || [];
            var array = [];
            if (data.length == 0) return api.sendMessage(getText("listShortcutNull"), threadID, messageID);
            else {
                var n = 1;
                for (const single of data) array.push(`${n++}/ ${single.input} => ${single.output}`);
                return api.sendMessage(getText("returnListShortcut", array.join("\n")), threadID, messageID);
            }
        }

        default: {
            return api.sendMessage(getText("requestKeyword"), threadID, function (error, info) {
                return global.client.handleReply.push({
                    type: "requireInput",
                    name,
                    author: senderID,
                    messageID: info.messageID
                });
            }, messageID);
        }
    }

    
}
