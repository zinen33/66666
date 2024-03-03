module.exports.config = {
    name: "eval",
	version: "1.0.5",
	hasPermssion: 2,
	credits: "DRIDI-RAYEN",
	description: "Ban or unblock users",
  usePrefix: true,
	commandCategory: "المطور",
	usages: "[unban/ban/search] [ID or text]",
	cooldowns: 5
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client, eva, message }) {
  try {
  function output(msg) {
      if (typeof msg == "number" || typeof msg == "boolean" || typeof msg == "function")
        msg = msg.toString();
      else if (msg instanceof Map) {
        let text = `Map(${msg.size}) `;
        text += JSON.stringify(mapToObj(msg), null, 2);
        msg = text;
      }
      else if (typeof msg == "object")
        msg = JSON.stringify(msg, null, 2);
      else if (typeof msg == "undefined")
        msg = "undefined";

      api.sendMessage(msg,event.threadID,event.messageID);
    }
    function out(msg) {
      output(msg);
    }
    function mapToObj(map) {
      const obj = {};
      map.forEach(function (v, k) {
        obj[k] = v;
      });
      return obj;
    }
    const cmd = `
    (async () => {
      try {
        ${args.join(" ")}
      }
      catch(err) {
        console.log("eval command", err);
        api.sendMessage(err.message,event.threadID,event.messageID);

        }
    })()`;
    eval(cmd);
  } catch (err) {
    console.log(err)
  }
}
