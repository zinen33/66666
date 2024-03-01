module.exports.config = {
    name: "فيس",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "ينزل من الفيس",
  commandCategory: "خدمات",
  usages: "فيس صوت/فيديو [رابط]",
  cooldowns: 0
};
module.exports.run = async function ({api,event,args})  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
try { 
  if(args[0] == 'صوت'){
        api.sendMessage(`جار معالجة الطلب !!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 400),event.messageID);
        const path = __dirname+`/cache/2.mp3`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `✅ تم التنزيل بوت سيستا في الخدمة ✅`, 
    attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path),event.messageID);
    }; 
  }catch {return api.sendMessage(`غير قادر على معالجة الطلب`,event.threadID,event.messageID)}
    try { 
      if(args[0] == 'فيديو'){
            api.sendMessage(`اصبر !!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 500),event.messageID);
            const path1 = __dirname+`/cache/1.mp4`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `تم التحميل بواسطة بوت سيستا !`, 
    attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
    }; 
  }catch {return api.sendMessage(`غير قادر على تحميل الفيديو , ربما اعدادات خصوصية الفيديو غير عامة`,event.threadID,event.messageID)}
  }