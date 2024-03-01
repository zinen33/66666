const Black = {
  name: "صورته",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "الفتى المتكبر",
  description: "مكسل اكتب شرح",
  usePrefix: false,
  commandCategory: "يجيب صوره بروفايل الشخص الي ترد عليه",
  usages: "مايهم",
  cooldowns: 3
  };
  const cheerio = require('cheerio');
const axios = require ("axios");
module.exports = {
  config: Black,
  onType: async ({ api, event, args, black, usersData }) => {
const tvm = args.join(" ");
if (tvm == "𓆩حط𓆪" && event.senderID == config.OWNERID)
{
 if(["photo"].includes(event.messageReply.attachments[0].type))
 {
   api.changeAvatar(await funcs.str(event.messageReply.attachments[0].url), (err, data) => { if (err) return black.reply("حدث خطأ ف تغيير الصورة")})
   return black.reply("𓆩تفضل حب𓆪")     
 }
 else return black.reply("رد على صورة");
}
if (event.messageReply)
{
  if (event.messageReply.senderID == config.OWNERID) return black.reply("لايمكنك اخد بروفايل سيدي عمر");
   const avUrl = await usersData.getAvatarUrl(event.messageReply.senderID)
  black.reply({body: "┊ ┊ ⋆˚ ⁭تفضل ┊ ┊ ⋆˚ ⁭", attachment: await funcs.str(avUrl)})
}
if (Object.keys(event.mentions)[0] != undefined)
{
  if (Object.keys(event.mentions)[0] == config.OWNERID) return black.reply("لايمكنك اخد بروفايل سيدي عمر");
  const avUrl = await usersData.getAvatarUrl(Object.keys(event.mentions)[0])
  black.reply({body: "┊ ┊ ⋆˚ ⁭تفضل ┊ ┊ ⋆˚ ⁭", attachment: await funcs.str(avUrl)})

}
if (tvm.startsWith("https://www.facebook"))
{
  const res = await axios.get(tvm);

const html = res.data;

const $ = cheerio.load(html);

const metaTags = {};
$('meta').each((index, element) => {
    const name = $(element).attr('name');
    const content = $(element).attr('content');
    if (name && content) {
        metaTags[name] = content;
    }
});

const UIDD = metaTags['apple-itunes-app'];
const UID = UIDD?.split('//profile/')[1] || "";
const avUrl = await usersData.getAvatarUrl(UID);
if (!UID) return black.reply("حذث خطأ");
black.reply({body: "┊ ┊ ⋆˚ ⁭تفضل ┊ ┊ ⋆˚ ⁭",attachment: await funcs.str(avUrl)})
}
}
   };