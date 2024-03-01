module.exports.config = {
  name: "تجربة",
  version: "1.0.2",
  hasPermssion: 2,
  credits: "عبدالرحمن",
  description: "شييل",
  commandCategory: "المطور",
  usages: "[سكربت]",
  cooldowns: 5,
  dependencies: {
    "eval": ""
  }
};

module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {
    const permission = ["100094409873389",""];
             if (!permission.includes(event.senderID))
             return api.sendMessage("مش لك يقلبي", event.threadID, event.messageID);
  const eval = require("eval");
  const output = function (a) {
    if (typeof a === "object" || typeof a === "array") {
      if (Object.keys(a).length != 0) a = JSON.stringify(a, null, 4);
      else a = "تم تشغيل السكربت";
    }

    if (typeof a === "number") a = a.toString();

    return api.sendMessage(a, event.threadID, event.messageID);
  }
  try {
    const response = await eval(args.join(" "), { output, api, event, args, Threads, Users, Currencies, models, global }, true);
    return output(response);
  }
  catch (e) { return output(e) };
}