module.exports.config = {
	name: "لوخيروك",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "عمر",
	description: "شوتشوف",
	commandCategory: "خدمات",
	usages: "ا",
	cooldowns: 1,
};
module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	
	if (!event.body) return;

	const { threadID, messageID, body } = event;

	if (body.indexOf("askme") != 0) return;

	const splitBody = body.slice(body.indexOf("askme")).trim().split(/\s+/);


	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;

	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());

	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;

	return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};

module.exports.run = async function({ api, args, Users, event, Threads, utils, client }) {
const { commands } = global.client;
const { threadID, messageID } = event;
const command = commands.get((args[0] || "").toLowerCase());
const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
if (!command) {
const command = commands.values();
var tl = [ 

  "لو خيروك تكون عندك فلوس كثير وراسك حمار?",
  "لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين",  
   "لو خيروك بين فقدان ذاكرلو والعيش مع أصدقائك وأقربائك أو بقاء ذاكرلو ولكن العيش وحيد.", 
   "لو خيروك بين تناول الخضار والفاكهة طوال حيالو أو تناول اللحوم.",  
   " لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط.",  
   "               *لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف.", 
   "لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران.",  
   "لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل.",  
   "لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقية.",  
   " لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار.",  
   " لو خيروك بين الحقد أو المسامحة.",  
   " لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى.",  
   " لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي.",  
   " لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب.",  
   " لو خيروك بين أن تحصل على درجة كاملة في كامل اختبارالو القادمة والسابقة أو أن تسافر إلى بلد تحبه.",  
   "لو خيروك لتختار نوع طفلك القادم المفضل، ستختار ولد أم بنت، ماذا تختار؟",  
   " لو خيروك بين عمل براتب عالي ولكنك لا تحبه وبين عمل تحبه ولكن راتبه ضعيف، ماذا تختار؟",  
   " لو خيروك بين حلاقة شعرك زيروو أو عدم الحلاقة لمدة عام، ماذا تختار؟",  
   " لو خيروك بين عمل عمرة وزيارة الكعبة المشرفة، وبين زيارة سياحية في فرنسا وزيارة برج إيفل، ماذا تختار؟",  
   " لو خيروك بين أن تنافق شخص لا تحبه لكي تحصل على فرصة عمل، أو لا تحصل عليها بلا نفاق، ماذا تختار؟",  
   " لو خيروك بين زوج أو زوجة تحبك كثيراً ولكنها قاسية وعصبية، وبين زوج أو زوجة تحبك قليلاً ولكنها طيبة وحنونة، ماذا تختار؟",  
   " لو خيروك بين زيادة وزنك وطولك بـ( 5كجم) و(5سم)، وبين نقصان طولك ووزنك بنفس القيمة، ماذا تختار؟", 
   "لو خيروك بين تناول اللحم أو الدجاج مدى الحياة ماذا تختار؟",  
   "لو خيروك بين تناول الخضروات أو الفواكه مدى الحياة ماذا تختار؟",  
   "لو خيروك بين العيش في نيويورك أو في لندن أيهما تختار؟",  
   "لو خيروك بين السفر إلى الهند أو إلى إيطاليا أيهما تختار؟",  
   "لو خيروك بين العودة إلى الماضي أو الذهاب إلى المستقبل أيهما تختار؟", 
   "لو خيروك ان تاكل خفافيش و صراصير مدي الحياه ولاكن تعيش في افخم انواع القصور او تاكل افخم انواع الاكل ولاكن تعيش في بيت مسكون بالجن؟" , 
   "لو خيروك بين الحب و المال ماذا تختار؟" , 
   "لو خيروك تغير اسمك ولا تبقي علي ما انت عليه؟" , 
   "لو خيروك ان تغير جنسيتك ام تبقي علي ما انت عليه؟" , 
   "لو خيروك الراب فقط في العالم ام الهيب هوب فقط في العالم ماذا تختار؟" , 
   "لو خيروك ان تدخل في فيلم ام مسلسل ماذا تختار؟ " , 
   "لو خيروك ان لوفي يموت ام زورو يموت ماذا تختار؟" , 
   "لو خيروك ان يصبح اليوم ٧٢ ساعة ام يبقي على ما عليه؟" , 
   "لو خيروك السفر الي بلد أوروبية ام السفر الي بلد عربية ماذا تختار؟" , 
  " لو خيروك بين أمك وأبوك" , 
   "لو خيروك انت تموت ولا مراتك" , 
   "لو خيروك انك تشتري هديه لاحد افراض عائلتك فلمن تعطيها ؟" , 
   "لو خيروك بين شخص تحبه او شخص يحبك فمن تختار ؟" , 
   "لو خيروك تفقد سنانك الاماميه ولا تفقد ابن عمك ؟" , 
    " لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر."
  
      ];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = ` ${tle}`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\n❯ Prefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
};