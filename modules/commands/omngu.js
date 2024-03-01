var hiro = "CHAND";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "لوكو",
  version: "1.0",
  hasPermssion: 0,
  credits: `عمر`,
  description: "انشاء شعار",
  commandCategory: "صور",
  usages: "لوكو",
  cooldowns: 2,
};

module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "الكل") {
    const logoTypes = [
      "★★★★★★★★★★\nيوجد 30 لوكو\n★★★★★★★★★★"
    ];
    return api.sendMessage(`\n\n${logoTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage("●❯────────────❮● اكتب لوكو والرقم وسمك بل انكلش ●❯────────────❮●", threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "1":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/1?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "2":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/2?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "3":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/3?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "4":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/4?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "5":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/5?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "6":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/6?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "7":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/7?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "8":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/8?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "9":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/9?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "10":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/10?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "11":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/11?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\n𝐋𝐎𝐆𝐎 𝐇𝐄𝐑𝐄 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "12":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/12?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "13":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/13?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "14":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/14?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "15":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/15?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜\nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
      case "16":
      apiUrl =`https://reset-api.ch9nd.repl.co/api/textpro/16?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "17":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/17?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "18":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/18?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "19":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/19?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "20":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/20?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "21":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/21?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "22":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/22?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "23":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/23?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "24":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/24?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "25":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/25?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "26":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/26?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "27":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/27?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "28":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/28?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;


    case "29":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/29?text=${name}`;
      message = "❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
    case "30":
      apiUrl = `https://reset-api.ch9nd.repl.co/api/textpro/30?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;



      case "31":
      apiUrl = `https://rest-api-001.faheem001.repl.co/api/textpro?number=4&text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;

      case "32":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/blood?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;




      case "33":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/textpro/broken?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;



      case "34":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/nightstars?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;

      case "35":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/horror?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;

      case "36":
      apiUrl = `https://faheem-vip-010.faheem001.repl.co/api/ephoto/facebookcover3?text=${name}`;
      message = " ❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜ \nذا الي طلبته 🪽\n🪽❛ ━━━━･❪ 🕊️ ❫ ･━━━━ ❜";
      break;
      
    default:
      return api.sendMessage(`●❯────────────❮●\n لوكو 30 OMAR \n●❯────────────❮●`, threadID, messageID);
  }

  api.sendMessage("࿇ ══━━━✥◈✥━━━══ ࿇\nجاري الانشاء ...\n࿇ ══━━━✥◈✥━━━══ ࿇", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};
