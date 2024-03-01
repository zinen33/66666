module.exports.config = {
  name: "الاوامر",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "اوامر البوت",
  usages: "الاوامر",
  commandCategory: "خدمات",
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, event, handleReply }) {
  let num = parseInt(event.body.split(" ")[0].trim());
  (handleReply.bonus) ? num -= handleReply.bonus : num;
  let msg = "";
  let data = handleReply.content;
  let check = false;
  if (isNaN(num)) msg = "رد على الرسالة برقم العنوان لاظهار الاوامر";
  else if (num > data.length || num <= 0) msg = "الرقم الذي اخترته غير موجود بالقائمة ";
  else {
    const { commands } = global.client;
    let dataAfter = data[num-=1];
    if (handleReply.type == "cmd_info") {
      let command_config = commands.get(dataAfter).config;
      msg += `〖${command_config.commandCategory.toUpperCase()}〗\n`;
      msg += `\nاسم الأمر: ${dataAfter}`;
      msg += `\nمعلومات: ${command_config.description}`;
      msg += `\nالاستخدام: ${(command_config.usages) ? command_config.usages : ""}`;
      msg += `\nوقت الانتظار: ${command_config.cooldowns || 5}s`;
      msg += `\nالصلاحية: ${(command_config.hasPermssion == 0) ? "الكل" : (command_config.hasPermssion == 1) ? "مسؤولي المجموعات" : "المطور"}`;
      msg += `\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏`
      msg += `\n\n↞ تم تطويره بواسطة ${command_config.credits} `;
    } else {
      check = true;
      let count = 0;
      msg += `هذه هي جميع الاوامر المتاحة في فئة 〔${dataAfter.group.toUpperCase()}〕\n`;

      dataAfter.cmds.forEach(item => {
        msg += `\n ${count+=1}↞ ${item}: ${commands.get(item).config.description}`;
      })
      msg += "\n\n╭──────╮\n        انت الان في قائمة الاوامر حسب الفئة \n╰──────╯ رد على الرسالة برقم الامر لعرض تفاصيل الأمر وكيفية استخدام الأمر";
    }
  }
  const axios = require('axios');
  const fs = require('fs-extra');
  const img = ["https://i.ibb.co/d56tk6p/426832990-923698049075141-8261874210181133533-n-jpg-stp-dst-jpg-p480x480-nc-cat-104-ccb-1-7-nc-sid-8.jpg", "https://i.ibb.co/RDVJ1JP/426167932-436793058784884-5778496062152567081-n-jpg-stp-dst-jpg-p480x480-nc-cat-105-ccb-1-7-nc-sid-8.jpg",
"https://i.ibb.co/xCdQrSY/430484079-1322382168425133-8037429260254754735-n-jpg-stp-dst-jpg-p480x480-nc-cat-111-ccb-1-7-nc-sid.jpg",
"https://i.ibb.co/TPT0N99/430012116-455402100293879-2270925309150600172-n-jpg-stp-dst-jpg-p480x480-nc-cat-103-ccb-1-7-nc-sid-8.jpg"
 ]
  var path = __dirname + "/cache/menu.jpg"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 
  const imgP = []
  let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
  fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
  imgP.push(fs.createReadStream(path))
  var msgg = {body: msg, attachment: imgP}
  api.unsendMessage(handleReply.messageID);
  return api.sendMessage(msgg, event.threadID, (error, info) => {
    if (error) console.log(error);
    if (check) {
      global.client.handleReply.push({
        type: "cmd_info",
        name: this.config.name,
        messageID: info.messageID,
        content: data[num].cmds
      })
    }
  }, event.messageID);
}

