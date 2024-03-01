const axios = require("axios");
module.exports.config = {
    name: "جزاء",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "جزاء - اختر اللاعب اللذي تضنه سيتمكن من تسديد ضربة الجزاء ",
    commandCategory: "العاب",
    usages: "هلب",
    cooldowns: 0
};
module.exports.run = async ({ api, event, Threads, args, Currencies }) => {
const { threadID, messageID, senderID } = event;
  if(args[0] == "هلب"){
  let imag = (await axios.get("https://i.imgur.com/VYf0UGv.jpg", {
        responseType: "stream"
      })).data;
  var msg = { body: ' ركلة جزاء ، ولكن ماذا تطلب؟ =)))',
attachment: imag 
}
    return api.sendMessage(msg, threadID, messageID)
  }
if(!args[0] || isNaN(args[0])){
    return api.sendMessage('لازم تراهن بمبلغ حتى تبدي اللعبه ', threadID, messageID)
    }
 else {
   if (await checkMoney(senderID, 50) == false){return api.sendMessage('يتطلب 50 دولارًا على الأقل للمشاركة!', threadID, messageID)}
     await Currencies.decreaseMoney(senderID, parseInt(args[0]));
var tile_1 = Math.floor(Math.random() * 100)
    var tile_2 = Math.floor(Math.random() * 100)
    var tile_3 = Math.floor(Math.random() * 100)
    var tile_4 = Math.floor(Math.random() * 100)
    var tile_5 = Math.floor(Math.random() * 100)
    var tile_6 = Math.floor(Math.random() * 100)
    var tile_7 = Math.floor(Math.random() * 100)
    var tile_8 = Math.floor(Math.random() * 100)
    var tile_9 = Math.floor(Math.random() * 100)
    var tile_10 = Math.floor(Math.random() * 100)
  var sotien_1 = args[0]
  var sotien_2 = args[0] * 2
  var sotien_3 = args[0] * 12
  var sotien_4 = args[0] * 144
  var sotien_5 = args[0] * 1880
  var sotien_6 = args[0] * 2880
  var sotien_7 = args[0] * 2990
  var sotien_8 = args[0] * 3880
  var sotien_9 = args[0] * 6890
  var sotien_10 = args[0] * 14400
let gif = (await axios.get("https://i.postimg.cc/bJ60WRwL/20220728-113119.gif", {
        responseType: "stream"
      })).data;
  const cuoc = parseInt(args[0])
  var msg = { body: `10 لاعبين كرة قدم , وهدف واحد , قم بالرهان على اللاعب اللذي تضنه سيتمكن من تسجيل الهدف  :\n\n1. ميغيل أنخيل سالغادو [${sotien_1}$] || احتمالية التسجيل ${tile_1}%\n2. سامي خضيرة  [${sotien_2}$] || احتمالية التسجيل ${tile_2}%\n3. أوله غونار سولشار [${sotien_3}$] || احتمالية التسجيل ${tile_3}%\n4. ماتيو كوفاتشيتش [${sotien_4}$] || احتمالية التسجيل ${tile_4}%\n5. ستيفن ماكمانامان [${sotien_5}$] || احتمالية التسجيل ${tile_5}%\n6. برناردو سيلفا [${sotien_6}$] || احتمالية التسجيل ${tile_6}%\n7. روي كين [${sotien_7}$] || احتمالية التسجيل ${tile_7}%\n8. يان أوبلاك [${sotien_8}$] || احتمالية التسجيل ${tile_8}%\n9. سيرخيو راموس [${sotien_9}$] || احتمالية التسجيل ${tile_9}%\n10. كرستيانو رنالدو [${sotien_10}$] || احتمالية التسجيل ${tile_10}%\n\nرد برقم اللاعب للرهان عليه`,
   attachment: gif
}
return api.sendMessage(msg, threadID, (err, info) => {
        global.client.handleReply.push({
            name: this.config.name,
            messageID: info.messageID,
            author: senderID,
            cuoc
        });
    }, messageID)
}
   async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
}
module.exports.handleReply = async ({ api, Currencies, event, handleReply }) => {
const { threadID, senderID, messageID, body } = event;
  const { cuoc, author } = handleReply;
   const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
if (author !== senderID) { return api.sendMessage('مو انت الي سويت هذا الكيم ميصر تلعب !', threadID, messageID)};
 if(!("keobo" in global.client)) global.client.keobo = {}
 if(isNaN(body)) return api.sendMessage("يجب عليك إدخال رقم !", threadID);
if(1 > body || body > 10) return api.sendMessage("يمكنك فقط الاختيار من 1 إلى 10", threadID, messageID);
  if(body == "1"){
    var tienan = cuoc,
    win = "https://www.realmadrid.com/img/horizontal_940px/salgado-alegria-03_20210924122544.jpg",
      losse = "https://wikiimg.tojsiabtv.com/wikipedia/commons/d/d4/M%C3%ADchel_Salgado_2018.jpg"
  }
  else if(body == "2"){
    var tienan = cuoc * 2,
    win = "https://static.dw.com/image/17768558_403.jpg",
      losse = "http://files.elnashra.com/elnashrasports/pictures/6843452_1575485149.jpg"
  }
  else if(body == "3"){
    var tienan = cuoc * 12,
    win = "http://c.files.bbci.co.uk/F7A3/production/_119559336__119558692_ole262.jpg",
      losse = "https://www.alroeya.com/uploads/images/2020/10/01/943434.jpg"
  }
  else if(body == "4"){
    var tienan = cuoc * 144,
    win = "https://www.albawaba.com/sites/default/files/im_new/sports_editor/mateo-kovacic-chelsea-2018-19_1i0tt4f1hlpg21pavdjq8c6qzr.jpg",
      losse = "https://goool.mx/wp-content/uploads/2019/06/2562019-15.jpg"
  }
  else if(body == "5"){
    var tienan = cuoc * 1880,
    win = "https://imgsrv2.voi.id/zfxdDAMhPLFTVUAc3S4CPqVeuIRaRO9QoeKSRDPGMa4/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8zMTQzNS8yMDIxMDIwODA4MTktbWFpbi5jcm9wcGVkXzE2MTI3NDcyMDYuanBn.jpg",
      losse = "https://ar.ellas-cookies.com/images/sport-i-fitnes/stiv-makmanaman-biografiya-statistika-karera_4.jpg"
  }
  else if(body == "6"){
    var tienan = cuoc * 2880,
    win = "https://baghdadtoday.news/MediaStorage/GalleryImages/199014.jpg?watermark=4",
      losse = "https://24.ae/images/Articles2/20218122338207WE.jpg"
  }
  else if(body == "7"){
    var tienan = cuoc * 2990,
    win = "https://img.youm7.com/large/202004270219341934.jpg",
      losse = "https://img.btolat.com/2022/6/27/news/287115/large.jpg"
  }
  else if(body == "8"){
    var tienan = cuoc * 3880,
    win = "https://cdni.rt.com/media/pics/2020.09/original/5f6dada542360467324724ac.jpg",
      losse = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1a751c786123a51f/623f3bf530a6ae0eff6138d6/20220306_Zlatan_Ibrahimovic_Milan.jpg"
  }
  else if(body == "9"){
    var tienan = cuoc * 6890,
    win = "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltfb479b7661c76d7e/60dadd61ddcd520eeb87db01/1151543141d387060fba0362e6c0cccbcd70f9e9.jpg",
      losse = "https://www.watanserb.com/wp-content/uploads/2021/04/%D8%A7%D9%84%D9%84%D8%A7%D8%B9%D8%A8-%D8%A7%D9%84%D8%A5%D8%B3%D8%A8%D8%A7%D9%86%D9%8A-%D8%B3%D9%8A%D8%B1%D8%AC%D9%8A%D9%88-%D8%B1%D8%A7%D9%85%D9%88%D8%B3-%D9%85%D8%AF%D8%A7%D9%81%D8%B9-%D9%81%D8%B1%D9%8A%D9%82-%D8%B1%D9%8A%D8%A7%D9%84-%D9%85%D8%AF%D8%B1%D9%8A%D8%AF.jpg"
  }
  else if(body == "10"){
    var tienan = cuoc * 14400,
    win = "https://cdn.al-ain.com/images/2021/12/03/138-014428-cristiano-ronaldo-800-goals-manchester-united_700x400.jpg",
      losse = "https://cdni.rt.com/media/pics/2019.04/original/5cb6d09d95a5979c608b45e6.jpg"
  }
  if( moneyUser < tienan){
    return api.sendMessage(`ليس لديك ما يكفي من المال لاختيار رقم اللاعب رقم ${body} انت راهنت بـ${tienan} لذا تم خصم هذا المبلغ من رصيدك \n\n-لمن تراهن لازم فلوس الرهان نص او اقل من نص رصيدك !`, threadID)
  } else {
  
var msg = `لقد قمت بالرهان على اللاعب رقم   ${body} والمبلغ الذي يمكنك الحصول عليه اذا تمكن اللاعب من تسجيل الهدف هو ${tienan}!  \n رد ع الرسالة واكتب "جزاء" للبدء`;

const keobo = (msg, bo) => api.sendMessage(msg, threadID, (err, info) => {
        global.client.keobo[senderID] = {
            spam: 10,
            count: 0,
            bo,
            stt: body,
            author: senderID,
            tienan: tienan,
          win: win,
          lose: losse
        }
    })
keobo(msg, body.trim())
}
}
module.exports.handleEvent = async({ api, event, Currencies, Users }) => {
  const { threadID, senderID, body } = event;
    if(!("keobo" in global.client)) global.client.keobo = {};
    if (!([senderID] in global.client.keobo)) return;
    const { increaseMoney, decreaseMoney } = Currencies;
  if(body == "جزاء" || body == "جزاء") {
        global.client.keobo[senderID].count++;
     if (global.client.keobo[senderID].count > 1) return;
    setTimeout(async () => {
      let name1 = await Users.getNameUser(senderID)
      let reward = global.client.keobo[senderID].tienan * 2
      let type_bo = global.client.keobo[senderID].stt
       let type_bo_win = global.client.keobo[senderID].win
      let type_bo_lose = global.client.keobo[senderID].lose
      if( type_bo == '1'){
        var choose = ["true", "false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 5){
        let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '2'){
        var choose = ["true", "false", "false", "false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 7){
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } 
      else if( type_bo == '3'){
        var choose = ["true", "false", "false", "false","false","true","false","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 8){
let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      } else if( type_bo == '4'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '5'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","true","false","fale","fale"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 10){
       let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
    }
    }
    else if( type_bo == '6'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '7'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '8'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","false","false","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '9'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","false","false","false","false","false"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }  
      }
      else if( type_bo == '10'){
        var choose = ["true", "false", "false", "false","false","true","false","false","false","false","false","false","false","true","false","false","false","false","false","false","true"]
      var ans = choose[Math.floor(Math.random() * choose.length)]
      if( ans == "false" || global.client.keobo[senderID].count < 9){
      let imag = (await axios.get(type_bo_win, {
        responseType: "stream"
      })).data;
        var msg = { body: `فشل اللاعب الذي اخترته في تسجيل الهدف  !\n تم خصم ${global.client.keobo[senderID].tienan}$ من رصيدك`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
                delete global.client.keobo[senderID];
            })
      } else {
         let imag = (await axios.get(type_bo_lose, {
        responseType: "stream"
      })).data;
        var msg = { body: `تمكن اللاعب الذي اخترته من تسجيل الهدف !\n المبلغ اللذي فزت به هو :${reward}$`, attachment: imag }
        return api.sendMessage(msg, threadID, async () => {
          await increaseMoney(senderID, parseInt(reward));
                delete global.client.keobo[senderID];
            })
      }}}, 10000);
      }  
      }