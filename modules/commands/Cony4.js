module.exports.config = {
	name: "سلاحي",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "عمر",
	description: "انت بمواجهة زومبي والبوت يختارلك سلاح",
	commandCategory: "ترفية", 
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

    var tle = Math.floor(Math.random() * 101);
    var tle1 = Math.floor(Math.random() * 101);
    var tle2 = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://choq.fm/wp-content/uploads/2020/03/1585152608_370_%D8%A3%D9%81%D8%B6%D9%84-12-%D8%B3%D9%84%D8%A7%D8%AD-%D9%84%D9%80-Call-of-Duty-Warzone.jpg",
"https://choq.fm/wp-content/uploads/2020/03/1585152608_73_%D8%A3%D9%81%D8%B6%D9%84-12-%D8%B3%D9%84%D8%A7%D8%AD-%D9%84%D9%80-Call-of-Duty-Warzone.jpg",
"https://choq.fm/wp-content/uploads/2020/03/1585152607_81_%D8%A3%D9%81%D8%B6%D9%84-12-%D8%B3%D9%84%D8%A7%D8%AD-%D9%84%D9%80-Call-of-Duty-Warzone.jpg",
"https://choq.fm/wp-content/uploads/2020/03/1585152607_81_%D8%A3%D9%81%D8%B6%D9%84-12-%D8%B3%D9%84%D8%A7%D8%AD-%D9%84%D9%80-Call-of-Duty-Warzone.jpg",
"https://choq.fm/wp-content/uploads/2020/03/1585152607_207_%D8%A3%D9%81%D8%B6%D9%84-12-%D8%B3%D9%84%D8%A7%D8%AD-%D9%84%D9%80-Call-of-Duty-Warzone.jpg",
"https://choq.fm/wp-content/uploads/2020/03/1585152607_48_%D8%A3%D9%81%D8%B6%D9%84-12-%D8%B3%D9%84%D8%A7%D8%AD-%D9%84%D9%80-Call-of-Duty-Warzone.jpg",
"https://static1-arabia.millenium.gg/articles/7/14/37/@/8163-68712-1188612-m4a1-orig-1-orig-2-amp_main_img-1.png",
"https://static1-arabia.millenium.gg/articles/7/14/37/@/8163-68712-1188612-m4a1-orig-1-orig-2-amp_main_img-1.png",
"https://static1-us.millenium.gg/articles/6/68/76/@/71442-alpha-article_m-2.jpg",
"http://www.ableammo.com/catalog/images/ssi/81474.jpg",
"https://cdni.rt.com/media/pics/2013.12/orig/670358.jpg",
"http://www.ableammo.com/catalog/images/ssi/81474.jpg",
"http://argaamplus.s3.amazonaws.com/2b89c76e-4c63-439e-ab19-2663ab21f177.jpg",
"http://argaamplus.s3.amazonaws.com/f968479e-9dff-4e1c-b991-ead4b73de310.jpg",
"https://3.bp.blogspot.com/-G8_hl9Hd5Mg/XBF_OU6ynII/AAAAAAAAAYo/c4R0SZXKNnsYlMXpleDsaOLQ3Yxz_AaPACLcBGAs/s1600/34.png",
"https://4.bp.blogspot.com/-I3EV33kwqUw/XBE6ljRy68I/AAAAAAAAAXg/bFzepzJUoBgjnDvRlJhzAxtgWGyek8rhwCK4BGAYYCw/s1600/26.png",
"https://2.bp.blogspot.com/-5W-NZF8wOjQ/XBE6lgaYyvI/AAAAAAAAAXM/MkB9VspOKj0hhm6dlPjbEUbiU47hZaQigCK4BGAYYCw/s1600/27.png",
"https://4.bp.blogspot.com/-btHgx0wKSRY/XBE6lkz6RGI/AAAAAAAAAXc/SraVQrmyWAQYWrYzaIWa9pHoGB8jMeGLQCK4BGAYYCw/s1600/28.png",
"https://2.bp.blogspot.com/-pTG0w2M9gU4/XBE6lq0cQcI/AAAAAAAAAXk/H5G_VG__QMoDDc8qaFCj73_ZW_oUArO2QCK4BGAYYCw/s1600/29.png",
"https://4.bp.blogspot.com/-r7vE-DJEZZA/XBE6ltEyrGI/AAAAAAAAAXY/ZDpqs6CWKfof07x7jBggPjNMtK7cWNMBgCK4BGAYYCw/s1600/30.png",
"https://3.bp.blogspot.com/-6uRaizvKXBs/XBE3N36EebI/AAAAAAAAAV8/ycC-rbrIzngaiidKo2FmJFzyaDET12pnQCK4BGAYYCw/s1600/20.png",
"https://1.bp.blogspot.com/-js1VPr1J8DA/XBE3qxH6MyI/AAAAAAAAAWI/hbTO9PPosXMnhFfuhIxZm189AlAskyMmwCK4BGAYYCw/s1600/21.png",
"https://4.bp.blogspot.com/-ElFqVSKro2w/XBE4K5jR1DI/AAAAAAAAAWU/KbY0wNLyQUYBM_nsIJR5VJYVLYNsQ0u1gCK4BGAYYCw/s1600/22.png",
"https://2.bp.blogspot.com/-avTGnlErtDc/XBE4jfW5ImI/AAAAAAAAAWg/CjnbNNC7fIIDeOnn6yfln-uA_9spgmr7ACK4BGAYYCw/s1600/23.png",
"https://3.bp.blogspot.com/-xeE4Y1Amfdc/XBE48ETr7tI/AAAAAAAAAWs/0MuoEKMnihg0J3PTy6BUJqr5_qi0RoHjgCK4BGAYYCw/s1600/24.png",
"https://3.bp.blogspot.com/-DwdgJJ2aXOc/XBEzZ7asG4I/AAAAAAAAAUo/XNFdEa0g2UQL9Cyngm_ZE9I3keuOiIdPQCK4BGAYYCw/s1600/13.png",
"https://4.bp.blogspot.com/-huwV0bq9Aqo/XBEz6fNnv0I/AAAAAAAAAU0/qJq32AdI00cSro78BtGIu7MHARlS4t30QCK4BGAYYCw/s1600/14.png",
"https://1.bp.blogspot.com/-QM7uXd4zXkg/XBE0cDU1r7I/AAAAAAAAAVA/kOBcTvLrtLIXJD2UM5GIl1ETZWFegkxNACK4BGAYYCw/s1600/15.png",
"https://2.bp.blogspot.com/-CLXwNe3JhOc/XBE1KmPAISI/AAAAAAAAAVM/Zl-WK3WCu1kPesxxo31lM_hlu9XHCVRawCK4BGAYYCw/s1600/16.png",
"https://1.bp.blogspot.com/-Jwi0HRryrxs/XBE1kWWs-XI/AAAAAAAAAVY/MbLo_cDiSDUWPh0GtU5Lp1JcLBayVy4QwCK4BGAYYCw/s1600/17.png",
"https://3.bp.blogspot.com/-6uRaizvKXBs/XBE3N36EebI/AAAAAAAAAV8/ycC-rbrIzngaiidKo2FmJFzyaDET12pnQCK4BGAYYCw/s1600/20.png",
"https://1.bp.blogspot.com/-js1VPr1J8DA/XBE3qxH6MyI/AAAAAAAAAWI/hbTO9PPosXMnhFfuhIxZm189AlAskyMmwCK4BGAYYCw/s1600/21.png",
"https://2.bp.blogspot.com/-ov2zwqBX5Zw/XBEwkVPx36I/AAAAAAAAATg/HroCycLSt08Lt9WgwuzPCUdIxMy7v_jEgCK4BGAYYCw/s1600/7.png",
"https://4.bp.blogspot.com/-y81cL4lztgw/XBEw_03xvDI/AAAAAAAAATs/pIL4pdyVWDMlxyOad_UNt4IEhqwvrjLgQCK4BGAYYCw/s1600/8.png",
"https://4.bp.blogspot.com/-df6mp-FnsRI/XBExY__5jPI/AAAAAAAAAT4/eBsFrb9n-fcZQorg2GkmzpmIWL9w5S07gCK4BGAYYCw/s1600/9.png",
"https://3.bp.blogspot.com/-172aXKTuq_w/XBEyiwpUd1I/AAAAAAAAAUQ/FoabnOMUh2YTVtLcp0x_JW7HwjvtLp5DQCK4BGAYYCw/s1600/11.png",
"https://2.bp.blogspot.com/-sFbfj-OslY0/XBEt0eHd83I/AAAAAAAAASk/JFFLk12lbWgs3CM8mk-jxi4ZcSJy7cyvgCK4BGAYYCw/s1600/2.png",
"https://1.bp.blogspot.com/-B6v072OC7F0/XBEudhs_98I/AAAAAAAAASw/ypbMRCGZPg8sEzMkqeqH-z5BzGr-VIuvwCK4BGAYYCw/s1600/3.png",
"https://1.bp.blogspot.com/-_GS0Ru_n0AQ/XBEu0Cm9gPI/AAAAAAAAAS8/hqHHYSCaTo4MONTpjCQr3NHk2MJO4yySwCK4BGAYYCw/s1600/4.png",
"https://2.bp.blogspot.com/-y5XyFWZ_aQA/XBEvNli07QI/AAAAAAAAATI/zv47ue3sHmEXXmZ6-EMErAeoqNF5aG3HQCK4BGAYYCw/s1600/5.png",
"https://2.bp.blogspot.com/-8QZKs5tYyQs/XBEv9OievnI/AAAAAAAAATU/x2oiIdJ8-YcDNUYg0oB_bg6AQOmm241LQCK4BGAYYCw/s1600/6.png",
"https://pubgarabia.com/wp-content/uploads/2018/10/pubg_weapon_m416_1-1024x517.jpg",
"https://3.bp.blogspot.com/--LD5A655r9Y/XBEtfgXJ9uI/AAAAAAAAASY/u5Rcn5gRaBARzgL72QZ1J0mECN0jDPuaQCK4BGAYYCw/s1600/1.png",
"https://1.bp.blogspot.com/-ficWdojqMWc/XWkvcvGOhiI/AAAAAAAAADw/504AlTGLM-wTNLnzTwe6NGpW9azyygSLQCLcBGAs/s1600/10.png",
"https://png.pngtree.com/png-vector/20210313/ourlarge/pngtree-shoes-rubber-flip-flops-daily-necessities-household-png-image_3052390.jpg",
"https://www.oqily.com/image/cache/catalog/Product-2019/Shoes/%D9%86%D8%B9%D8%A7%D9%84-sl-0079-3-1000x1000.jpg",
"https://www.oqily.com/image/cache/catalog/Product-2019/Shoes/sl-0079-%D9%86%D8%B9%D8%A7%D9%84-270x270.jpg",
"https://ae01.alicdn.com/kf/HTB19ztVcXuWBuNjSspnq6x1NVXav/1-MP4-CS.jpg_640x640.jpg",
"https://images-na.ssl-images-amazon.com/images/I/41Wf7mmaxFL.jpg",
"https://png.pngtree.com/png-vector/20210313/ourlarge/pngtree-shoes-rubber-flip-flops-daily-necessities-household-png-image_3052390.jpg",
"https://images-na.ssl-images-amazon.com/images/I/41MFZ4bNgqL.jpg",
"https://m.media-amazon.com/images/I/31-kXCquEoL._AC_SY1000_.jpg",
"https://images.yaoota.com/r_Gzm0FV_71ts1apagy_uuAu7Hs=/trim/yaootaweb-production/media/crawledproductimages/491ac34c87f7157eee4a951daf4ed9d09b98dc65.jpg",
];
  var callback = () => api.sendMessage({body:`📏 ${name}\n انت بمواجهة زومبي عددهم ${tle} وانت عدك ${tle1} طلقة ، نسبه انو تبقى عايش هيه ${tle2}%  
وسلاحك هوة :  `,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };