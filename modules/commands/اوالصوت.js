const fs = require('fs');
const ytdl = require('ytdl-core');
const axios = require('axios');
const { createReadStream, unlinkSync, statSync } = require("fs-extra");
const Youtube = require('youtube-search-api');
const { resolve } = require('path');

async function downloadMusicFromYoutube(link, path) {
  var timestart = Date.now();
  if(!link) return 'Missing link'
  var resolveFunc = function () { };
  var rejectFunc = function () { };
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });
    ytdl(link, {
            filter: format =>
                format.quality == 'tiny' && format.audioBitrate == 48 && format.hasAudio == true
        }).pipe(fs.createWriteStream(path))
        .on("close", async () => {
            var data = await ytdl.getInfo(link)
            var result = {
                title: data.videoDetails.title,
                dur: Number(data.videoDetails.lengthSeconds),
                viewCount: data.videoDetails.viewCount,
                likes: data.videoDetails.likes,
                author: data.videoDetails.author.name,
                timestart: timestart
            }
            resolveFunc(result)
        })
  return returnPromise
}

      async function downloadVideoFromYoutube(link, path) {
  var timestart = Date.now();
  if (!link) return 'Missing link';
  var resolveFunc = function () {};
  var rejectFunc = function () {};
  var returnPromise = new Promise(function (resolve, reject) {
    resolveFunc = resolve;
    rejectFunc = reject;
  });

  ytdl(link, {
    format: 'highest',
  }).pipe(fs.createWriteStream(path))
    .on("close", async () => {
      var data = await ytdl.getInfo(link);
      var result = {
        title: data.videoDetails.title,
        dur: Number(data.videoDetails.lengthSeconds),
        viewCount: data.videoDetails.viewCount,
        likes: data.videoDetails.likes,
        author: data.videoDetails.author.name,
        timestart: timestart,
      };
      resolveFunc(result);
    });

  return returnPromise;
            }


module.exports = {
  config: {
    name: "تلقائي",
    aliases: ["amusic", "automusic"],
    version: "1.0.0",
    role: 0,
    author: "Lou Fi",
    shortDescription: "تحميل أغاني تلقائيا من يوتيوب أو المقاطع الصغيرة",
    category: "المجموعة",
    guide: "{pn} تشغيل أو إيقاف",
    countDown: 0
  },
  atCall: async function ({ threadsData, message, event, args }) {
    if (args[0] == "off" || args[0] == "إيقاف") { 
      await threadsData.set(event.threadID, false, "settings.adm");
      message.reply('تم تعطيل التحميل التلقائي للأغاني ⬇️⏸️‼️');
    } else {
    await threadsData.set(event.threadID, true, "settings.adm");
      message.reply('تم تشغيل التحميل التلقائي للأغاني ⬇️✅');
    }
  },
  atChat: async function ({ event, api, message, threadsData, commandName }) {
    const { body, threadID } = event;
    const automatiquedm = await threadsData.get(event.threadID, "settings.adm");


    if (automatiquedm != true) return;
    if ((body && body.startsWith("https://youtu")) || (body && body.startsWith("https://music.youtube.com"))) {
      message.reaction('❔', event.messageID);
      message.reply(
      {
        body: "هل تريد أن أحمل الفيديو أو الصوت فقط ؟ ⬇️⏸️",
      },
      (err, info) => {
        global.YukiBot.atReply.set(info.messageID, {
          commandName,
          messageID: info.messageID,
          author: event.senderID,
          link: body
        });
      }
    );
    }

    //Facebook:
        /*if (body && (body.startsWith("https://fb.watch") || body.startsWith("https://www.facebook.com/reel"))) {
      message.reaction('❔', event.messageID);
      message.reply(
      {
        body: "تم رصد فيديو فايسبوك هل تريد أن أحمله لك ؟ ⬇️⏸️",
      },
      (err, info) => {
        global.YukiBot.atReply.set(info.messageID, {
          commandName: 'amusic',
          messageID: info.messageID,
          author: event.senderID,
          link: body,
          type: "fb"
        });
      }
    );
        }*/

    ///


        //

    //
  },
      atReply: async function({ event, api, message, Reply }) {
        const {commandName, link, author, type } = Reply;
        if (author != event.senderID) return;

        const path = resolve(__dirname, `cache/sing-${event.senderID}.mp3`);
      if (fs.existsSync(path)) { 
        fs.unlinkSync(path);
      }


        const vidpath = resolve(__dirname, `cache/sing-${event.senderID}.mp4`);
      if (fs.existsSync(vidpath)) { 
        fs.unlinkSync(vidpath);
        }
//vedio 
         if (event.body == "الفيديو") {
      message.reaction('⬇️', event.messageID);
      const data = await downloadVideoFromYoutube(link, vidpath);
        if (fs.statSync(vidpath).size > 80000000) {
          fs.unlinkSync(vidpath);
          message.reply('‼️ أكثر من 80 mb');
          return;
        }
        return message.reply({ 
          body: `⬇️ ${data.title} ⏸️✅\n🔄 ${Math.floor((Date.now() - data.timestart) / 1000)} /s \n🕛 المدة: ${data.dur} /s\n🎭 عدد المشاهدات: ${data.viewCount}\n`,
          attachment: createReadStream(vidpath)
        }, async () => { await fs.unlinkSync(vidpath) });
           message.reaction('✅', event.messageID);
    }


        //audio

               if (event.body == "الصوت") {
      message.reaction('⬇️', event.messageID);
      const data = await downloadMusicFromYoutube(link, path);
        if (fs.statSync(path).size > 26214400) {
          fs.unlinkSync(path);
          message.reply('‼️ أكثر من 25 mb');
          return;
        }
        return message.reply({ 
          body: `⬇️ ${data.title} ⏸️✅\n🔄 ${Math.floor((Date.now() - data.timestart) / 1000)} /s \n🕛 المدة: ${data.dur} /s\n🎭 عدد المشاهدات: ${data.viewCount}\n`,
          attachment: createReadStream(path)
        }, async () => { await fs.unlinkSync(path)} );
            message.reaction('✅', event.messageID);
               }

        /*if (type == "fb") {
          if (event.body == "نعم") {

    try {
      const response = await axios.get(`https://toxinum.xyz/api/v1/videofb?url=${link}`);

      if (response.data.success === false) {
        return message.reaction('❌', event.messageID);
      }

      message.reaction('⬇️', event.messageID);

      const stream = await global.utils.getStreamFromURL(response.data.url2); //url2 is for high quality videos & url1 is for low quality videos
      await message.reply({ attachment: stream });

      message.reaction('✅', event.messageID);
    }
    catch (e) {
      return message.reaction('❌', event.messageID);
    }
          }
        }*/
      }
    };
