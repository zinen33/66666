module.exports.config = {
  name: "مستذئب",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "عمر",
  description: "لعبه القروين والمستذئبين",
  commandCategory: "العاب",
  usages: "[ابدا/انضمام/قائمة/خروج/اختبار/انشاء]",
  cooldowns: 1
};

module.exports.handleEvent = async ({ event, api, Users }) => {
  const { senderID, threadID, body, messageID } = event;

  if (!global.moduleData.masoi) global.moduleData.masoi = new Map();
  if (!global.moduleData.masoi.has(threadID)) return;
  const values = global.moduleData.masoi.get(threadID);
  if (values.start != 1) return;

  if (body.indexOf("ذئب") == 0 || body.indexOf("Wolf") == 0) {
    if (values.sosoi > 0) return api.sendMessage("تم تحديد عدد الذئاب ، لا يمكنك الاختيار مرة أخرى", threadID);
    if (body.slice(-1) > 5 /*&& body.slice(-1) < 2*/) return api.sendMessage("لا يمكن أن يكون عدد الذئاب المختارة أقل من 2 وأكبر من 5!", threadID);
    if (values.sosoi == 0 && !isNaN(body.slice(-1))) {
      values.sosoi = (body.slice(-1));
      return api.sendMessage(`تم ضبط عدد الذئاب على: ${body.slice(-1)}`, threadID);
    }
  }

  if (body.indexOf("اجزاء") == 0 || body.indexOf("اجزاء") == 0 || body.indexOf("اجزاء العب") == 0) {
    var vaitro = [{
      id: 1,
      ten: "طبيب",
      gioithieu: "اختر لاعبًا لتغطيته كل ليلة ، فلن يُقتل ذلك اللاعب الا صوت الذئب.",
      Phe: "قروي"
    },
    {
      id: 2,
      ten: "رامي سهام",
      gioithieu: "لديك رصاصتان لإطلاق النار على أي شخص.  مسموح طلقة واحدة فقط في اليوم.  نظرًا لأن صوت البندقية مرتفع جدًا ، فسيكون كتفك مكشوفًا في الطلقة الأولى.",
      Phe: "قروي"
    },
    {
      id: 3,
      ten: "متنبئ",
      gioithieu: "كل ليلة يمكنك أن ترى دور لاعب آخر.",
      Phe: "قروي"
    },
    {
      id: 4,
      ten: "عراف",
      gioithieu: "يمكنك اختيار لاعب كل ليلة لتعرف ما إذا كان جيدًا أم شريرًا أم غير معروف.\n\nالشر هو جانب المستذئبين ، والخير هو فصيل القرويين.\n\nيمكن أن تكون الأهداف غير المعروفة: رامي سهام ، بربري ، صائد الوحوش ، زعيم المستذئبين ، بلهاء ، صيادين بشريين ، محارب أو قاتل.",
      Phe: "قروي"
    },
    {
      id: 5,
      ten: "المحقق",
      gioithieu: "في كل ليلة ، يمكنك اختيار لاعبين لمعرفة ما إذا كانا في نفس الجانب أو مختلفين.  تنقسم الفصائل إلى: قرويون ، ذئاب بربريه ، بلهاء ، صيادون بشريون ، قتلة .الخ",
      Phe: "قروي"
    },
    {
      id: 6,
      ten: "مستحضر",
      gioithieu: "في الليل يمكنك التحدث مع الموتى دون الكشف عن هويتك.  لديك محاوله واحده لإحياء شخص آخر.",
      Phe: "قروي"
    },
    {
      id: 7,
      ten: "المنتقم",
      gioithieu: "يمكنك اختيار لاعب واحد للقتل عندما تموت.",
      Phe: "قروي"
    },
    {
      id: 8,
      ten: "صائد الوحوش",
      gioithieu: "في الليل ، يمكنك وضع مصيدة للاعب ، والتي سيتم تنشيطها في الليلة التالية.  لا يمكن قتل هذا اللاعب في الليل.  إذا تعرض هذا اللاعب للهجوم من قبل المستذئبين ، سيموت أضعف المستذئبين في المجموعة.  لا يمكن للفصيل القاتل المنفرد أن يقتل بالفخ ، وبدلاً من ذلك سيفقد الفخ بعد مهاجمته من قبلهم.",
      Phe: "قروي"
    },
    {
      id: 9,
      ten: "خاين",
      gioithieu: "أنت مواطن عادي حتى يسيطر عليك المستذئبين ، ثم تصبح مستذئب.",
      Phe: "مستذئب او قروي"
    },
    {
      id: 10,
      ten: "منتقم",
      gioithieu: "أنت شبل ذئب سهل ، يمكنك اختيار لاعب آخر ليموت معك عندما تموت.",
      Phe: "مستذئب"
    },
    {
      id: 11,
      ten: "مستذئب عادي",
      gioithieu: ": أنت مستذئب عادي.  بالإضافة إلى حقيقة أن لديك ضعف قوة المستذئبين  الاخرين (X2 صوّتوا).",
      Phe: "مستذئب"
    },
    {
      id: 12,
      ten: "المستذئب العراف",
      gioithieu: "كل يوم ، يمكنك اختيار شخص لترى دوره.  إذا كنت آخر مستذئب ، فسوف تصبح مستذئب العادي.",
      Phe: "مستذئب"
    },
    {
      id: 13,
      ten: "مخادع",
      gioithieu: "عليك أن تخدع القرويين لتشنقك.  إذا شنقوك ، فستفوز.",
      Phe: "منفرد"
    },
    {
      id: 14,
      ten: "قاتل",
      gioithieu: "كل ليلة يمكنك أن تتنكر على لاعب.  سيتم تحويل هذا اللاعب إلى قاتل من قبل ذئب الخائن.  يمكنك قتل جميع اللاعبين المتأثرين بالوهم أثناء مرحلة المناقشة.  لا يمكن أن تقتل من قبل ذئاب ضارية\n تربح إذا  بقيت على قيد الحياه بدون كشفك يجب ان تخادع لتبعد الشبهات.",
      Phe: "منفرد"
    }];
    if (values.sosoi == 0) return api.sendMessage("لم تقم بتعيين عدد المستذئبين للغرفة", event.messageID, event.threadID);
    if (values.phanvai == 1) return api.sendMessage("تم الوصول الى اعلى عدد مستذئبين في هذه الغرفة   ", event.messageID, event.threadID);
    var allPlayer = values.player.length;
    var masoi = ['soidaudan', 'soitientri', 'soitre', 'bansoi'];
    var soi = masoi.length;
    var danlang = ['tientri', 'thaydong', 'thosanquaithu', 'kebaothu', 'thamtu', 'thayboi', 'bacsi', 'xathu'];
    var dan = danlang.length;
    var solo = ['thangngo', 'satnhan'];
    var sl = solo.length;
    var randomed = [];
    for (var randomSoi = 0; randomSoi < values.sosoi.length; randomSoi++) {
      values.player = values.player.filter(sosoi => sosoi != randomed)
      for (var userID of values.player) {
        console.log(userID.id);
          var id = userID.id;
          var index = values.player.find(item => item.id = id);
          console.log(index);
          console.log(id);
          var randomed = values.player.filter(UID => UID.id == userID)
          var randomToUser = masoi[Math.floor(Math.random() * masoi.length)];
          masoi = masoi.filter(soidaco => soidaco != randomToUser);
          values.player[index].vai = randomToUser;
          values.player[index].phe = "مستذئب";
          //api.sendMessage(`Vai trò của bạn lần này là: ${randomToUser}\n\nGiới Thiệu: ${randomToUser}\n\nBạn thuộc phe: ${randomToUser}\n\nPhần này đang test nên bỏ qua đi há`, values.player[userID].id);
          api.sendMessage(`55.\n\nدور: ${randomToUser}`, values.player[userID].id);
      }
    }
      for (var randomDan = 0; randomDan < values.player.length; dan++) {
        values.player = values.player.filter(sodan => sodan != randomed)
        for (var userID of values.player) {
            var id = userID.id;
            var index = values.player.find(item => item.id = id);
            console.log(index);
            var randomed = values.player.filter(UID => UID.id == userID)
            var randomToUser = danlang[Math.floor(Math.random() * danlang.length)];
            danlang = danlang.filter(dandaco => dandaco != randomToUser);
            values.player[id].vai = randomToUser;
            values.player[id].phe = "قروي";
            //api.sendMessage(`Vai trò của bạn lần này là: ${randomToUser}\n\nGiới Thiệu: ${randomToUser}\n\nBạn thuộc phe: ${randomToUser}\n\nPhần này đang test nên bỏ qua đi há`, values.player[userID].id);
            api.sendMessage(`اختبر هذا الجزء ، إنه لذيذ.\n\nدور: ${randomToUser}`, values.player[userID].id);
        }
      }
    if (randomed.length == allPlayer) api.sendMessage("تم تخصيص أكتاف مستديرة ، تبدأ الليلة الأولى.  يمكن أن يناقش المستذئبون في منازلهم.  الوقت دقيقة واحدة.", event.threadID);
    values.phanvai = 1;
    global.moduleData.masoi.set(threadID, values);
  }
}



