module.exports.config = {
    name: "كنية",
    version: "1.0.1",
    hasPermssion: 1,
    credits: "عمر",
    description: "يخلي كنية لاي عضو ينضم",
    commandCategory: "مسؤولي المجموعات",
    usages: "[اضف <الاسم> /حذف] ",
    cooldowns: 5
}

module.exports.onLoad = () => {
    const { existsSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const pathData = join(__dirname, "cache", "autosetname.json");
    if (!existsSync(pathData)) return writeFileSync(pathData, "[]", "utf-8"); 
}

module.exports.run = async function  ({ event, api, args, permssionm, Users })  {
    const { threadID, messageID } = event;
    const { readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const pathData = join(__dirname, "cache", "autosetname.json");
    const content = (args.slice(1, args.length)).join(" ");
    var dataJson = JSON.parse(readFileSync(pathData, "utf-8"));
    var thisThread = dataJson.find(item => item.threadID == threadID) || { threadID, nameUser: [] };
    switch (args[0]) {
        case "اضف":
        case "add": {
            if (content.length == 0) return api.sendMessage("لا يمكن ترك قسم  تعين الكنية للعضو الجديد فارغًا!", threadID, messageID);
            if (thisThread.nameUser.length > 0) return api.sendMessage("يرجى حذف  الكنية القديم قبل تعيين اسم جديد!!!", threadID, messageID); 
            thisThread.nameUser.push(content);
            const name = (await Users.getData(event.senderID)).name
            writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
            api.sendMessage(`تم حفظ تعيين الكنية تلقائيا للضو الجديد بنجاح \nمعاينة : ${content}\nمنشئ الكنية: ${name}`, threadID, messageID);
            break;
        }
        case "حذف":
        case "remove":
        case "delete": {
                if (thisThread.nameUser.length == 0) return api.sendMessage("لم تقم مجموعتك بتكوين كنية للاعضاء الجدد حتى الآن!!", threadID, messageID);
                thisThread.nameUser = [];
                api.sendMessage(`تم حذف الكنية بنجاح`, threadID, messageID);
                break;
        }
        default: {
                api.sendMessage(`الاستخدام: كنية اضف <الاسم> لتكوين الألقاب للأعضاء الجدد\nDùng: كنية حذف لإزالة الألقاب للأعضاء الجدد`, threadID, messageID);
        }
    }
    if (!dataJson.some(item => item.threadID == threadID)) dataJson.push(thisThread);
    return writeFileSync(pathData, JSON.stringify(dataJson, null, 4), "utf-8");
        }
