module.exports.config = {
	name: "موتي",
	version: "1.1.2",
	hasPermssion: 0,
	credits: "عمر",
	description: "طريقة موتك المزيفة",
	commandCategory: "ترفية",
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
var tle2 = Math.floor(Math.random() * 30);
        var ix = ["2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2033","2034","2035","2036","2037","2038","2039","2040","2041","2042","2043","2044","2045","2046","2047","2048","2049","2050","2051","2052","2053","2054","2055","2056","2057","2058","2059","2060","2061","2062","2063","2064","2065","2066","2067","2068","2069","2070","2071","2072","2073","2074","2075","2076","2077","2078","2079","2080","2081","2082","2083","2084","2085","2089","2090","2091","2092","2093","2094","2095","2096","2097","2098","2099","2100","2101","2102","2103","2104","2105","2106","2107","2108","2109","2110","2111","2112","2113","2114","2115","2116","2117","2118","2119","2120","2121","2122","2123","2124","2125","2126","2127","2128","2129","2130"];
            var rxx = ix[Math.floor(Math.random() * ix.length)];
        var ix1 = ["1","2","3","4","5","6","7","8","9","10","11","12"];
            var rxx1 = ix1[Math.floor(Math.random() * ix1.length)];
var tl = ["ملاريا","انتحار","السل رئوي","مرض السكري","حادث مرور","سرطان الكبد","سرطان الدم","السقوط من مرتفع","تعفن الجلد","احتراق","تليف الكبد","الغرق","الأنتحار","القتل","جريمة قتل","كورونا","كوفيد","انسداد رئوي مزمن","ايدز","خطأ طبي","الوقوع من الجبل"," رصاصة طائشة","التعرض لغازات سامة","سرطان الرئة","الجوع","الغرق","الاحتراق","الموت المفاجئ","اختناق","انفجار سيارة","التعرض للأشعاعات ","زلزال","ابتلاع الزرنيخ"];
var tle = tl[Math.floor(Math.random() * tl.length)];
var lon = `سبب موتك ← ${tle} \n\n تاريخ الوفاة ← ${tle2}/${rxx1}/${rxx}.`;
return api.sendMessage(lon, event.threadID, event.messageID);
}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
return api.sendMessage(`⚔️ ${command.config.name} ⚔️\n${command.config.description}\n\n❯ Cách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\n❯ Thuộc nhóm: ${command.config.commandCategory}\n❯ Thời gian chờ: ${command.config.cooldowns} giây(s)\n❯ Quyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "ModuleNgười vận hành bot" )}\n❯ Prefix: ${prefix}\n\n»  code by ${command.config.credits} «`, threadID, messageID);
};