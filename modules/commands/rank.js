const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "لفل",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "لفلك",
  commandCategory: "العاب",
  cooldowns: 5,
  dependencies: {
    "fs-extra": "",
    "path": "",
    "jimp": "",
    "node-superfetch": "",
    "canvas": ""
  }
};

module.exports.onLoad = async function () {
  const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
  const path = resolve(__dirname, "cache" );
    if (!existsSync(path)) mkdirSync(path, { recursive: true });
  if (!existsSync(resolve(__dirname, 'cache', 'rankcard1.png'))) await downloadFile ("https://i.postimg.cc/2SX994dy/370302233-350278991004060-783576214704582311-n.jpg", resolve(__dirname, 'cache', 'rankcard1.png'));
  if (!existsSync(resolve(__dirname, 'cache', 'rankcard2.png'))) await downloadFile("https://i.postimg.cc/2SX994dy/370302233-350278991004060-783576214704582311-n.jpg", resolve(__dirname, 'cache', 'rankcard2.png'));
  if (!existsSync(resolve(__dirname, 'cache', 'rankcard3.png'))) await downloadFile("https://i.postimg.cc/2SX994dy/370302233-350278991004060-783576214704582311-n.jpg", resolve(__dirname, 'cache', 'rankcard3.png'));
  //muốn thêm ảnh thì cứ làm như trên nhé lên web ibb.co hoặc i.imgur.com để up ảnh rồi lấy đường link add dô như vậy là tự tải ảnh về cache nhé!!!! tối đa 30 ảnh
}

