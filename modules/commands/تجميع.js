module.exports.config = {
    name: "تجميع",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عبدالرحمن",
    description: "لعبة تجميع الكلمه ",
    usages: ["لعبة"],
    commandCategory: "العاب",
    cooldowns: 0
};

const questions = [



   { question: "ا ل ظ ل ا م", answer: "الظلام" },
  { question: "ا ل س ع ا د ة", answer: "السعادة" },
  { question: "ا ل ث ر و ة", answer: "الثروة" },
  { question: "ا ل ح ر ا ر ة", answer: "الحرارة" },
  { question: "ا ل ر ط و ب ة", answer: "الرطوبة" },
  { question: " ا ل ض و ض ا ء", answer: "الضوضاء" },
  { question: "ا ل م و ت", answer: "الموت" },
  { question: "ا ل ن ه ا ي ة", answer: "النهاية" },
  { question: "ا ل أ د ن ى", answer: "الأدنى" },
  { question: "ا ل خ ا ر ج", answer: "الخارج" },
  { question: "ا ل خ ل ف", answer: "الخلف" },
  { question: "ا ل ي س ا ر", answer: "اليسار" },
  { question: "ا ل ب ع ي د", answer: "البعيد" },
  { question: "ا ل ص ع ب", answer: "الصعب" },
  { question: "ا ل ق ا س ي", answer: "القاسي" },
  { question: "ا ل ح ز ن", answer: "الحزن" },
  { question: "ا ل ك ر ا ه ي ة", answer: "الكراهية" },
  { question: "ا ل ع ص ب ي ة", answer: "العصبية" },
  { question: "ا ل ح ق ي ق ة", answer: "الحقيقة" },
  { question: "ا ل م ا ض ي", answer: "الماضي" },
  { question: "ا ل ح ا ض ر", answer: "الحاضر" },
  { question: "ا ل م ز ي ف", answer: "المزيف" },
  { question: "ا ل خ ط أ", answer: "الخطأ" },
  { question: "ا ل س ي ئ", answer: "السيئ" },
  { question: "ا ل ق ب ي ح", answer: "القبيح" },
  { question: "ا ل ف ق ي ر", answer: "الفقير" },
  { question: "ا ل ض ع ي ف", answer: "الضعيف" },
  { question: "ا ل خ ا ئ ن", answer: "الخائن" },
  { question: "س ي س ت ا  ع م ت ك", answer: "سيستا عمتك" },
  { question: "ا ل أ ن ث ى", answer: "الأنثى" },
  { question: "ا ل ا ن ا ث", answer: "الاناث" },
  { question: "ا ل ج م ي ع", answer: "الجمع" },
  { question: "ا ل م ؤ ن ث", answer: "المؤنث" },
  { question: "ا ل س ل ب ي", answer: "السلبي" },
  { question: "ا ل م ل ل", answer: "الملل" },
  { question: "ا ك ر ه ك", answer: "اكرهك" },
  { question: "ت ح ب ن ي", answer: "تحبني" },
  { question: "ا ن ف ص ل", answer: "انفص" },
  { question: "ل ا", answer: "لا" },
  { question: "ا ل ك ب ر ى", answer: "الكبرى" },
  { question: "ا ل ك ث ر ة", answer: "الكثرة" },
  { question: "ا ل ص ع و ب ة", answer: "الصعوبة" },
  { question: "ا ل ق س و ة", answer: "القسوة" },
  { question: "ا ن ت ر خ ت و س", answer: "انترختوس" },
  { question: "ا ل ا ي م ا ن", answer: "الايمان" },
  { question: "ا ل ي أ س", answer: "اليأس" },
  { question: "ا ل م و ت", answer: "الموت" },
  { question: "ا ل غ ي ب و ب ة", answer: "الغيبوبة" },
  { question: "ا ل ن و م", answer: "النوم" },
  { question: "ا ل ك ذ ب", answer: "الكذب" },
  { question: "ا ل ظ ل م", answer: "الظلم" },
  { question: "ا ل ش ر", answer: "الشر" },
  { question: "ا ل ق ب ح", answer: "القبح" },
  { question: "ا ل ن ق ص", answer: "النقص" },
  { question: "ا ل ح ز ن", answer: "الحزن" },




];

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 20);
        api.sendMessage(`تهانينا ${userName} إجابتك صحيحة، لقد حصلت على 20  دولار`, event.threadID);
        api.unsendMessage(handleReply.messageID); 
    } else {
        api.sendMessage(`خطأ حاول مره اخرا`, event.threadID);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;
    const question = randomQuestion.question;

    const message = `اسرع شخص يجمع كلمة :${question}`;

    api.sendMessage({ body: message }, event.threadID, (error, info) => {
        if (!error) {
            global.client.handleReply.push({
                name: this.config.name,
                messageID: info.messageID,
                correctAnswer: correctAnswer
            });
        }
    });
};
