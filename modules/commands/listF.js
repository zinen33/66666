module.exports.config = {
  name: "فريند",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "عمر",
  description: "عرض معلومات الأصدقاء / حذف الأصدقاء عن طريق الرد",
  commandCategory: "المطور",
  usages: "ا",
  cooldowns: 5
};

module.exports.handleReply = async function ({ api, args, Users, handleReply, event, Threads }) {
  const { threadID, messageID } = event;
  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  switch (handleReply.type) {
    case "reply":
      {
        var msg ="" , name, urlUser, uidUser;
        var arrnum = event.body.split(" ");
        var nums = arrnum.map(n => parseInt(n));
        for (let num of nums) {
          name = handleReply.nameUser[num - 1];
          urlUser = handleReply.urlUser[num - 1];
          uidUser = handleReply.uidUser[num - 1];

          api.unfriend(uidUser);
          msg += '- ' + name + '\n🌐رابط الملف الشخصي: ' + urlUser + "\n";
          //console.log(msg);
        }

        api.sendMessage(`💢حذف الأصدقاء💢\n\n${msg}`, threadID, () =>
          api.unsendMessage(handleReply.messageID));
      }
      break;
  }
};


module.exports.run = async function ({ event, api, args }) {
  const { threadID, messageID, senderID } = event;
  //var unfriend =  await api.unfriend();
  try {
    var listFriend = [];
    var dataFriend = await api.getFriendsList();
    var countFr = dataFriend.length;

    for (var friends of dataFriend) {
      listFriend.push({
        name: friends.fullName || "Chưa đặt tên",
        uid: friends.userID,
        gender: friends.gender,
        vanity: friends.vanity,
        profileUrl: friends.profileUrl
      });
    }
    var nameUser = [], urlUser = [], uidUser = [];
    var page = 1;
    page = parseInt(args[0]) || 1;
    page < -1 ? page = 1 : "";
    var limit = 10;
    var msg = `🎭هناك ${countFr} اصدقاء للبوت🎭\n\n`;
    var numPage = Math.ceil(listFriend.length / limit);

    for (var i = limit * (page - 1); i < limit * (page - 1) + limit; i++) {
      if (i >= listFriend.length) break;
      let infoFriend = listFriend[i];
      msg += `${i + 1}. ${infoFriend.name}\n🙇‍♂️المعرف: ${infoFriend.uid}\n🧏‍♂️الجنس: ${infoFriend.gender}\n❄️المختصر: ${infoFriend.vanity}\n🌐رابط الملف الشخصي: ${infoFriend.profileUrl}\n\n`;
      nameUser.push(infoFriend.name);
      urlUser.push(infoFriend.profileUrl);
      uidUser.push(infoFriend.uid);
    }
    msg += `✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n--> الصفحة ${page}/${numPage} <--\nاستخدم رقم صفحة الصديق / الكل\n\n`;

    return api.sendMessage(msg + '🎭رقم الرد بالترتيب (من 1 إلى> 10) ، يمكنه تكرار أرقام متعددة ، مفصولة بعلامة الطريق لحذف هذا الصديق من القائمة!', event.threadID, (e, data) =>
      global.client.handleReply.push({
        name: this.config.name,
        author: event.senderID,
        messageID: data.messageID,
        nameUser,
        urlUser,
        uidUser,
        type: 'reply'
      })
    )
  }
  catch (e) {
    return console.log(e)
  }
}