//random color 
function getRandomColor() {
    var letters = '0123456789ABCDEF';
  var color = '#';
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


module.exports.makeRankCard = async (data) => {    
    /*
    * 
    * Remake from Canvacord
    * 
    */

    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
  const Canvas = global.nodemodule["canvas"];
  const request = global.nodemodule["node-superfetch"];
  const __root = path.resolve(__dirname, "cache");
  const PI = Math.PI;

    const { id, name, rank, level, expCurrent, expNextLevel } = data;

  Canvas.registerFont(__root + "/SplineSans-Medium.ttf", {
    family: "Manrope",
    weight: "regular",
    style: "normal"
  });
  Canvas.registerFont(__root + "/SplineSans-Medium.ttf", {
    family: "Manrope",
    weight: "bold",
    style: "normal"
  });
//random rankcard by Siêu Đáng Yêu ,png by ngô đức hiển(xin vui lòng giữ credit)
  const pathCustom = path.resolve(__dirname, "cache", "customrank");
  var customDir = fs.readdirSync(pathCustom);
  let random = Math.floor(Math.random() * 3) + 1;
      var dirImage = __root + "/rankcard" + random + ".png";


  customDir = customDir.map(item => item.replace(/\.png/g, ""));

  for (singleLimit of customDir) {
    var limitRate = false;
    const split = singleLimit.split(/-/g);
    var min = parseInt(split[0]), max = parseInt((split[1]) ? split[1] : min);

    for (; min <= max; min++) {
      if (level == min) {
        limitRate = true;
        break;
      }
    }

    if (limitRate == true) {
      dirImage = pathCustom + `/${singleLimit}.png`;
      break;
    }
  }

  let rankCard = await Canvas.loadImage(dirImage);
  const pathImg = __root + `/rank_${id}.png`;

  var expWidth = (expCurrent * 615) / expNextLevel;
  if (expWidth > 615 - 18.5) expWidth = 615 - 18.5;

  let avatar = await request.get(`https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`);

  avatar = await this.circle(avatar.body);

  const canvas = Canvas.createCanvas(934, 282);
  const ctx = canvas.getContext("2d");

  ctx.drawImage(rankCard, 0, 0, canvas.width, canvas.height);
  ctx.drawImage(await Canvas.loadImage(avatar), 45, 50, 180, 180);

  ctx.font = `bold 38px Manrope`;
  ctx.fillStyle = `#111111`;
  ctx.textAlign = "start";
  ctx.fillText(name, 270, 111);
  ctx.font = `38px Manrope`;
  ctx.fillStyle = `#111111`;
  ctx.textAlign = "center";

  ctx.font = `bold 37px Manrope`;
  ctx.fillStyle = `#111111`;
  ctx.textAlign = "end";
  ctx.fillText(level, 870 - 55, 80);
  ctx.fillStyle = `#111111`;
  ctx.fillText("Lv.", 934 - 55 - ctx.measureText(level).width - 67, 80);

  ctx.font = `bold 37px Manrope`;
  ctx.fillStyle = `#111111`;
  ctx.textAlign = "end";
  ctx.fillText(rank, 934 - 55 - ctx.measureText(level).width - 88 - ctx.measureText(`Lv.`).width - -190, 120);
  ctx.fillStyle = `#111111`;
  ctx.fillText("#", 904 - 55 - ctx.measureText(level).width - 19 - ctx.measureText(`Lv.`).width - 19 - ctx.measureText(rank).width - -170, 120);

  ctx.font = `bold 29px Manrope`;
  ctx.fillStyle = `#111111`;
  ctx.textAlign = "start";
  ctx.fillText("/ " + expNextLevel, 710 + ctx.measureText(expCurrent).width + 104, 227);
  ctx.fillStyle = `#111111`;
  ctx.fillText(expCurrent, 800, 227);

  ctx.beginPath();
  ctx.fillStyle = `#111111`;
  ctx.arc(0 + 0, 0 + 0 + 0, 0, 0 * PI, 0 * PI, true);
  ctx.fill();
  ctx.fillRect(0 + 0, 0 + 0, expWidth, 0);
  ctx.arc(0 + 0 + expWidth, 0 + 0 + 0, 0, 0 * PI, 0 * PI, false);
  ctx.fill();

  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(pathImg, imageBuffer);
  return pathImg;
}

module.exports.circle = async (image) => {
    const jimp = global.nodemodule["jimp"];
  image = await jimp.read(image);
  image.circle();
  return await image.getBufferAsync("image/png");
}

module.exports.expToLevel = (point) => {
  if (point < 0) return 0;
  return Math.floor((Math.sqrt(1 + (4 * point) / 3) + 1) / 2);
}

module.exports.levelToExp = (level) => {
  if (level <= 0) return 0;
  return 3 * level * (level - 1);
}

module.exports.getInfo = async (uid, Currencies) => {
  let point = (await Currencies.getData(uid)).exp;
  const level = this.expToLevel(point);
  const expCurrent = point - this.levelToExp(level);
  const expNextLevel = this.levelToExp(level + 1) - this.levelToExp(level);
  return { level, expCurrent, expNextLevel };
}

module.exports.run = async ({ event, api, args, Currencies, Users }) => {
  const fs = global.nodemodule["fs-extra"];

  let dataAll = (await Currencies.getAll(["userID", "exp"]));
  const mention = Object.keys(event.mentions);
  const name = global.data.userName.get(event.senderID) || await Users.getNameUser

  dataAll.sort((a, b) => {
    if (a.exp > b.exp) return -1;
    if (a.exp < b.exp) return 1;
  });

  if (args.length == 0) {
    const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(event.senderID)) + 1;
    const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
    if (rank == 0) return api.sendMessage("تعطل", event.threadID, event.messageID);
    const point = await this.getInfo(event.senderID, Currencies);
    const timeStart = Date.now();
    let pathRankCard = await this.makeRankCard({ id: event.senderID, name, rank, ...point })
    return api.sendMessage({body: `👑اسمك: ${name}\n🏆ترتيبك ${rank}`, attachment: fs.createReadStream(pathRankCard, {'highWaterMark': 128 * 1024}) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
  }
  if (mention.length == 1) {
    const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(mention[0])) + 1;
    const name = global.data.userName.get(mention[0]) || await Users.getNameUser(mention[0]);
    if (rank == 0) return api.sendMessage("تعطل", event.threadID, event.messageID);
    let point = await this.getInfo(mention[0], Currencies);
    let pathRankCard = await this.makeRankCard({ id: mention[0], name, rank, ...point })
    return api.sendMessage({ attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
  }
  if (mention.length > 1) {
    for (const userID of mention) {
      const rank = dataAll.findIndex(item => parseInt(item.userID) == parseInt(userID)) + 1;
      const name = global.data.userName.get(userID) || await Users.getNameUser(userID);
      if (rank == 0) return api.sendMessage("تعطل", event.threadID, event.messageID);
      let point = await this.getInfo(userID, Currencies);
      let pathRankCard = await this.makeRankCard({ id: userID, name, rank, ...point })
      return api.sendMessage({ attachment: fs.createReadStream(pathRankCard) }, event.threadID, () => fs.unlinkSync(pathRankCard), event.messageID);
    }
  }
}