module.exports.run = async ({ api, event, args }) => {
  const { senderID, threadID, messageID } = event;
  const crt = ['soidaudan', 'soitientri', 'soitre', 'tientri', 'thaydong', 'thangngo', 'satnhan', 'bansoi', 'thosanquaithu', 'kebaothu', 'thamtu', 'thayboi', 'bacsi', 'xathu'];

  if (!global.moduleData.masoi) global.moduleData.masoi = new Map();
  var values = global.moduleData.masoi.get(threadID) || {};

  if (args[0] == "create" || args[0] == "انشاء" || args[0] == "tạo" || args[0] == "أنشاء") {
    let nhanh1 = parseInt('2392402354140014');
    let nhanh2 = parseInt('4115747231847743');
    let nhanh3 = parseInt('6130616870282577');
    let nhanh4 = parseInt('3402498063192680');
    let nhanh5 = parseInt('5930840416989874');
    let IDthread = (event.threadID);
    if (IDthread == nhanh1 || IDthread == nhanh2 || IDthread == nhanh3 || IDthread == nhanh4 || IDthread == nhanh5) {
      return api.sendMessage('لا يُسمح لك بلعب روم في المربع الرئيسي ، اتصل بالقائد أو المخضرم للدخول إلى مربع المقامرة', event.threadID, event.messageID);
    } else
      if (global.moduleData.masoi.has(threadID)) return api.sendMessage("-المجموعة لديها غرفة للعب المستذئبين!", threadID, messageID);
    global.moduleData.masoi.set(event.threadID, {
      "author": event.senderID,
      "start": 0,
      "ready": 0,
      "phanvai": 0,
      "sosoi": 0,
      player: [{
        "id": senderID,
        "vai": "",
        "phe": "",
        "ready": false
      }]
    });
    console.log(values)
    return api.sendMessage("-تم انشاء غرفة للعب بنجاح ! \n أرسل .مستذئب انضمام للانضمام", threadID, messageID);
  }

  else if (args[0] == "join" || args[0] == "انضمام") {
    if (!values) return api.sendMessage("-لا توجد حاليًا غرف مستذئبين متاحة ، يمكنك إنشاؤها باستخدام . مستذئب انشاء", threadID, messageID);
    if (values.start == 1) return api.sendMessage("- تم انشاء غرفة مسبقاً , انتظر حتى تنتهي اللعبة وانضم", threadID, messageID);
    if (values.player.find(item => item.id == senderID)) return api.sendMessage("-لقد انضممت بالفعل إلى غرفة المستذئبين هذه!", threadID, messageID);
    values.player.push({
      "id": senderID,
      "vai": 0,
      "phe": 0,
      "ready": false
    });
    global.moduleData.masoi.set(threadID, values);
    console.log(values)
    return api.sendMessage("-قد انضممت بنجاح !", threadID, messageID);
  }

  else if (args[0] == "القائمة") {
    if (typeof values.player == "undefined") return api.sendMessage("-لا توجد حاليًا غرف مستذئبين متاحة ، يمكنك إنشاؤها باستخدام ,مستذئب انشاء", threadID, messageID);
    return api.sendMessage(
      "=== قائمة غرف لعبة المستذئبين ===" +
      "\nالمنشئ: " + values.author +
      "\nإجمالي عدد اللاعبين: " + values.player.length + " البني ادم"
      , threadID, messageID);
  }

  else if (args[0] == "خروج") {
    if (typeof values.player == "undefined") return api.sendMessage("لا توجد حاليًا غرف للعبة المستذئبين متاحة ، يمكنك انشاء واحدة باستخدام انشاء .مستذئب", threadID, messageID);
    if (!values.player.some(item => item.id == senderID)) return api.sendMessage("لم تنضم إلى غرفة مستذئبين في هذه المجموعة!", threadID, messageID);
    if (values.author == senderID) {
      global.moduleData.masoi.delete(threadID);
      api.sendMessage("ترك صاحب الغرفة الغرفة ، مما يعني أنه سيتم تفكيك الغرفة!", threadID, messageID);
    }
    else {
      values.player.splice(values.player.findIndex(item => item.id === senderID), 1);
      api.sendMessage("لقد غادرت غرفة المستذئبين هذه!  ", threadID, messageID);
      global.moduleData.masoi.set(threadID, values);
    }
    return;
  }

  else if (args[0] == "ابدا" && values.author == senderID) {
    if (!values) return api.sendMessage("لا توجد حاليًا غرف مستذئبين متاحة ، يمكنك انشاء  باستخدام انشاء .مستذئب", threadID, messageID);
    if (values.player.length <= 1) return api.sendMessage("لا يوجد حاليًا أي لاعبين في غرفتك ، يمكنك دعوة هذا الشخص للانضمام عن طريق مطالبة لاعب بالدخول .مستذئب انضمام", threadID, messageID);
    if (values.start == 1) return api.sendMessage("الغرفة تبدأ الآن من قبل المالك", threadID, messageID);
    values.start = 1;
    return api.sendMessage("بدأت غرفة المستذئبين الخاصة بك  ", threadID, messageID);
  }

  else if (args[0] == "اختبار" && values.author == senderID) {
    if (!values) return api.sendMessage("لا توجد حاليًا غرف مستذئبين متاحة ، يمكنك إنشاؤها باستخدام .مستذئب انشاء", threadID, messageID);
    if (!values.player.some(item => item.id == event.senderID)) return api.sendMessage("لم تنضم إلى غرفة مستذئبين في هذه المجموعة!", threadID, messageID);
    if (values.player.length <= 1) return api.sendMessage("لا يوجد حاليًا أي لاعبين في غرفتك ، يمكنك دعوة هذا الشخص للانضمام عن طريق مطالبة لاعب  بالدخول. .مستذئب انضمام", threadID, messageID);
    values.player.forEach(info => { return api.sendMessage("هل رأيت هذه الرسالة؟", info.id) });
    return api.sendMessage("هل رأيت رسالة الروبوت المرسلة لك؟  إذا لم يكن كذلك ، يرجى التحقق من الرسائل المنتظرة أو ططلبات المراسلة!", threadID, messageID);
  }

  else return global.utils.throwError(this.config.name, threadID, messageID);
}