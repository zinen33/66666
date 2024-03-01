module.exports.config = {
    name: "مراهنة2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "عمر",
    description: "لعبة سلوت لكن اقل مبلغ للرهان 10000",
    commandCategory: "العاب",
    usages: "[نص]",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args, Currencies }) {
            let { threadID, messageID, senderID } = event;
            const cointt = `10000$`;
            const slotItems = ["🚀","⏳","👓","🔦","💡","🕯️","🥽","🎲","🔥","🔔","🏺","🍆","🐣"];
			let money = (await Currencies.getData(event.senderID)).money;
			var coin = args.join(" ");
	
			if (!coin) return api.sendMessage(`لازم تحط مبلغ للرهان!`, threadID, messageID);
			let win = false;
			if (isNaN(coin)|| coin.indexOf("-") !== -1) return api.sendMessage(`لم يتم ادخال مبلغ الرهان بشكل صحيح !`, threadID, messageID);
			if (!coin) return api.sendMessage("لم يتم ادخال مبلغ الرهان!", threadID, messageID);
			if (coin > money) return api.sendMessage(`مبلغ الرهان اقل من 10000$ !`, threadID, messageID);
			if (coin < 10000) return api.sendMessage(`مبلغ الرهان قليل , اقل مبلغ للعب هوة : ${cointt}!`, threadID, messageID);
			let number = [];
			for (i = 0; i < 3; i++) number[i] = Math.floor(Math.random() * slotItems.length);
			if (number[0] == number[1] && number[1] == number[2]) {
				money *= 9;
				win = true;
			}
				else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) {
					money *= 2;
					win = true;
				}
				(win) ? api.sendMessage(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}\nYou won\nReceive ${coin} dollar.`, threadID, () => Currencies.increaseMoney(senderID, parseInt(coin)), messageID) : api.sendMessage(`${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}|\nYou lose\nAmount of money ${coin} dollars will lose!.`, threadID, () => Currencies.decreaseMoney(senderID, parseInt(coin)), messageID);
}
