module.exports.config = {
    name: "تفكيك",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عبدالرحمن",
    description: "لعبة تفكيك الكلمه ",
    usages: ["لعبة"],
    commandCategory: "العاب",
    cooldowns: 0
};

const questions = [




  { question: "بيت", answer: "ب ي ت" },
  { question: "رجل", answer: "ر ج ل" },
  { question: "امرأة", answer: "ا م ر أ ة" },
  { question: "ولد", answer: "و ل د" },
  { question: "فتاة", answer: "ف ت ا ة" },
  { question: "ماء", answer: "م ا ء" },
  { question: "نار", answer: "ن ا ر" },
  { question: "شمس", answer: "ش م س" },
  { question: "قمر", answer: "ق م ر" },
  { question: "ليل", answer: "ل ي ل" },
  { question: "نهار", answer: "ن ه ا ر" },
  { question: "جبل", answer: "ج ب ل" },
  { question: "سهل", answer: "س ه ل" },
  { question: "شجرة", answer: "ش ج ر ة" },
  { question: "زهرة", answer: "ز ه ر ة" },
  { question: "طير", answer: "ط ي ر" },
  { question: "أسد", answer: "أ س د" },
  { question: "ذئب", answer: "ذ ئ ب" },
  { question: "جمل", answer: "ج م ل" },
  { question: "بقر", answer: "ب ق ر" },
  { question: "غنم", answer: "غ ن م" },
  { question: "كتاب", answer: "ك ت ا ب" },
  { question: "قلم", answer: "ق ل م" },
  { question: "ورقة", answer: "و ر ق ة" },
  { question: "منزل", answer: "م ن ز ل" },
  { question: "مدرسة", answer: "م د ر س ة" },
  { question: "مستشفى", answer: "م س ت ش ف ى" },
  { question: "متجر", answer: "م ت ج ر" },
  { question: "مطعم", answer: "م ط ع م" },
  { question: "سيارة", answer: "س ي أ ر ة" },
  { question: "دراجة", answer: "د ر ا ج ة" },
  { question: "طائرة", answer: "ط ا ئ ر ة" },
  { question: "قطار", answer: "ق ط ا ر" },
  { question: "سفينة", answer: "س ف ي ن ة" },





];

module.exports.handleReply = async function ({ api, event, handleReply, Currencies }) {
    const userAnswer = event.body.trim().toLowerCase();
    const correctAnswer = handleReply.correctAnswer.toLowerCase();
    const userName = global.data.userName.get(event.senderID) || await Users.getNameUser(event.senderID);

    if (userAnswer === correctAnswer) {
        Currencies.increaseMoney(event.senderID, 50);
        api.sendMessage(`تهانينا ${userName} انت الاسرع وكسبت 50 دولار`, event.threadID);
        api.unsendMessage(handleReply.messageID); 
    } else {
        api.sendMessage(`خطأ حاول مره اخرا`, event.threadID);
    }
};

module.exports.run = async function ({ api, event, args }) {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const correctAnswer = randomQuestion.answer;
    const question = randomQuestion.question;

    const message = `اسرع شخص يفكك كلمه: ${question}`;

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
