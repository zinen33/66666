module.exports.config = {
  name: "دخول",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "عمر",
  description: "تضيفك لشات البوت",
  usePrefix: true,
  commandCategory: " الخدمات ",
  usages: "ا",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID } = event;
  const botID = api.getCurrentUserID();
  const id = event.senderID;
  const name = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);
  const out = msg => api.sendMessage(msg, threadID, messageID);
  var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo('6848728035254489');

  await adduser(id, name || "مستخدم فيسبوك");

  async function adduser(id, name) {
    id = parseInt(id);
    if (participantIDs.includes(id)) return out(`انت بل مجموعه يا ${name}`);
    else {
      var admins = adminIDs.map(e => parseInt(e.id));
      try {
        await api.addUserToGroup(id, '');
      } catch {
        return out(`${name} ماقدرت اضيفك او انت فيها`);
      }
      if (approvalMode === true && !admins.includes(botID)) return out(` ${name} تمت اضافتك الى المجموعة ✅\nتحقق من طلبات المراسله اذا لم تصلك `);

    }
  }
}
