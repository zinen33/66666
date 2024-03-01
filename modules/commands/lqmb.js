module.exports.config = {
	name: "تاريخ",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "عمر",
	description: "استكشف بنفسك",
	commandCategory: "العاب",
    cooldowns: 20000000,
    envConfig: {
        cooldownTime: 200000000
    }
};

module.exports.languages = {
    "vi": {
        "cooldown": "⚡Bạn vừa kiếm tiền xong nghỉ ngơi xíu đi nhé: %1 phút %2 giây sau quay lại nhe...!"      
    },
    "en": {
        "cooldown": "⚡️لقد انتهيت ، عد لاحقًا : %1 دقيقة و %2 ثانية ."
    }
}
module.exports.handleReply = async ({ event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    let data = (await Currencies.getData(senderID)).data || {};

var coinscn = Math.floor(Math.random() * 5020) + 2080;
var coinsdv = Math.floor(Math.random() * 5300) + 2080;
var coinsmd = Math.floor(Math.random() * 5000) + 2980;
var coinsq = Math.floor(Math.random() * 5000) + 2080;
var coinsdd = Math.floor(Math.random() * 5000) + 2080; 
var coinsdd1 = Math.floor(Math.random() * 5000) + 2080;

var rdcn = ['Nakroth giết được Florentino nhận được', 'Zuka giết được 5 thằng megakill nhận được', 'Florentino đi cướp rừng giết được Triệu vân nhận được', 'Toro đi rừng giết được 5 thằng megakill nhận được', 'Tulen đi sp giết được Laville nhận được', 'Florentino quét sạch team địch megakill nhận được','Florentino giết được Florentino nhận được', 'Lữ bố giết được Florentino nhận được', 'Superman đi rừng giết được Ryoma nhận được', 'Lữ bố giết triệu vân và nhận được', 'Zephys cướp ناكروث الذي قتل فلورنتينو حصل عل blu nhận được', 'Ormarr đi mid giết được Tulen nhận được', 'Zuka đi sp giết được Aya nhận được', 'Ryoma giết được 3 thằng nhận được', 'Yena đi mid giết được Zata nhận được',' Maloch đi rừng giết được 5 thằng megakill nhận được', 'Arthur đi top giết được Florentino nhận được', 'Skud đi cướp red nhận được', 'Arduin đi mid giết được Natalya nhận được', 'Astrid giết được 2 thằng Double kill nhận được', 'Superman đi mid giết được Natalya và Ryoma, Double kill nhận được', 'Wonder Woman đi top giết được Florentino, Chiến công đầu nhận được', 'Kil"groth đi sp giết được Violet và Toro, Double kill nhận được', 'Omen đi rừng giết được 5 thằng Megakill nhận được', 'Max bay vào trụ cân 4 thằng Quadra Kill nhận được', 'Rourke đi ad giết được 3 thằng Triple Kill nhận được', 'Roxie đi mid giết được Zata nhận được', 'Amily đi cướp rừng cân luôn 3 thằng Triple Kill nhận được', 'Richter đi sp giết được 5 thằng Megakill nhận được', 'Veres đi mid cân 3 Triple Kill nhận được', ' Errol đi ad giết được Zuka nhận được', 'Qi đi rừng cân 5 thằng Megakill nhận được', 'Volkath lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Ata đi sp giết được 5 thằng Megakill nhận được', 'Allain đi sp giết được 2 thằng Double kill nhận được', 'Veera núp bụi combo giết được Florentino Nhận được', ' Krixi giết được Natalya nhận được', 'Mganga bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Kahlii giết được Florentino & Zuka  Double kill nhận được', 'Điêu Thuyền núp bụi cướp rừng team địch nhận được', 'Azzen’Ka giết được 4 thằng Quadra Kill nhận được', 'Aleister một combo giết được Florentino nhận được', 'Natalya combo giết được 3 thằng Triple Kill nhận được', 'Jinna giết được Tulen chiến công đầu nhận được', 'Llumia bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Preyta giết được Laville nhận được', 'Raz một đá lụm 3 thằng Triple Kill nhận được', 'Lauriel múa quá đỉnh giết được 5 thằng Megakill nhận được', 'Lgnis giết được Zata nhận được', 'Zill đi support giết được Violet & Toro Double Kill nhận được', 'Tulen đi rừng cân 5 thằng Megakill nhận được', 'Liliana đi rừng cân 5 thằng Megakill nhận được', 'The Flash đi support giết được Violet nhận được', 'Marja đi rừng cân 5 thằng Megakill nhận được', 'D’arcy  đi top giết được Ryoma nhận được', 'Lshar đi rừng giết được 3 thằng Triple Kill nhận được', 'Dirak đi rừng bị cướp blue, Giết được Zuka nhận được', 'Zata bay vào trụ cân 4 thằng Quadra Kill nhận được ', 'Butterfly đi top giết được Florentino nhận được', 'Nakroth đi support giết được Tulen nhận được', 'Ngộ Không đi mid giết được Zata nhận được', 'Kriknak đi rừng bị Nakrokth cướp rừng & giết ngược lại Nakrokth nhận được', 'Batman đi ad giết được support Toro nhận được', 'Airi đi rừng cân 5 thằng Megakill nhận được', 'Murad đi rừng cân 4 thằng Quadra Kill nhận được', 'Quillen đi support cân 2 thằng Double Kill nhận được', 'Enzo đi mid giết được Florentino nhận được', 'Keera đi ad giết được Violet chiến công đầu nhận được', 'Paine đi mid giết được 4 thằng Quadra Kill nhận được', 'Valhein đi mid lên phép bật chiêu cuối cân 5 thằng Megakill nhận được', 'Violet  đi top 1 bắn chết 3 thằng Triple Kill nhận được', 'Yorn đi rừng cân luôn 3 thằng Triple Kill nhận được', 'Fennik đi mid lên full phép giết được 4 thằng Quadra Kill nhận được', 'Slimz đi support giết được Zata & Florentino nhận được', 'Joker đi rừng giết được blue nhận được', 'Tel’Annas đi mid lên full phép giết được Natalya nhận được', 'Moren đi rừng giết được rồng & cân luôn 5 thằng Megakill nhận được', 'Lindis  cướp được rồng & giết luôn 3 thằng Triple Kill nhận được', 'Wisp đi mid lên full phép lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Elsu đi rừng cân luôn 5 thằng Megakill nhận được', 'Hayate đi cướp red nhận được', 'Capheny đi ad giết được 3 thằng Triple Kill nhận được', 'Celica đi support lên tack giết được Ngộ Không nhận được', 'Eland’orr đi rừng lên full phép giết được Florentino chiến công đầu nhận được', 'Laville đi mid lên full phép bắn bể trụ nhận được', 'Thornè đi rừng giết được Zuka & Laville nhận được', 'Chaugnar đi rừng cân 4 thằng Quadra Kill nhận được', 'Alice đi top giết được 5 thằng Megakill nhận được', 'Payna đi mid lên full phép giết được 3 thằng Triple Kill nhận được', 'Xeniel đi support giết được 4 thằng Quadra Kill nhận được', 'TeeMee đi top lên full dame giết được Florentino nhận được', 'Annette lên full dame đi cướp rừng giết được Enzo nhận được', 'Sephera đi mid  giết được 3 thằng Triple Kill nhận được', 'Zip support cho Nakrokth cướp rừng nhận được', 'Krizzx giúp cả team tàn hình đánh úp team địch nhận được', 'Rouie bật chiêu cuối cùng team cướp rồng nhận được', 'Aya leo đầu Florentino cân 5 thằng nhận được'];//Random all
var work1 = rdcn[Math.floor(Math.random() * rdcn.length)];   

var rddv = ['Florentino giết được Florentino nhận được', 'Lữ bố giết được Florentino nhận được', 'Superman đi rừng giết được Ryoma nhận được', 'Lữ bố giết triệu vân và nhận được', 'Zephys cướp được blu nhận được', 'Ormarr đi mid giết được Tulen nhận được', 'Zuka đi sp giết được Aya nhận được', 'Ryoma giết được 3 thằng nhận được', 'Yena đi mid giết được Zata nhận được',' Maloch đi rừng giết được 5 thằng megakill nhận được', 'Arthur đi top giết được Florentino nhận được', 'Skud đi cướp red nhận được', 'Arduin đi mid giết được Natalya nhận được', 'Astrid giết được 2 thằng Double kill nhận được', 'Superman đi mid giết được Natalya và Ryoma, Double kill nhận được', 'Wonder Woman đi top giết được Florentino, Chiến công đầu nhận được', 'Kil"groth đi sp giết được Violet và Toro, Double kill nhận được', 'Omen đi rừng giết được 5 thằng Megakill nhận được', 'Max bay vào trụ cân 4 thằng Quadra Kill nhận được', 'Rourke đi ad giết được 3 thằng Triple Kill nhận được', 'Roxie đi mid giết được Zata nhận được', 'Amily đi cướp rừng cân luôn 3 thằng Triple Kill nhận được', 'Richter đi sp giết được 5 thằng Megakill nhận được', 'Veres đi mid cân 3 Triple Kill nhận được', ' Errol đi ad giết được Zuka nhận được', 'Qi đi rừng cân 5 thằng Megakill nhận được', 'Volkath lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Ata đi sp giết được 5 thằng Megakill nhận được', 'Allain đi sp giết được 2 thằng Double kill nhận được'];//Random đấu sĩ
var work2 = rddv[Math.floor(Math.random() * rddv.length)]; 

var rdmd = ['Veera núp bụi combo giết được Florentino Nhận được', ' قتل كرس ناتاليا تلقى ', 'Mganga bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Kahlii giết được Florentino & Zuka  Double kill nhận được', 'Điêu Thuyền núp bụi cướp rừng team địch nhận được', 'Azzen’Ka giết được 4 thằng Quadra Kill nhận được', 'Aleister một combo giết được Florentino nhận được', 'Natalya combo giết được 3 thằng Triple Kill nhận được', 'Jinna giết được Tulen chiến công đầu nhận được', 'Llumia bật chiêu cuối giết được 5 thằng Megakill nhận được', 'Preyta giết được Laville nhận được', 'Raz một đá lụm 3 thằng Triple Kill nhận được', 'Lauriel múa quá đỉnh giết được 5 thằng Megakill nhận được', 'Lgnis giết được Zata nhận được', 'Zill đi support giết được Violet & Toro Double Kill nhận được', 'Tulen đi rừng cân 5 thằng Megakill nhận được', 'Liliana đi rừng cân 5 thằng Megakill nhận được', 'The Flash đi support giết được Violet nhận được', 'Marja đi rừng cân 5 thằng Megakill nhận được', 'D’arcy  đi top giết được Ryoma nhận được', 'Lshar đi rừng giết được 3 thằng Triple Kill nhận được', 'Dirak đi rừng bị cướp blue, Giết được Zuka nhận được', 'Zata bay vào trụ cân 4 thằng Quadra Kill nhận được']; //Ramdom pháp sư
var work3 = rdmd[Math.floor(Math.random() * rdmd.length)]; 

var rdq = ['Butterfly đi top giết được Florentino nhận được', 'Nakroth đi support giết được Tulen nhận được', 'Ngộ Không đi mid giết được Zata nhận được', 'Kriknak đi rừng bị Nakrokth cướp rừng & giết ngược lại Nakrokth nhận được', 'Batman đi ad giết được support Toro nhận được', 'Airi đi rừng cân 5 thằng Megakill nhận được', 'Murad đi rừng cân 4 thằng Quadra Kill nhận được', 'Quillen đi support cân 2 thằng Double Kill nhận được', 'Enzo đi mid giết được Florentino nhận được', 'Keera đi ad giết được Violet chiến công đầu nhận được', 'Paine đi mid giết được 4 thằng Quadra Kill nhận được']; //Random sát thủ
var work4 = rdq[Math.floor(Math.random() * rdq.length)]; 

var rddd = ['Valhein đi mid lên phép bật chiêu cuối cân 5 thằng Megakill nhận được', 'Violet  đi top 1 bắn chết 3 thằng Triple Kill nhận được', 'Yorn đi rừng cân luôn 3 thằng Triple Kill nhận được', 'Fennik đi mid lên full phép giết được 4 thằng Quadra Kill nhận được', 'Slimz đi support giết được Zata & Florentino nhận được', 'Joker đi rừng giết được blue nhận được', 'Tel’Annas đi mid lên full phép giết được Natalya nhận được', 'Moren đi rừng giết được rồng & cân luôn 5 thằng Megakill nhận được', 'Lindis  cướp được rồng & giết luôn 3 thằng Triple Kill nhận được', 'Wisp đi mid lên full phép lao vào trụ lụm 4 thằng Quadra Kill nhận được', 'Elsu đi rừng cân luôn 5 thằng Megakill nhận được', 'Hayate đi cướp red nhận được', 'Capheny đi ad giết được 3 thằng Triple Kill nhận được', 'Celica đi support lên tack giết được Ngộ Không nhận được', 'Eland’orr đi rừng lên full phép giết được Florentino chiến công đầu nhận được', 'Laville đi mid lên full phép bắn bể trụ nhận được', 'Thornè đi rừng giết được Zuka & Laville nhận được'];//Random xạ thủ
var work5 = rddd[Math.floor(Math.random() * rddd.length)]; 

var rddd1 = ['Chaugnar đi rừng cân 4 thằng Quadra Kill nhận được', 'Alice đi top giết được 5 thằng Megakill nhận được', 'Payna đi mid lên full phép giết được 3 thằng Triple Kill nhận được', 'Xeniel đi support giết được 4 thằng Quadra Kill nhận được', 'TeeMee đi top lên full dame giết được Florentino nhận được', 'Annette lên full dame đi cướp rừng giết được Enzo nhận được', 'Sephera đi mid  giết được 3 thằng Triple Kill nhận được', 'Zip support cho Nakrokth cướp rừng nhận được', 'Krizzx giúp cả team tàn hình đánh úp team địch nhận được', 'Rouie bật chiêu cuối cùng team cướp rồng nhận được', 'Aya leo đầu Florentino cân 5 thằng nhận được'];//Random trợ thủ
var work6 = rddd1[Math.floor(Math.random() * rddd1.length)];

var msg = "";
    switch(handleReply.type) {
        case "choosee": {
            
            switch(event.body) {
                case "1": msg = `⚔️ لقد قتلت البطل للتو و فزت ب${work1}: ${coinscn} دولار` ; Currencies.increaseMoney(event.senderID, coinscn); break;             
                case "2": msg = `⚔️ لقد أمسكت للتو المصارع ${work2}: ${coinsdv} دولار`; Currencies.increaseMoney(event.senderID, coinsdv); break;
                case "3": msg = `⚔️ Bạn vừa cầm pháp sư ${work3}: ${coinsmd} دولار`; Currencies.increaseMoney(event.senderID, coinsmd); break;
                case "4": msg = `⚔️ لقد اخترت للتو ان تكون صائد جوائز  ${work4}:  ${coinsq} دولار`; Currencies.increaseMoney(event.senderID, coinsq); break;
                case "5": msg = `⚔️ لقد اخترت  ان تكون رامي السهام ${work5}: ${coinsdd} دولار` ; Currencies.increaseMoney(event.senderID, coinsdd); break;
                case "6": msg = `⚔️ لقد اخترت للتو المساعد ${work6}: ${coinsdd1} دولار`; Currencies.increaseMoney(event.senderID, coinsdd1); break;
          
                default: break;
            };
            const choose = parseInt(event.body);
            if (isNaN(event.body)) return api.sendMessage("⚡️رد ع الرسالة برقم ", event.threadID, event.messageID);
            if (choose > 6 || choose < 1) return api.sendMessage("⚡️الأختيار ليس في القائمة.", event.threadID, event.messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "⚡️غير محدث...") {
                msg = "⚡️التحديث قريبا...";
            };
            return api.sendMessage(`${msg}`, threadID, async () => {
            data.work2Time = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}
module.exports.run = async ({  event, api, handleReply, Currencies, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    let data = (await Currencies.getData(senderID)).data || {};
    
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.work2Time) > 0) {

        var time = cooldown - (Date.now() - data.work2Time),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 2000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), event.threadID, event.messageID);
    }
    else {    
    return api.sendMessage("الفوز بالمال مع لعبة الحرب" 
         +
                "\n\n1 ≻ ⚔️ كل الابطال"   +
                "\n2 ≻ ⚔️ المصارع" 
         +
                "\n3 ≻ ⚔️ ساحر"
         +
                "\n4 ≻ ⚔️ صائد جوائز"
         +
                "\n5 ≻ ⚔️ رامي السهام"
         +
                "\n6 ≻ ⚔️ المساعد"
         +
                "\n\n📌 رد ع الرسالة برقم المقاتل والعب دوره ...!"
            , event.threadID, (error, info) => {
                data.work2Time = Date.now();
        global.client.handleReply.push({
            type: "choosee",
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        })
    }
}//Trankhuong dz