module.exports.run = async function({ api, event, args }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
  const axios = require('axios');
  const fs = require('fs-extra');
  const imgP = []
  const img = ["https://i.ibb.co/ckFHB7L/430029802-942534690781106-8395181294896946861-n-jpg-stp-dst-jpg-p480x480-nc-cat-109-ccb-1-7-nc-sid-8.jpg"
,"https://i.ibb.co/585Vc35/426210100-1557087435133734-684256413642874073-n-jpg-nc-cat-103-ccb-1-7-nc-sid-8cd0a2-nc-eui2-Ae-Fr7.jpg"]
  var path = __dirname + "/cache/menu.jpg"
  var rdimg = img[Math.floor(Math.random() * img.length)]; 

    let dowloadIMG = (await axios.get(rdimg, { responseType: "arraybuffer" } )).data; 
        fs.writeFileSync(path, Buffer.from(dowloadIMG, "utf-8") );
        imgP.push(fs.createReadStream(path))
  const command = commands.values();
  var group = [], msg = "【قائمة الفئات المتاحة】\n";
  let check = true, page_num_input = "";
  let bonus = 0;

  for (const commandConfig of command) {
    if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
    else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
  }

  if (args[0] && ["all", "الكل"].includes(args[0].trim())) {
    let all_commands = [];
    group.forEach(commandGroup => {
      commandGroup.cmds.forEach(item => all_commands.push(item));
    });
    let page_num_total = Math.ceil(all_commands.length / 2222222222);
    if (args[1]) {
      check = false;
      page_num_input = parseInt(args[1]);
      if (isNaN(page_num_input)) msg = "رد على الرسالة برقم العنوان لاظهار الاوامر";
      else if (page_num_input > page_num_total || page_num_input <= 0) msg = "الرقم الذي اخترته غير موجود بالقائمة";
      else check = true;
    }
    if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
      bonus = index_start;
      index_end = (index_start + 2222222222 > all_commands.length) ? all_commands.length : index_start + 2222222222;
      all_commands = all_commands.slice(index_start, index_end);
      all_commands.forEach(e => {
        msg += `\n「${index_start+=1}」↞〔${e}: ${commands.get(e).config.description}〕`;
      })
      msg += `\n\nالصفحة ${page_num_input || 1}/${page_num_total}`;
      msg +=``
      msg += "\n╭──────\n       انت الان في قائمة الاوامر حسب الفئة \n──────╯رد على الرسالة برقم الامر لعرض تفاصيل الأمر وكيفية استخدام الأمر، اكتب اسم الامر لعرض تفاصيل استخدامه";
    }
    var msgg = {body: msg, attachment: imgP}
    return api.sendMessage(msgg, threadID, (error, info) => {
      if (check) {
        global.client.handleReply.push({
          type: "cmd_info",
          bonus: bonus,
          name: this.config.name,
          messageID: info.messageID,
          content: all_commands
        })
      }
    }, messageID)
  }

  let page_num_total = Math.ceil(group.length / 2222222222);
  if (args[0]) {
    check = false;
    page_num_input = parseInt(args[0]);
    if (isNaN(page_num_input)) msg = "رد علي الرساله برقم العنوان لاظهار الاوامر";
    else if (page_num_input > page_num_total || page_num_input <= 0) msg = "  الرقم الذي اخترته غير موجود بالقائمة";
    else check = true;
  }
  if (check) {
    index_start = (page_num_input) ? (page_num_input * 2222222222) - 2222222222 : 0;
    bonus = index_start;
    index_end = (index_start + 2222222222 > group.length) ? group.length : index_start + 2222222222;
    group = group.slice(index_start, index_end);
    group.forEach(commandGroup => msg += `\n「${index_start+=1}」↞〔${commandGroup.group.toUpperCase()}〕`);
    msg += `\n\nالصفحة【${page_num_input || 1}/${page_num_total}】`;
    msg +=``
    msg += `\n╭──────\n       انت الان في قائمة الفئات \n──────╯ قم بالرد على الرسالة برقم احدى الفئات المتاحة لكي يظهر لك الاوامر التي تحتويها تلك الفئة `;
  }
  var msgg = {body: msg, attachment: imgP}
  return api.sendMessage(msgg, threadID, async (error, info) => {
    global.client.handleReply.push({
      name: this.config.name,
      bonus: bonus,
      messageID: info.messageID,
      content: group
    })
  });
    }