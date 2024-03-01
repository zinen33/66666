const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
  name: "تطقيم",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "صور تطقيم انمي",
  commandCategory: "صور",
  cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
  const response = await axios.get("https://copel--jcbshc.repl.co/");
  const urls = response.data;

  const url1 = urls.url1;
  const url2 = urls.url2;

let imgs1 = (await axios.get(url1, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));
  let imgs2 = (await axios.get(url2, { responseType: 'arraybuffer' })).data;
  fs.writeFileSync(__dirname + "/cache/img2.png", Buffer.from(imgs2, "utf-8"));

  var allimage = [];
  allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
  allimage.push(fs.createReadStream(__dirname + "/cache/img2.png"));

  const msg = `♡◄∘ هذا هو تطقيمك ∘►♡`;

  return api.sendMessage({
    body: msg,
    attachment: allimage
  }, event.threadID, event.messageID);
}