const fs = require("fs"),
  path = __dirname + "/cache/namebox.json";

module.exports.config = {
name: "اسم-المجموعه",
version: "1.0.8",
hasPermssion: 0,
credits: "نوت دفاين",
description: "حماية اسم مجموعتك",
commandCategory: "مسؤولي المجموعات",
usages: "",
cooldowns: 0
};
module.exports.languages = {
"vi": {},
"en": {}
};
module.exports.onLoad = () => {   
if (!fs.existsSync(path)) fs.writeFileSync(path, JSON.stringify({}));
};

module.exports.handleEvent = async function ({ api, event, Threads, permssion }) {
const { threadID, messageID, senderID, isGroup, author } = event;

if (isGroup == true) {
let data = JSON.parse(fs.readFileSync(path))
let dataThread = (await Threads.getData(threadID)).threadInfo
const threadName = dataThread.threadName;
if (!data[threadID]) {
data[threadID] = {
namebox: threadName,
status: true
}
fs.writeFileSync(path, JSON.stringify(data, null, 2));
}
if (data[threadID].namebox == null || threadName == "undefined" || threadName == null) return

else if (threadName != data[threadID].namebox && data[threadID].status == false) {
data[threadID].namebox = threadName
fs.writeFileSync(path, JSON.stringify(data, null, 2));
}

if (threadName != data[threadID].namebox && data[threadID].status == true) {
return api.setTitle(
 data[threadID].namebox,
   threadID, () => {
     api.sendMessage(
  ``,
   threadID)
   });
  }
}
};

module.exports.run = async function ({ api, event, permssion, Threads }) {
const { threadID, messageID } = event;
if (permssion == 0) return api.sendMessage("قم بي تشغيل/ايقاف", threadID);
let data = JSON.parse(fs.readFileSync(path))
let dataThread = (await Threads.getData(threadID)).threadInfo
const threadName = dataThread.threadName;

if (data[threadID].status == false) {
   data[threadID] = {
     namebox: threadName,
     status: true
   }
} else data[threadID].status = false
     fs.writeFileSync(path, JSON.stringify(data, null, 2));
      api.sendMessage(
    `بلفعل تم ${data[threadID].status == true ? `تشغيل` : `ايقاف`} وضع حماية اسم المجموعة`,
 threadID)
} 
function PREFIX(t) {
var dataThread = global.data.threadData.get(t) || {}
return dataThread.PREFIX || global.config.PREFIX
  }