const axios = require("axios");

async function translate(text, sourceLang, targetLang) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await axios.get(url);
    const translation = res.data[0].map((item) => item[0]).join("");
    return translation;
  } catch (error) {
    console.error(error);
    throw new Error('Error translating text');
  }
}


module['exports']['config'] = {
    name: "gen",
    aliases: ["تخيل", "ارسم", "رسم", "أرسم"],
    version: "1.0.0",
    role: 0,
    credits: "Allou Mohamed",
    description: "Generate an image.",
    category: "AI",
    guide: "[prompt | model]",
    countDown: 0
};

const fs = require("fs");
const { get } = require("axios");

module['exports']['atCall'] = async function({ api, event, args }) {
    let path = __dirname + "/cache/image.png";
    const tzt = args.join(" ").split("-").map(item => item.trim());
    let txt = tzt[0];
    let txt2 = tzt[1] || 10;

    let tid = event.threadID;
    let mid = event.messageID;

    if (!args[0] || !txt) return api.sendMessage("مذا ارسم لك ؟🌝.", tid, mid);

    try {
        api.sendMessage("⏳ وايت...", tid, mid);

        let enc = await translate(txt, "ar", "en");
let enctxt = encodeURI(enc)
        let url = `https://arjhil-prodia-api.arjhilbard.repl.co/generate?prompt=${enctxt}&model=${txt2}`;

        let result = (await get(url, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(path, Buffer.from(result, "utf-8"));
        api.sendMessage({ attachment: fs.createReadStream(path) }, tid, () => fs.unlinkSync(path), mid);
    } catch (e) {
        return api.sendMessage(e.message, tid, mid);
    }
};